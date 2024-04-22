import MaxWidthWarpper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Herosection from "@/components/Herosection";
import { HeroParallel } from "@/components/HeroParallel";
import RevealBoxes from "@/components/RevealBoxes";
import { InfiniteMovingCard } from "@/components/InfiniteMovingCard";
import { ThreeDCard } from "@/components/ThreeDCard";
import { AnimatedPin } from "@/components/AnimatedPin";
import { GoogleGemini } from "@/components/GoogleGemini";
import { AnimatedTooltipPreview } from "@/components/AnimatedTooltipPreview";
import { BackgroundBoxes } from "@/components/BackgroundBoxes";
import { Bento } from "@/components/Bento";
import { LampWhite } from "@/components/LampWhite";
import { StickyScrollReveal } from "@/components/StickyScrollReveal";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black  antialiased  ">
        <Herosection />
        <HeroParallel />
      </main>

      <MaxWidthWarpper>
        <div className=" py-20 mx-auto text-center flex flex-col items-center max-w-3xl mt-4 bg-black">
          <h1 className=" text-2xl font-bold tracking-tight  dark:text-white md:dark:text-white text-white sm:text-6xl ">
            Integrations with the tools you{" "}
            <span className=" text-blue-600">Love</span>.
          </h1>
        </div>
        <RevealBoxes />
      </MaxWidthWarpper>

      <InfiniteMovingCard />

      <ThreeDCard />

      <MaxWidthWarpper>
        <div className=" flex w-full ">
          <h1 className=" text-white font-bold text-3xl mx-auto ">
            Our Clients
          </h1>
        </div>

        <div className=" h-[30rem] w-full  mb-6 flex ">
          <div className="  h-[25rem] w-1/2 flex my-auto ml-32">
            <AnimatedPin />
          </div>
          <div className=" h-[25rem] w-1/2 flex my-auto mr-32">
            <AnimatedPin />
          </div>
        </div>
      </MaxWidthWarpper>
      <AnimatedTooltipPreview />
      <GoogleGemini />
      <MaxWidthWarpper className=" mt-5">
        <BackgroundBoxes />
      </MaxWidthWarpper>

      
      <LampWhite />
      <div className=" bg-white min-h-screen w-full">
        <h1 className=" font-bold text-7xl mx-10 py-4 ">Structure</h1>
        <StickyScrollReveal />
        <Bento />
      </div>
      
    </>
  );
}
