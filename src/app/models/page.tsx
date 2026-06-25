import { getAllModels } from '@/library/models'
import ModelsPageContent from '@/components/3dmodelContent'

type Props = {
    searchParams: Promise<{ search?: string }>
}

export default async function ModelsPage({ searchParams }: Props) {
    const { search } = await searchParams
    const models = await getAllModels()

    const filteredModels = search ? models.filter(item => item.name.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase())) : models
    return (
        <main>
            <ModelsPageContent models={filteredModels} search={search} />
        </main>)
}