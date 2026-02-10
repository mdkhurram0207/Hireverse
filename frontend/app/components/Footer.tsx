import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black via-slate-950 to-black text-slate-300 pt-10 pb-8 px-6 border-t border-white/5 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold text-gray-50 tracking-tight">
            Hireverse Global
          </h3>
          <p className="text-slate-400 mt-2 italic text-sm">
            Empowering Your Workforce
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-center">
          <h4 className="text-sm font-semibold text-slate-400 uppercase mb-2 tracking-wide">
            Contact
          </h4>
          <a
            href="mailto:contact@hireverseglobal.in"
            className="block text-sm text-slate-200 hover:text-white transition-colors"
          >
            contact@hireverseglobal.in
          </a>
          <a
            href="https://t.me/Hireverseglobal"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm text-slate-200 hover:text-white transition-colors mt-1"
          >
            Telegram: @Hireverseglobal
          </a>
        </div>

        {/* Social Icons */}
        <div className="text-center lg:text-right">
          <h4 className="text-sm font-semibold text-slate-400 uppercase mb-2 tracking-wide">
            Follow Us
          </h4>
          <div className="flex justify-center lg:justify-end gap-6 mt-2">
            {[
              {
                href: "https://www.linkedin.com/company/hireverse-global/",
                label: "LinkedIn",
                svgPath:
                  "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.003 3.604 4.605v5.591z",
              },
              {
                href: "https://twitter.com/hireverseglobal",
                label: "Twitter",
                svgPath:
                  "M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 0 0-.664 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.514 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.457-2.548z",
              },
              {
                href: "https://facebook.com/hireverseglobal",
                label: "Facebook",
                svgPath:
                  "M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.294h6.116c.73 0 1.323-.593 1.323-1.326v-21.349c0-.733-.593-1.325-1.324-1.325z",
              },
            ].map((icon) => (
              <a
                key={icon.label}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={icon.label}
                className="text-slate-400 hover:text-white transition-colors duration-200"
              >
                <svg
                  width="22"
                  height="22"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={icon.svgPath} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Notice */}
      <div className="mt-8 border-t border-white/5 pt-5 text-center text-xs text-slate-500 select-none">
        &copy; {new Date().getFullYear()} Hireverse Global. All rights reserved.
      </div>
    </footer>
  );
}
