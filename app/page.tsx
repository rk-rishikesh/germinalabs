import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <Image 
        src="/home.svg" 
        alt="home" 
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center leading-tight" style={{ fontFamily: 'Inter, sans-serif', textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
          Seed <span className="font-bold text-[#D4FFA7]">developer</span> adoption.
        </h1>
      </div>
    </div>
  );
}
