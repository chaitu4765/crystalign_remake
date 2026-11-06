"use client";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Dribbble,
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
    { icon: <Facebook size={20} />, label: "Facebook", href: "#" },
    { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
    { icon: <Twitter size={20} />, label: "Twitter", href: "#" },
    { icon: <Dribbble size={20} />, label: "Dribbble", href: "#" },
    { icon: <Globe size={20} />, label: "Globe", href: "#" },
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
