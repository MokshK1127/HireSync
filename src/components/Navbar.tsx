"use client";

import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { CodeIcon } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import DasboardBtn from "./DasboardBtn";
import { Button } from "./ui/button";

function Navbar() {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* LEFT SIDE - LOGO */}
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-2xl font-mono hover:opacity-80 transition-opacity"
          >
            <CodeIcon className="size-8 text-emerald-500" />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              HireSync
            </span>
          </Link>

          {/* RIGHT SIDE - ACTIONS */}
          <div className="flex items-center space-x-4">
            <ModeToggle />
            
            <SignedOut>
              <div className="flex items-center space-x-2">
                <SignInButton mode="modal">
                  <Button variant="ghost" size="sm">
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button size="sm">
                    Sign Up
                  </Button>
                </SignUpButton>
              </div>
            </SignedOut>
            
            <SignedIn>
              <DasboardBtn />
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
