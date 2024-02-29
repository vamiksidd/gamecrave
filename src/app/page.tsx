import Featured from "@/components/Featured";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";

export default function Home() {
  return (
    <main className=" absolute inset-0 h-screen w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      <HeroSection />
      <Featured />
      <About />
    </main>
  );
}
