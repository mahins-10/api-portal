
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Blog({ auth }) {

    const posts = [
        {
            id: 1,
            title: 'First Blog Post',
            content: ' first blog post...',

        },
        {
            id: 2,
            title: 'Second Blog Post',
            content: 'second blog post...',

        },
        {
            id: 3,
            title: 'Third Blog Post',
            content: ' third blog post...',
        },
    ];

    const [data, setData] = useState([]);
    const showData = (e) => {
        axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos`).then((response) => {
            setData(response.data)
        })
    }


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Blog</h2>}
        >
            <Head title="Blog" />


            <div>
                <div className="  px-4 py-8 flex flex-row gap-10">
                    <div className="flex flex-col gap-8 w-full">
                        {posts.map(post => (
                            <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
                                <p className="text-gray-700 mb-4">{post.content}</p>
                                <a className="text-blue-500 underline ">
                                    Read More
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className='w-[500px]'>
                        <div className='bg-white py-6 px-4 rounded-lg shadow-lg hover:-translate-y-1 hover:scale-110  duration-300'>
                            <div className='flex flex-row'>

                                <img src="./images/avatar.avif" alt="" className='rounded-full w-14' />
                                <div className='flex flex-col'>
                                    <h1 className='font-lg px-3 text-lg'> Sadman Mahin</h1>
                                    <h1 className='font-lg px-3 text-xs'>Give your space a parisan</h1>
                                </div>
                            </div>
                        </div>

                        <div className='bg-white py-6 px-4 rounded-lg shadow-lg mt-5 hover:-translate-y-1 hover:scale-110 duration-300'>
                            <div className='flex flex-row'>

                                <img src="./images/avatar.avif" alt="" className='rounded-full w-14' />
                                <div className='flex flex-col'>
                                    <h1 className='font-lg px-3 text-lg'> Sadman Mahin</h1>
                                    <h1 className='font-lg px-3 text-xs'> Give your space a parisan</h1>
                                </div>
                            </div>
                        </div>

                        <div className='bg-white py-6 px-4 rounded-lg shadow-lg mt-5 hover:-translate-y-1 hover:scale-110 duration-300'>
                            <div className='flex flex-row'>

                                <img src="./images/avatar.avif" alt="" className='rounded-full w-14' />
                                <div className='flex flex-col'>
                                    <h1 className='font-lg px-3 text-lg'> Sadman Mahin</h1>
                                    <h1 className=' font-lg px-3 text-xs'>Give your space a parisan</h1>
                                </div>
                            </div>
                        </div>

                        <div className='bg-white py-6 px-4 rounded-lg shadow-lg mt-5 hover:-translate-y-1 hover:scale-110 duration-300'>
                            <div className='flex flex-row'>

                                <img src="./images/avatar.avif" alt="" className='rounded-full w-14' />
                                <div className='flex flex-col'>
                                    <h1 className='font-lg px-3 text-lg'> Sadman Mahin</h1>
                                    <h1 className='font-lg px-3 text-xs'>Give your space a parisan</h1>
                                </div>
                            </div>
                        </div>

                        <div className='bg-white py-6 px-4 rounded-lg shadow-lg mt-5 hover:-translate-y-1 hover:scale-110 duration-300'>
                            <div className='flex flex-row'>

                                <img src="./images/avatar.avif" alt="" className='rounded-full w-14' />
                                <div className='flex flex-col'>
                                    <h1 className='font-lg px-3 text-lg'> Sadman Mahin</h1>
                                    <h1 className='font-lg px-3 text-xs'>Give your space a parisan</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-6'>
                        <div className="bg-white px-10 py-2 rounded-lg shadow-lg hover:translate-x-1 hover:scale-110 duration-300 ">
                            <div className='overflow-hidden'>
                                <img src="./images/avatar.avif" alt="" className='w-64 overflow-hidden rounded bg-cover bg-no-repeat' />
                                <a href="" className='text-blue-500 underline text-sm mt-3'>travel</a>
                                <h1 className='font-bold mt-2 text-sm'>Helpful Tips for working from home</h1>
                                <p className='text-xs'>Proin vitae placerat quam. Ut sodales eleifend urna, in condimentum tortor
                                    ultricies eu</p>

                            </div>
                        </div>

                        <div className="bg-white px-10 rounded-lg shadow-lg hover:translate-x-1 transition ease-in-out hover:scale-110 delay-150  duration-300">
                            <div className=''>
                                <img src="./images/avatar.avif" alt="" className='w-64 rounded overflow-hidden' />
                                <a href="" className='text-blue-500 underline text-sm mt-2 mb-2 mt-3'>travel</a>
                                <h1 className='font-bold mt-2 text-sm'>10 easy ways to enviromentally concious</h1>
                                <p className='text-xs mb-2'>Proin vitae placerat quam. Ut sodales eleifend urna, in condimentum tortor ultricies eu.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={showData} className='bg-blue-400 py-2 px-3 rounded-lg'>main</button>
                {data ? data.map((newData) =>
                    <div>
                    <p>{newData.title}</p>
                    <img src={newData.url} alt="" />
                    <p>{newData.thumbnailUrl}</p>
                
                    </div>
                ) : ""}
              

                <div class="grid grid-cols-3 gap-4 mx-10">
                    {/* <div className='bg-blue-400'>01</div>
                    <div className='bg-green-400'>02</div>
                    <div className='bg-green-400'>03</div>
                    <div className='bg-purple-400 row-span-3'>04</div>  
                    <div className='bg-green-400'>05</div>
                    <div className='bg-green-400'>06</div>
                    <div className='bg-red-400 col-span-2'>07</div>
                    <div className='bg-green-400'>08</div>
                    <div className='bg-green-400'>09</div> */}

                    <div className='col-span-3 bg-white rounded-lg shadow-lg'>01</div>
                    {/* <div className='row-span-3 bg-yellow-400'>02</div> */}
                    <div className=' bg-white rounded-lg shadow-lg'>03</div>
                    <div className=' bg-white rounded-lg shadow-lg'>04</div>
                    <div className=' rounded-lg '>

                    </div>
                    <div className=' col-span-3 bg-white rounded-lg shadow-lg'>06
                        <div>

                        </div>

                    </div>
                </div>
            </div>


        </AuthenticatedLayout>
    )
}

