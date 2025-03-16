import Link from "next/link";
import { buttonVariants } from "@/lib/components/button";
import { ArrowLeft } from "lucide-react";

export default function Blog() {
  return (
    <div className="my-16 md:my-32">
      <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
        🚧 Coming Soon
      </h1>
      <p className="text-xl text-muted-foreground italic mt-2">
        I&apos;m working on it...
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        <Link href="/" className={buttonVariants({ variant: "secondary" })}>
          <ArrowLeft />
          Go Back
        </Link>
      </p>
    </div>
  );
}
