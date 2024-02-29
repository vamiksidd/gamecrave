"use client";
import Link from "next/link";
import gameData from "../data/game_underscore.json";
import { BackgroundGradient } from "./ui/background-gradient";

// make a structure of your data
interface Game {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  release_date: string;
  isFeatured: boolean;
}

export default function Featured() {
  //filter the data
  const featuredGame = gameData.games.filter((game: Game) => game.isFeatured);
  return (
    <div className="py-12 bg-transparent text-white ">
      <div>
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400">
            Featured
          </h2>
        </div>
      </div>
      <div className="mt-10">
        {/* render it here */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredGame.map((game: Game) => (
            <div key={game.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[0.125rem] overflow-hidden h-full max-w-sm">
                <div className="bg-black flex flex-col justify-between p-4 h-full w-full rounded-[0.125rem]">
                  <p className="font-bold">{game.title}</p>
                  <p className="text-white/[0.7]">{game.description}</p>
                  <p className="text-sm text-white/[0.5]">
                    Release Date : {game.release_date}
                  </p>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link href={"/games"}></Link>
      </div>
    </div>
  );
}
