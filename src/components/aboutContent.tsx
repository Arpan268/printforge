import Image from 'next/image'

export default function AboutContent() {
    return (
        <main>
            <section className="flex flex-col items-center md:flex-row md:justify-center gap-10 border-b-2 border-gray-300 pb-10 px-4">
                <Image
                    src='https://media.licdn.com/dms/image/v2/C4D12AQELYKRbfw3VRQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1536038407051?e=2147483647&v=beta&t=iPuoPK81RgMylr43yaLCXseP0Gw2NR3dKvN8nnjYdXw'
                    alt='PrintForge Community - A group of makers collaborating on 3D printing projects'
                    height={667}
                    width={1280}
                    className="max-w-120 rounded"
                />
                <div className="flex flex-col items-baseline-last gap-4">
                    <h3 className="text-xl font-semibold">About PrintForge</h3>
                    <h1 className="text-2xl font-bold">Empowering makers worldwide</h1>
                    <p className="max-w-120">PrintForge is a platform dedicated to providing high-quality 3D printing files for creators
                        and enthusiasts alike. Our mission is to empower individuals to bring their ideas to life through the power of
                        3D printing. We offer a vast library of user-submitted models, ranging from simple designs to complex creations,
                        all available for free download. Whether you're a hobbyist, a professional designer, or just curious about 3D
                        printing, PrintForge is your go-to destination for discovering what's possible with this exciting technology.</p>
                </div>
            </section>

            <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 mt-10 mb-8 border-b-2 border-gray-300 pb-10">
                <div className="border-b-2 md:border-b-0 md:border-r-2 border-gray-300 ">
                    <h3 className="text-xl font-bold mb-2">100K+ Models</h3>
                    <p>Access our vast library of community-created 3D models, from simple to complex.</p>
                </div>
                <div className="border-b-2 md:border-b-0 md:border-r-2 border-gray-300 ">
                    <h3 className="text-xl font-bold mb-2">Active Community</h3>
                    <p>Join thousands of makers who share tips, provide feedbacks and collaborate on projects.</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-2">Free to Use</h3>
                    <p>Most models are free to download, with optional paid upgrades for premium features.</p>
                </div>
            </section>
        </main>
    )
}