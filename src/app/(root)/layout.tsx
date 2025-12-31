"use client";

import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import StreamClientProvider from "@/components/providers/StreamClientProvider";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SignedIn>
        <StreamClientProvider>{children}</StreamClientProvider>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

export default Layout;
