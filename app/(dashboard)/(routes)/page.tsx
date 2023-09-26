"use client";

import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import toast from "react-hot-toast";

export default function Home() {
  const onClick = () => {
    const loading = toast.loading("Loading");
    setTimeout(() => {
      toast.dismiss(loading);
      toast.success("Success");
    }, 2000);
  };

  return (
    <main className="p-10">
      <Button onClick={onClick}>Click</Button>
    </main>
  );
}
