import Image from "next/image";
import SocialsBlock from "../_components/socials-block";

export default function Home() {
  return (
    <section className="flex flex-wrap sm:flex-nowrap items-center mt-8">
      <div className="flex-none grow-1 self-start justify-items-center">
        <Image
          className="rounded-full dark:grayscale border-1 border-black"
          src="/images/logan.jpg"
          alt="Logan Headshot"
          width={200}
          height={200}
        />
      </div>
      <div className="flex flex-col mt-8 sm:mt-0 sm:ml-8">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          About Me
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Hi, I&apos;m Logan! I&apos;m a Sitecore Architect at{" "}
          <a
            href="https://hcahealthcare.com"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            HCA Healthcare
          </a>
          . I&apos;m passionate about building scalable, maintainable, and
          accessible web applications. I&apos;m currently focused on building
          out the next generation of healthcare applications using{" "}
          <a
            href="https://www.sitecore.com/"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sitecore
          </a>
          .
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Over the last decade, I&apos;ve built numerous websites and
          applications that have reached millions of users. I&apos;m passionate
          about leveraging different technologies to improve user and developer
          experiences.
        </p>
        <SocialsBlock />
      </div>
    </section>
  );
}
