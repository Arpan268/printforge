'use client'

import Link from 'next/link'
import CategoryCard from '@/components/categoryCard'
import { Categories } from '@/library/models'
import { usePathname } from 'next/navigation'

export default function CategoryNav({ categories }: { categories: Categories[] }) {
    const pathname = usePathname()
    return (
        <aside className="flex flex-row flex-wrap md:flex-col gap-4 md:gap-8 md:ml-10 md:mt-20 text-orange-600 mb-8 md:mb-0 justify-center md:justify-start">
            <Link href='/models' className={`hover:scale-125 transition-all duration-300 inline-block ${pathname === '/models' ? 'underline decoration-2 underline-offset-8' : ''}`}>All</Link>
            {categories.map((item: Categories) => <CategoryCard key={item.slug} category={item} isActive={pathname === `/models/categories/${item.slug}`} />)}
        </aside>
    )
}