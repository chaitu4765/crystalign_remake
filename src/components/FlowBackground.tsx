import { useEffect, useRef } from "react";

type FlowPath = {
  left: boolean;
  startRatio: number;
  offset: number;
  t: number;
  speed: number;
};

type Ripple = {
  x: number;
  y: number;
  radius: number;
  life: number;
};

export default function FlowBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const paths: FlowPath[] = Array.from({ length: 34 }, (_, index) => ({
      left: index % 2 === 0,
      startRatio: (index / 34) * 1.4 - 0.2,
      offset: 0,
      t: Math.random(),
      speed: 0.00075 + Math.random() * 0.00085,
    }));
    const ripples: Ripple[] = [];
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let width = 0;
    let height = 0;
    let animationFrame = 0;

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      if (reduceMotion) draw(0);
    };

    const pointOnCurve = (
      t: number,
      start: { x: number; y: number },
      control1: { x: number; y: number },
      control2: { x: number; y: number },
      end: { x: number; y: number },
    ) => {
      const inverse = 1 - t;
      return {
        x:
          inverse ** 3 * start.x +
          3 * inverse ** 2 * t * control1.x +
          3 * inverse * t ** 2 * control2.x +
          t ** 3 * end.x,
        y:
          inverse ** 3 * start.y +
          3 * inverse ** 2 * t * control1.y +
          3 * inverse * t ** 2 * control2.y +
          t ** 3 * end.y,
      };
    };

    const draw = (time: number) => {
      if (!width || !height) return;
      context.clearRect(0, 0, width, height);
      const centerX = width / 2;
      const centerY = height / 2;

      if (!reduceMotion) {
        for (let index = ripples.length - 1; index >= 0; index -= 1) {
          const ripple = ripples[index];
          ripple.radius += 1.8;
          ripple.life -= 0.012;
          if (ripple.life <= 0) ripples.splice(index, 1);
        }
      }

      paths.forEach((path) => {
        const start = {
          x: path.left ? 0 : width,
          y: path.startRatio * height + path.offset,
        };
        const control1 = {
          x: path.left ? centerX * 0.55 : width - centerX * 0.55,
          y: start.y,
        };
        const control2 = {
          x: path.left ? centerX * 0.82 : width - centerX * 0.82,
          y: centerY,
        };
        const end = { x: centerX, y: centerY };

        context.beginPath();
        context.moveTo(start.x, start.y);
        context.bezierCurveTo(
          control1.x,
          control1.y,
          control2.x,
          control2.y,
          end.x,
          end.y,
        );
        context.strokeStyle = "rgba(32, 133, 171, 0.14)";
        context.lineWidth = 0.8;
        context.setLineDash([1, 5]);
        context.stroke();
        context.setLineDash([]);

        if (!reduceMotion) path.t += path.speed * (time ? 1 : 0);
        if (path.t > 1) {
          path.t = 0;
          path.offset += (Math.random() - 0.5) * 9;
        }

        const particle = pointOnCurve(path.t, start, control1, control2, end);
        let offsetX = 0;
        let offsetY = 0;
        ripples.forEach((ripple) => {
          const dx = particle.x - ripple.x;
          const dy = particle.y - ripple.y;
          const distance = Math.hypot(dx, dy);
          if (distance < ripple.radius + 80 && distance > ripple.radius - 80) {
            const force = (1 - Math.abs(distance - ripple.radius) / 80) * ripple.life;
            offsetX += (dx / Math.max(distance, 1)) * force * 30;
            offsetY += (dy / Math.max(distance, 1)) * force * 30;
          }
        });

        context.fillStyle = "rgba(13, 49, 88, 0.32)";
        context.fillRect(particle.x + offsetX - 1, particle.y + offsetY - 1, 2, 2);
      });

      if (!reduceMotion) animationFrame = window.requestAnimationFrame(draw);
    };

    const onPointerDown = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      if (
        event.clientX >= bounds.left &&
        event.clientX <= bounds.right &&
        event.clientY >= bounds.top &&
        event.clientY <= bounds.bottom
      ) {
        ripples.push({
          x: event.clientX - bounds.left,
          y: event.clientY - bounds.top,
          radius: 0,
          life: 0.8,
        });
      }
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    window.addEventListener("pointerdown", onPointerDown);
    resize();
    if (!reduceMotion) animationFrame = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      observer.disconnect();
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  return (
    <div className="gateway-flow" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
