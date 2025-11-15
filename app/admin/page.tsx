import FootballLogo from '@/app/ui/football-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { merriweather } from '@/app/ui/fonts';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-4">
      {/* Outer wrapper for gradient border in dark mode */}
      <div className="dark:p-[2px] dark:bg-gradient-to-r dark:from-chief-300 dark:to-chief-100 rounded-lg shadow-md dark:shadow-chief-300/75">
        {/* Inner div with your original styling */}
        <div className="flex h-20 w-full shrink-0 items-end rounded-lg bg-chief-300 dark:bg-chief-400 p-4">
          <FootballLogo />
        </div>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-chief-200 dark:bg-chief-400 dark:border-2 dark:border-chief-200 px-6 py-10">
          <p className={`${merriweather.className}text-xl text-chief-400 dark:text-chief-50 md:text-3xl md:leading-normal`}>
            Welcome to <strong>Roughing the Blogger</strong> admin site. Please log in and prove yourself!
          </p>
          <Link
            href="/admin/login"
            className="flex items-center gap-5 self-start rounded-lg bg-chief-100 px-6 py-3 text-sm font-medium text-chief-400 transition-colors hover:bg-chief-300 hover:text-chief-50 md:text-base shadow-md dark:shadow-chief-100/50 dark:hover:shadow-chief-300/50"
          >
            <span>Login here</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-5 self-start rounded-lg bg-chief-100 px-6 py-3 text-sm font-medium text-chief-400 transition-colors hover:bg-chief-300 hover:text-chief-50 md:text-base shadow-md dark:shadow-chief-100/50 dark:hover:shadow-chief-300/50"
          >
            <span>Back Home</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex justify-center max-w-6xl mx-auto px-4">
            {/* Desktop Video - 16:9 aspect ratio */}
            <div className="hidden md:block w-full aspect-video">
                <iframe 
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/mt5eWqVj-gc?autoplay=1&mute=1&controls=1" 
                title="Burnt Ends vs Cuban Sandwich"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen 
                />
            </div>
            
            {/* Mobile Video - 16:9 aspect ratio */}
            <div className="block md:hidden w-full aspect-video">
                <iframe 
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/CtNAzlU7h4Q?autoplay=1&mute=1&controls=1" 
                title="Pittsburgh Smoked Ham vs Miami-Cuban Sandwich" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen 
                />
            </div>
        </div>
      </div>
    </main>
  );
}