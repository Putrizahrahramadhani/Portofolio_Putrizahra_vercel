import Image from "next/image";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-black text-white flex flex-col items-center justify-center px-6 py-12">

      
      {/* FOTO */}
      <Image
        src="/profil_portofolio.jpeg"
        alt="Profile"
        width={160}
        height={150}
        className="rounded-full mb-6 border-4 border-white/20 shadow-xl hover:scale-105 transition-transform duration-300"
      />

      {/* HERO */}
      <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-purple-300 to-pink-600 bg-clip-text text-transparent">
        Hi, Im Putri Zahrah Ramadhani
      </h1>
      <p className="text-gray-300 text-center max-w-md mb-12">
        An Informatics Student and Web Developer who loves creating modern, interactive web experiences.
      </p>

      {/* ABOUT */}
      <h2 className="text-2xl font-semibold mb-2">“🌸 About Me 🌸”</h2>
      <p className="text-gray-400 text-center max-w-md mb-12">
        Im passionate about technology, UI/UX, and continuous learning. Currently learning Next.js and developing platforms.
      </p>

      {/* SKILLS */}
      <h2 className="text-2xl font-semibold mb-6">✨My Skills✨</h2>
        <div className="flex gap-6 text-4xl mb-16">
          <SiHtml5 size={40} color="#F97316" />
          <SiCss3 size={40} color="#2563EB" />         
          <SiJavascript size={40} color="#FACC15" />   
          <SiReact size={40} color="#22D3EE" />        
          <SiNextdotjs size={40} color="#FFFFFF" />
          <SiTailwindcss size={40} color="#38BDF8" />  
        </div>


      {/* CONTACT */}
      <h2 className="text-2xl font-semibold mb-3">🌻Contact Me🌻</h2>
      <p className="text-gray-400 mb-4">Let’s collaborate and build something amazing together!</p>
      <a
        href="mailto:example@email.com"
        className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium hover:opacity-90 transition"
      >
        🎀Email Me🎀
      </a>
    </main>
  );
}
