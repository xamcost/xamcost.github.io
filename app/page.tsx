import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Image
          className=""
          src="/grand_duc_circle.svg"
          alt="Grand duc logo"
          width={180}
          height={38}
          priority
        />
        <a className="text-sm text-center font-[family-name:var(--font-geist-mono)]">
          Website under construction !
        </a>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link href="https://github.com/xamcost">
            <FaGithub size={40} />
          </Link>
          <Link href="https://www.linkedin.com/in/mcostalonga/">
            <FaLinkedin size={40} />
          </Link>
        </div>
      </main>
    </div>
  );
}
