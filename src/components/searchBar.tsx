import Form from 'next/form'

export default function SearchBar({ search }: { search?: string}) {
    return (
        <Form action='/models' className='text-center mb-10'>
            <input
                type='text'
                name='search'
                placeholder='Search...'
                className='py-2 px-3 border border-slate-400 rounded-3xl md:w-120 max-w-100 mr-5'
                defaultValue={search ? search : ''}
            />
            <button className='bg-orange-500 text-white py-2 px-5 rounded-lg cursor-pointer'>Search</button>
        </Form>
    )
}