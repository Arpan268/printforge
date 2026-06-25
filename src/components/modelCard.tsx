import Link from 'next/link'
import { Model } from './3dmodelContent'

export default function ModelCard({ model }: { model: Model }) {
    return (
        <Link href={`/models/${model.id}`} className="block h-full">
            <div className="flex flex-col h-full max-w-65 mb-10 border border-slate-400 rounded-lg p-2 hover:shadow-2xl hover:scale-102">
                <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-65 rounded mb-2"
                />
                <h2 className="font-bold">{model.name}</h2>
                <p className="text-gray-600">{model.description}</p>
                <div className="mt-auto flex flex-col gap-3">
                    <span className="border border-slate-400 rounded-3xl p-2 w-fit px-4">{model.category}</span>
                    <p className="mt-auto">
                        <span className="font-bold">Likes:</span> {model.likes}
                    </p>
                </div>
            </div>
        </Link>
    )
}