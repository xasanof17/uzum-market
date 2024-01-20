"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();
  return (
    <section
      id="not-found"
      className="container prose flex flex-col items-center justify-center py-60"
    >
      <h1 className="text-center">404! Not Found Page</h1>
      <div className="flex w-full items-center justify-center">
        <Button onClick={() => router.back()}>Go to Back</Button>
      </div>
    </section>
  );
}
