import React from "react";
import Image from "next/image";
import { ClerkLoaded, ClerkLoading, SignedOut, SignedIn, SignUpButton, SignInButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      {/* Image Section */}
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:m-0">
        <Image src="/next.svg" alt="Hero" width={424} height={424} />
      </div>

      {/* Header Section */}
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
          Learn, practice and master subjects with Learnify
        </h1>
      </div>

      {/* Authentication Section */}
      <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedOut>
            <SignUpButton
              mode="modal"
              afterSignInUrl="/learn"
              afterSignUpUrl="/learn"
            >
              <Button variant="super" size="lg">Get Started</Button>
            </SignUpButton>
            <SignInButton
              mode="modal"
              afterSignInUrl="/learn"
              afterSignUpUrl="/learn"
            >
              <Button variant="primaryOutline" size="lg">I Already have an Account</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Button variant="secondary" size="lg" className="w-full" asChild>
              <a href="/learn">Continue Learning</a>
            </Button>
          </SignedIn>
        </ClerkLoaded>
      </div>
    </div>
  );
}
