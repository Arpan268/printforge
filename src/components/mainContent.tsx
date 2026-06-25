import Image from 'next/image'

export default function MainContent() {
    return (
        <main className="flex flex-col items-center md:flex-row md:justify-around md:mt-25">
            <div className="flex flex-col justify-center max-w-120 mb-10">
                <h3 className="text-sm hidden md:block">YOUR GO-TO PLATFORM FOR 3D PRINTING FILES</h3>
                <h1 className="text-4xl font-bold mb-2">Discover what's possible with 3D printing</h1>
                <h3>Join our community of creators and explore a vast library of user-submitted models</h3>
                <button className="border-2 w-fit px-1.5 py-1 mt-12 cursor-pointer rounded">BROWSE MODELS</button>
            </div>
            <Image
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjAtrtzbIKsljiFliH_1cS3ABEmS3Cs70TdXF1vTEomu3zYTRbwZCe5_oZ&s=10'
                alt='PrintForge 3D printing'
                width={1920}
                height={1280}
                className="max-w-120 rounded mb-10"
            />
        </main>
    )
}