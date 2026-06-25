import { getModelbyId } from "@/library/models"

type Props = {
    params: {
        id: string
    }
}

export default async function ModelDetailPage({ params }: Props) {
    const { id } = await params
    const model = await getModelbyId(id)
    return <h1>The name of this model is {model.name}</h1>
}