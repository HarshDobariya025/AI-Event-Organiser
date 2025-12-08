"use client";

import React, { useState } from "react";
import Link from "next/link";
// import { Building, Crown, Plus, Sparkles, Ticket } from "lucide-react";
// import { SignInButton, useAuth, UserButton, useUser } from "@clerk/nextjs";
// import { Authenticated, Unauthenticated } from "convex/react";
// import { BarLoader } from "react-spinners";
// import { useStoreUser } from "@/hooks/use-store-user";
// import { useOnboarding } from "@/hooks/use-onboarding";
// import OnboardingModal from "./onboarding-modal";
// import SearchLocationBar from "./search-location-bar";
// import { Button } from "@/components/ui/button";
import Image from "next/image";
// import UpgradeModal from "./upgrade-modal";
// import { Badge } from "./ui/badge";

const Header = () => {
  return (
    <>
        <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-xl z-20 border-b">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                    src="/spott.png"
                    alt="Spott logo"
                    width={500}
                    height={500}
                    className="w-full h-11"
                    priority
                    />
                    {/* <span className="text-purple-500 text-2xl font-bold">spott*</span> */}
                    {/* {hasPro && (
                    <Badge className="bg-linear-to-r from-pink-500 to-orange-500 gap-1 text-white ml-3">
                        <Crown className="w-3 h-3" />
                        Pro
                    </Badge>
                    )} */}
                </Link>
            </div>
            
        </nav>
    </>
  )
}

export default Header