import CategoryNav from "@/components/categoryNav";
import { getAllCategories } from "@/library/models";

export default async function ModelsLayout({ children }: { children: React.ReactNode }) {
    const categories = await getAllCategories()
    return (
        <main>
            <div className='flex flex-col md:justify-between md:flex-row'>
                <CategoryNav categories={categories} />

                <div className="w-full md:ml-10">
                    {children}
                </div>
            </div>
        </main>
    )
}