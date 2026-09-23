import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState, type ReactNode } from "react";
import { primaryNav } from "./site-data";
import { Button } from "@/components/ui/button";

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="bg-utility text-utility-foreground">
        <div className="site-container flex min-h-9 items-center justify-between gap-4 text-xs">
          <span className="hidden sm:inline">
            Government-recognised open schooling • Dehradun, Uttarakhand
          </span>
          <nav className="ml-auto flex items-center gap-4" aria-label="Utility navigation">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/sitemap">Sitemap</Link>
          </nav>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-border/80 bg-card/80 backdrop-blur-xl">
        <div className="site-container grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 sm:flex sm:justify-between sm:py-5">
          <Link
            to="/"
            className="flex min-w-0 items-center gap-3"
            aria-label="Uttarakhand Open School home"
          >
            <img
              src="/images/logo2.png"
              alt="Uttarakhand Open School logo"
              className="h-14 w-14 shrink-0 object-contain"
            />
            <span className="min-w-0">
              <strong className="block font-display text-lg leading-tight text-primary sm:text-2xl">
                Uttarakhand Open School, Dehradun<sup>®</sup>
              </strong>
              <span className="block text-xs font-medium text-muted-foreground sm:text-sm">
                Approved and Recognised
              </span>
            </span>
          </Link>
          <div className="hidden items-center gap-6 text-sm lg:flex">
            <span className="flex items-center gap-2">
              <Phone size={17} className="text-saffron" /> Student Helpline
            </span>
            <span className="flex items-center gap-2">
              <Mail size={17} className="text-saffron" /> Contact Office
            </span>
          </div>
          <Button
            variant="outline"
            className="h-11 w-11 p-0 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </Button>
        </div>
        <nav className="bg-primary text-primary-foreground" aria-label="Main navigation">
          <div className={`site-container ${open ? "block" : "hidden"} lg:block`}>
            <div className="grid py-2 lg:flex lg:flex-wrap lg:py-0">
              {primaryNav.map(([label, href]) => (
                <Link
                  key={href}
                  to={href}
                  onClick={() => setOpen(false)}
                  activeProps={{ className: "nav-active" }}
                  activeOptions={{ exact: href === "/" }}
                  className="nav-link"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>
      <div id="main-content">{children}</div>
      <footer className="border-t-4 border-saffron bg-primary text-primary-foreground">
        <div className="site-container grid gap-8 py-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <h2 className="font-display text-3xl font-bold leading-tight">
              Uttarakhand Open School
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-primary-foreground/80">
              Information on this website is provided for public guidance. Candidates should verify
              current dates, fees and requirements from official notifications.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black uppercase tracking-tight">Important Links</h2>
            <div className="mt-5 grid gap-3 text-lg text-primary-foreground/85">
              <Link to="/notices">Notices</Link>
              <Link to="/downloads">Downloads</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black uppercase tracking-tight">Website Information</h2>
            <p className="mt-5 text-lg text-primary-foreground/85">
              Last updated: 23rd September 2026
            </p>
            <div className="mt-5 inline-flex border border-primary-foreground/30 bg-primary-foreground/5 px-4 py-3 text-lg font-medium text-primary-foreground/90">
              Visitor No. 1,051,737
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="mb-4 h-px bg-primary-foreground/15" />
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground/65">
              Official portals
            </p>
            <div className="mt-3 grid grid-cols-2 items-center gap-3 sm:grid-cols-4">
              <a
                href="https://goidirectory.nic.in/"
                target="_blank"
                rel="noreferrer"
                className="flex h-20 items-center justify-center bg-transparent px-2 transition-opacity hover:opacity-85"
                aria-label="Government of India Directory"
              >
                <img
                  src="/footer/goi_india.png"
                  alt="GOI Directory"
                  className="max-h-16 w-full object-contain"
                />
              </a>
              <div className="flex h-20 items-center justify-center bg-transparent px-2">
                <img
                  src="/footer/flag1.png"
                  alt="Uttarakhand state emblem"
                  className="max-h-16 w-full object-contain"
                />
              </div>
              <a
                href="https://www.india.gov.in/"
                target="_blank"
                rel="noreferrer"
                className="flex h-20 items-center justify-center bg-transparent px-2 transition-opacity hover:opacity-85"
                aria-label="National Portal of India"
              >
                <img
                  src="/footer/india_gov.jpg"
                  alt="india.gov.in National Portal of India"
                  className="max-h-16 w-full object-contain"
                />
              </a>
              <a
                href="https://www.ugc.gov.in/"
                target="_blank"
                rel="noreferrer"
                className="flex h-20 items-center justify-center bg-transparent px-2 transition-opacity hover:opacity-85"
                aria-label="University Grants Commission"
              >
                <img
                  src="/footer/ugc.jpeg"
                  alt="University Grants Commission"
                  className="max-h-16 w-full object-contain"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/15">
          <div className="site-container py-5 text-sm leading-6 text-primary-foreground/80">
            <p className="italic text-primary-foreground/85">
              Disclaimer : This site is developed and hosted by Uttarakhand Open School, Dehradun.
              This information is brought to you by the Learning UOS. Links to other Internet sites
              and posting of news headlines should not be construed as an endorsement of the views
              contained therein. Best viewed in 1024 x 768 true colors, Internet Explorer version
              6.0 or above.
            </p>
            <p>©2018 All Rights Reserved Uttarakhand Open School, Dehradun</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
