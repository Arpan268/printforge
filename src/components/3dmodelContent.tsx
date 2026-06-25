import ModelCard from '@/components/modelCard'
import SearchBar from './searchBar'

export type Model = {
    id: number
    name: string
    description: string
    likes: number
    image: string
    category: string
    dateAdded: string
}

export default function ModelsPageContent({ models, categoryName, search }: { models: Model[], categoryName?: string, search?: string }) {
    return (
        <main>
            <h1 className='font-bold text-2xl mb-10 text-center'>{!categoryName ? 'All Models' : `${categoryName}`}</h1>
            <SearchBar search={search}/>
            <section className="grid justify-items-center sm:grid-cols-2 md:grid-cols-4 px-6 gap-6 mb-10">
                {models.length > 0 ? models.map((item: Model) => <ModelCard key={item.id} model={item} />) : <h2>No models available</h2>}
            </section>
        </main>
    )
}