"use client";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";

export function HoverFooter() {
  // Footer link data adapted for crystalign.aligners
  const footerLinks = [
    {
      title: "About Crystalign",
      links: [
        { label: "About Us", href: "/about-us/" },
        { label: "Treatable Cases", href: "/treatable-cases/" },
        { label: "Aligner Accessories", href: "/#products" },
        { label: "How It Works", href: "/#steps" },
      ],
    },
    {
      title: "Patient Resources",
      links: [
        { label: "Smile Gallery", href: "/#results" },
        { label: "Why Crystalign", href: "/#why" },
        { label: "Frequently Asked Questions", href: "/contact-us/" },
        {
          label: "Free Consultation",
          href: "/contact-us/",
          pulse: true,
        },
      ],
    },
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[#3ca2fa]" />,
      text: "hello@crystalign.example",
      href: "mailto:hello@crystalign.example",
    },
    {
      icon: <Phone size={18} className="text-[#3ca2fa]" />,
      text: "+1 (555) 010-0199",
      href: "tel:+15550100199",
    },
    {
      icon: <MapPin size={18} className="text-[#3ca2fa]" />,
      text: "Demo Clinic, 100 Smile Avenue, Sample City, TN 600001.",
    },
  ];

  // Social media icons
  const socialLinks = [
    {
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z" />
        </svg>
      ),
      label: "Facebook",
      href: "#",
    },
    {
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      label: "Facebook",
      href: "#",
    },
    {
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      label: "Twitter",
      href: "#",
    },
    {
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.312c-.407-.083-2.268-.444-4.435-.125-.09-.204-.182-.409-.281-.613-.377-.775-.805-1.547-1.28-2.298 2.37-1.045 3.73-2.072 4.066-2.276zm-5.61-2.42c.86 1.134 1.636 2.457 2.29 3.914-1.927.766-4.382 1.353-7.223 1.542.92-2.158 2.766-3.87 4.933-5.456zm-6.953 2.593c.184.225.38.45.589.675 2.776-.176 5.213-.746 7.075-1.492-.61-1.359-1.332-2.589-2.13-3.64-2.525.962-4.48 2.658-5.534 4.457zm-1.895 5.217c0-.284.02-.564.056-.84.22.062 2.68.741 4.793.18.204.444.398.892.58 1.341-3.654 1.136-5.187 3.513-5.32 3.73-.07-.768-.109-1.583-.109-2.411zm2.342 5.097c.23-.339 1.706-2.383 5.174-3.418.968 2.613 1.488 5.372 1.611 6.541-2.909 1.11-6.177-.07-6.785-3.123zm8.396 2.71c-.139-1.12-.646-3.77-1.573-6.289 1.986-.33 3.696.002 4.072.083-.497 2.762-2.302 5.068-4.707 6.206z" />
        </svg>
      ),
      label: "Dribbble",
      href: "#",
    },
    {
      icon: <Globe size={20} />,
      label: "Globe",
      href: "#",
    },
  ];

  return (
    <footer className="bg-[#092542] text-slate-300 relative h-fit rounded-3xl overflow-hidden m-4 md:m-8 shadow-2xl">
      <div className="max-w-7xl mx-auto p-8 sm:p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <a href="/" className="inline-block" aria-label="crystalign.aligners home">
                <img
                  src="/images/crystalign-logo.svg"
                  alt="crystalign.aligners"
                  className="h-10 w-auto bg-white/95 px-2 py-1 rounded shadow-sm"
                />
              </a>
              <span className="text-white text-2xl font-bold tracking-tight">
                crystalign<span className="text-[#3ca2fa]">.aligners</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              Craft the smile you deserve with crystalign.aligners — modern, nearly invisible clear aligners custom-crafted for comfort, aesthetics, and lasting confidence.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-lg font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a
                      href={link.href}
                      className="hover:text-[#3ca2fa] transition-colors"
                    >
                      {link.label}
                    </a>
                    {link.pulse && (
                      <span className="absolute top-0 right-[-10px] w-2 h-2 rounded-full bg-[#3ca2fa] animate-pulse"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-[#3ca2fa] transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="hover:text-[#3ca2fa] transition-colors">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-slate-700/80 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0 text-slate-400">
          {/* Social icons */}
          <div className="flex space-x-6 text-slate-400">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-[#3ca2fa] transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} crystalign.aligners. All rights reserved.
          </p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36">
        <TextHoverEffect text="CRYSTALIGN" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

export default HoverFooter;
