import { Categories } from '@/library/models'
import Link from 'next/link'

export default function CategoryCard ({ category, isActive }: {category: Categories, isActive: boolean}) {
    return (
        <Link href={`/models/categories/${category.slug}`}
        className={`text-lg hover:scale-125 transition-all duration-300 inline-block ${isActive ? 'underline decoration-2 underline-offset-8' : ''}`}>{category.displayName}</Link>
    )
}