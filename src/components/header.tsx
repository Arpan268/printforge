'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
    const pathname = usePathname()
    return (
        <header className="flex justify-between p-2 mb-10 border-b border-slate-300">
            <div className="flex gap-2 font-bold text-xl pt-2">
                <Link href="/">
                    <Image
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGbceZelHaWmyIaEnSdBpRz8vf7i-dOkCotAuwoujSpA&s=10}'
                        alt='PrintForge Logo'
                        width={1000}
                        height={1000}
                        className="w-10"
                    />
                </Link>
                <Link href="/">
                    <h1 className='hidden md:block'>PrintForge</h1>
                </Link>
            </div>

            <nav className="flex gap-8 mr-4 pt-3">
                <Link href="/models" className={pathname.startsWith('/models') ? 'underline decoration-2 underline-offset-8 text-orange-600' : ''}>3D MODELS</Link>
                <Link href="/about" className={pathname.startsWith('/about') ? 'underline decoration-2 underline-offset-8 text-orange-600' : ''}>ABOUT</Link>
            </nav>
        </header>
    )
}