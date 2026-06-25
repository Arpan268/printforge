import ModelsPageContent, { Model } from "@/components/3dmodelContent"
import { getAllModels, getCategoriesbySlug } from "@/library/models"

type Props = {
    params: {
        slug: string
    }
}

export default async function FilterbyCategories({ params }: Props) {
    const { slug } = await params
    const category = await getCategoriesbySlug(slug)
    const models = await getAllModels()
    const filteredModels = models.filter((item: Model) => item.category === category.slug)
    return (
        <ModelsPageContent models={filteredModels} categoryName={category.displayName} />
    )
}