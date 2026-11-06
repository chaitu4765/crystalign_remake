import { useCallback, useRef, type ReactNode } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  tiltLimit?: number;
  effect?: "gravitate" | "evade";
};

export function TiltCard({
  children,
  className = "",
  tiltLimit = 8,
  effect = "evade",
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card || event.pointerType === "touch" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    const direction = effect === "evade" ? -1 : 1;
    card.style.setProperty("--tilt-x", `${(y - 0.5) * tiltLimit * 2 * direction}deg`);
    card.style.setProperty("--tilt-y", `${(x - 0.5) * -tiltLimit * 2 * direction}deg`);
    card.style.setProperty("--shine-x", `${x * 100}%`);
    card.style.setProperty("--shine-y", `${y * 100}%`);
    card.classList.add("is-hovered");
  }, [effect, tiltLimit]);

  const reset = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
    card.classList.remove("is-hovered");
  }, []);

  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`}
      onPointerEnter={() => cardRef.current?.classList.add("is-hovered")}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
    >
      {children}
    </div>
  );
}
