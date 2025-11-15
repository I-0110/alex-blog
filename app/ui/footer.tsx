import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
      <footer className="bg-transparent text-chief-400 dark:text-chief-50 py-6 mt-auto">
        <div className="container mx-auto px-4 text-center">
            <Image
                className="h-12 w-12 brightness-0 dark:invert dark:opacity-90 mx-auto mb-4"
                src="/sports.png"
                alt="Blog Logo"
                width={100}
                height={20}
                priority
            />
            <p>Contact: <Link href="mailto:alexbecker101@gmail.com" className="underline">Alex Becker</Link></p>
            <p className="mt-2">
            Made by <Link href="https://github.com/I-0110" target="_blank" rel="noopener noreferrer" className="underline">@Ivelis Becker</Link>
            </p>
            <p>&copy; 2025</p>
        </div>
      </footer> 
    )
};