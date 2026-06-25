import { Model } from '@/components/3dmodelContent'
import modelsData from './models.json'
import categories from './categories.json'

export type Categories = {
    displayName: string
    slug: string
}

export async function getAllModels() {
    return modelsData
}

export async function getAllCategories() {
    return categories
}

export async function getModelbyId (id: string | number): Promise<Model> {
    const result = modelsData.find((item: Model) => item.id.toString() === id.toString())
    if(!result)
        throw new Error(`Model with id ${id} not found`)
    return result
}

export async function getCategoriesbySlug(slug: string): Promise<Categories> {
    const result = categories.find((item: Categories) => item.slug === slug)
    if(!result)
        throw new Error(`Category with slug ${slug} not found`)
    return result
}