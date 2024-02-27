import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
export default function HeroSection() {
  return (
    <div className="h-[500px] md:h-[40rem] w-full rounded-sm flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="red" />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="t-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400">
          GameCrave
        </h1>
        <p className="mt-1 bg-clip-text text-transparent bg-gradient-to-t from-neutral-50 to bg-neutral-400">
          Stay ahead of the game as we unveil the latest releases, trends, and
          stories that shape the realms of virtual excitement. Level up your
          gaming experience with our daily dose of thrilling updates and expert
          perspectives. Game on, and let the Chronicles unfold!"
        </p>
        <div className="py-1 ">
          <Link
            href={"/explore"}
            className="text-[red]/[0.8] hover:text-[red]/[1] duration-300"
          >
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore...
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
