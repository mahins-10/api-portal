
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Service({ auth }) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Service</h2>}
        >
            <Head title="Service" />


            <div className=''>
                <div className=" text-center">
                    <h1 className='text-3xl mt-10 font-bold '>What we offer?</h1>
                </div>

                <div className='flex flex-row gap-10 justify-center mt-10 mx-10'>

                    {/* <div className=' flex flex-col justify-center bg-white p-6 rounded-lg shadow-lg overflow-hidden hover:translate-x-1 ease-in-out hover:scale-110 delay-200  '>
                    <img src="./images/hill.jpg" alt="" className='w-[500px] rounded mb-2 ' />

                        <h1 className='font-bold mb-2 text-xl'>Frontend Design</h1>
                        <p className='mb-2'>With React Js</p>
                        <p className='text-xs'>Proin vitae placerat quam. Ut sodales eleifend urna, in condimen tortor ultricies eu. 
                            Nunc auctor iaculis dolorProin vitae placerat quam. Proin vitae placerat quam.</p>
                    </div> */}
                    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:translate-y-2 hover:ease-in-out ">
                        <img className="w-full" src="./images/hill.jpg" alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p className="text-gray-700 text-sm mb-2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>

                    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:translate-x-1  ">
                        <img className="w-full" src="./images/hill.jpg" alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p className="text-gray-700 text-sm mb-2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>

                    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:translate-y-2 ">
                        <img className="w-full" src="./images/hill.jpg" alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p className="text-gray-700 text-sm mb-2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>









                </div>

            </div>




        </AuthenticatedLayout>
    )
}

