import { yesteryear } from '@/app/ui/fonts';
import Image from "next/image";

export default function FootballLogo() {
    return (
        <div
        className={`${yesteryear.className} flex flex-row items-center leading-none text-chief-50`}
        >
            <p className="text-[32px]">Roughing the Blogger</p>
            <Image
                className="h-12 w-12 brightness-0 invert dark:opacity-90"
                src="/sports.png"
                alt="Blog Logo"
                width={100}
                height={20}
                priority
            />
        </div>
    )
}
