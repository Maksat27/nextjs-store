"use client";

import Link from "next/link";
import { useToast } from "../ui/use-toast";
import { SignOutButton } from "@clerk/nextjs";

const SignOutLink = () => {
  const { toast } = useToast();

  const handleLogout = () => {
    toast({ description: "Logged out successfully" });
  };
  return (
    <SignOutButton>
      <Link href="/" onClick={handleLogout} className="w-full text-left">
        Logout
      </Link>
    </SignOutButton>
  );
};

export default SignOutLink;
