"use client";

import Link from "next/link";
import { Terminal, Phone, MessageSquare } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function Footer() {
  const [contactMenuOpen, setContactMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // إغلاق القائمة عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setContactMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <footer className="border-t border-(--border-color) bg-(--bg-secondary) mt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl tracking-tight text-(--text-primary)"
            >
              <span className="p-1.5 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                <Terminal className="w-5 h-5" />
              </span>
              <span>
                Adam<span className="text-blue-600">.dev</span>
              </span>
            </Link>
            <p className="text-sm text-(--text-secondary) max-w-sm leading-relaxed">
              A modern engineering publication dedicated to modern web
              development, frontend architecture, and practical JavaScript &
              TypeScript patterns.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-(--text-primary) tracking-wider uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-(--text-secondary)">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-blue-600 transition-colors"
                >
                  All Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/bookmarks"
                  className="hover:text-blue-600 transition-colors"
                >
                  Saved Articles
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-(--text-primary) tracking-wider uppercase mb-4">
              Connect
            </h3>
            <div className="flex flex-col items-start gap-3 text-(--text-secondary)">
              {/* GitHub Link with Icon */}
              <a
                href="https://github.com/Ebrahim-Yousef"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-blue-600 transition-colors"
              >
                {/* <Github className="w-4 h-4" /> */}
                <span>GitHub</span>
              </a>

              {/* LinkedIn Link with Icon */}
              <a
                href="https://linkedin.com/in/ebrahim-yousef-07b524349"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-blue-600 transition-colors"
              >
                {/* <Linkedin className="w-4 h-4" /> */}
                <span>LinkedIn</span>
              </a>
              {/* Phone & WhatsApp Interactive Dropdown with Icon */}
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setContactMenuOpen(!contactMenuOpen)}
                  className="flex items-center gap-2 hover:text-blue-600 transition-colors text-left font-medium focus:outline-none"
                >
                  <Phone className="w-4 h-4" />
                  <span>+201018399732</span>
                </button>

                {contactMenuOpen && (
                  <div className="absolute bottom-full mb-2 left-0 w-48 rounded-xl border border-(--border-color) bg-(--bg-primary) shadow-lg py-2 z-50">
                    <a
                      href="tel:+201018399732"
                      onClick={() => setContactMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-(--text-primary) hover:bg-(--bg-secondary) transition-colors"
                    >
                      <Phone className="w-4 h-4 text-blue-600" />
                      <span>اتصال هاتفي</span>
                    </a>
                    <a
                      href="https://wa.me/201018399732"
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setContactMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-(--text-primary) hover:bg-(--bg-secondary) transition-colors"
                    >
                      <MessageSquare className="w-4 h-4 text-green-600" />
                      <span>واتساب</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-(--border-color) mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-(--text-muted)">
          <p>© 2026 Adam.dev. Built for modern software engineers.</p>
          <p className="mt-2 sm:mt-0">Crafted with Next.js & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
