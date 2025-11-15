import { Inter, Yesteryear, Merriweather } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const yesteryear = Yesteryear({
    weight: ['400'],
    subsets: ['latin'],
});

export const merriweather = Merriweather({
    weight: ['400', '700'],
    subsets: ['latin'],
})