"use client";

import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoaded } = useUser();

  // Wait for auth to load before checking SignedIn/SignedOut
  // This fixes the issue where Navbar doesn't show after sign-in redirect
  if (!isLoaded) {
    return <div className="min-h-screen">{children}</div>;
  }

  return (
    <>
      <SignedIn>
        <div className="min-h-screen">
          <Navbar />
          <main className="px-4 sm:px-6 lg:px-8">{children}</main>
        </div>
      </SignedIn>

      <SignedOut>{children}</SignedOut>
    </>
  );
}
