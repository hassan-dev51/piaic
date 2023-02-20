"use client";
import Hero from "@/components/Home";
import Programs from "@/components/Programs";
import VideoPlayer from "@/components/VideoPlayer";
import Partner from "@/components/Partner";
export default function Home() {
  return (
    <main className="bg-[#001102] ">
      <Hero />
      <Programs />
      <VideoPlayer />
      <Partner />
    </main>
  );
}
