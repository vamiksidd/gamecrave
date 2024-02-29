import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
export default function HeroSection() {
  return (
    <div className="h-[650px] md:h-[100vh] w-full rounded-sm flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="red" />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="t-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400">
          GameCrave
        </h1>
        <div className="flex items-center justify-center">
          <p
            className="mt-1 bg-clip-text text-transparent md:max-w-[70%]
        bg-gradient-to-t from-neutral-50 to bg-neutral-400"
          >
           Stay at the forefront as we reveal the newest releases, trends, and narratives influencing the realms of virtual excitement. Enhance your gaming adventure with our daily infusion of exciting updates and expert insights. Dive into the Chronicles and elevate your gaming experience! Game on
          </p>
        </div>
        <div className="py-4 ">
          <Link href={"/explore"}>
            <Button
              borderRadius="0.125rem"
              className="bg-white dark:bg-black hover:bg-slate-950/[0.4] text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore...
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
