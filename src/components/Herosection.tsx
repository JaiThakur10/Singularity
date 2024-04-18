import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/button";



function Herosection() {
    const words = [
        {
          text: "Build",
        },
        {
          text: "awesome",
        },
        {
          text: "apps",
        },
        {
          text: "with",
        },
        {
          text: "SINGULARITY.",
          className: "text-blue-500 dark:text-blue-500",
        },
      ];
  return (
    <div className=" h-auto md:h-[40rem] w-full rounded-md flex
    flex-col items-center justify-center relative overflow-hidden
    mx-auto py-10 md:py-0">
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" mt-20 p-4 relative z-10 w-full  text-center">
        <h1 className="  mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent
        bg-gradient-to-b from-neutral-50">Build with the power of code — without writing any</h1>

         <div className="p-4 w-full text-center mx-20 px-20 rom-neutral-50">
         
         </div>
        <div className="mt-8">
            <Link href= {"/courses"}>
                <Button className=" bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">
                    Get Started
                </Button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Herosection