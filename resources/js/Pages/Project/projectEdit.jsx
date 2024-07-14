
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
const projectEdit = ({ auth }) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Project Information</h2>}
        >
            <Head title="Project Edit" />

            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <form action="">
                            <div className=" mt-3 flex flex-row gap-6">
                                <label for="username" className="w-40 block text-sm font-medium leading-6  mt-2">Project Name</label>
                                <div className="mt-2 mb-2 w-full">
                                    <select className="w-full px-5 py-2 border boru-der-gray-300 rounded-md ">
                                        <option>service</option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                        <option>Option 4</option>
                                    </select>
                                </div>
                            </div>
                            <div className="sm:col-span-4 flex flex-row gap-6">
                                <label for="username" className="w-40 block text-sm font-medium leading-6 mt-3">Page</label>
                                <div className="mt-2 mb-2 w-full">
                                    <select className="w-full px-5 py-2 border border-gray-300 rounded-md ">
                                        <option>service</option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                        <option>Option 4</option>
                                    </select>
                                </div>
                            </div>

                            <div className="sm:col-span-4 flex flex-row gap-6">
                                <label for="username" className="w-40 block text-sm font-medium leading-6  mt-3">Title</label>

                                <div className="w-full mt-2 mb-2 rounded-md ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                                    <input type="url" name="username" id="username" className="w-full block text-white flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 " placeholder="" />
                                </div>

                            </div>

                            <div className="sm:col-span-4 flex flex-row gap-6">
                                <label for="username" className="w-40 block text-sm font-medium leading-6 mt-3">Meta Description</label>

                                <div className=" mt-2 mb-2 w-full rounded-md ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                                    <input type="url" name="username" id="username" className="w-full block border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:leading-6" placeholder="" />
                                </div>

                            </div>
                            <div className="sm:col-span-4 flex flex-row gap-6">
                                <label for="username" className="w-40 block text-sm font-medium leading-6 mt-3">Meta Title</label>

                                <div className=" w-full rounded-md ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                                    <input type="url" name="username" id="username" className=" text-white block flex-1 w-full border-0 bg-transparent pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:leading-6" placeholder="" />
                                </div>

                            </div>
                            <div className="sm:col-span-4 flex flex-row gap-6">
                                <label for="username" className="w-40 block text-sm font-medium leading-6 text-white mt-3">Image Alt</label>

                                <div className="mt-2 mb-2 w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                                    <input type="url" name="username" id="username" className="w-full text-white block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0  sm:leading-6" placeholder="" />
                                </div>

                            </div>

                            <div className="sm:col-span-4 flex flex-row gap-6">
                                <label for="username" className="w-40 block text-sm font-medium leading-6 text-white mt-3">Canonical</label>

                                <div className="mt-2 mb-2 w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                                    <input type="url" name="username" id="username" className="w-full text-white flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0  sm:leading-6" placeholder="" />
                                </div>

                            </div>

                            <div className="sm:col-span-4 flex flex-row gap-6">
                                <div className="mt-2 mb-2">
                                    <div className="">
                                        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 ml-[720px] text-sm hover:focus:ring-2">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default projectEdit












//         <>

//            <form  className='mt-10 shadow-lg p-[80px] mx-10'>
//             <div className="flex ">
//                 <div className="flex-1">
//                     <label for="name" className="block font-bold text-gray-700 mb-1">Name</label>
//                     <input type="text" id="name" name="name" value="Name" className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"/>
//                 </div>
//                 <div className="flex items-end ml-4 mb-4">
//                     <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 text-sm mx-2">Edit</button>
//                     <button type="submit" className="bg-red-500 text-white p-2 rounded hover:bg-red-600 text-sm">Delete</button>
//                 </div>
//             </div>
//             <div className="flex mb-4">
//                 <div className="flex-1">
//                     <label for="email" className="block text-sm font-bold text-gray-700 mb-1">Email</label>
//                     <input type="email" id="email" name="email" value="email" className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"/>
//                 </div>
//                 <div className="flex items-end ml-4 mb-4">
//                 <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 text-sm mx-2">Edit</button>
//                 <button type="button" className="bg-red-500 text-white p-2 rounded hover:bg-red-600 text-sm">Delete</button>
//                 </div>
//             </div>
//             <div className="flex mb-4">
//                 <div className="flex-1">
//                     <label for="phone" className="block text-sm font-bold text-gray-700 mb-1">Phone</label>
//                     <input type="tel" id="phone" name="phone" value="phone" class="w-full p-2 border mb-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"/>
//                 </div>
//                 <div className="flex items-end ml-4 mb-4">
//                     <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 text-sm mx-2">Edit</button>

//                     <button type="button" className="bg-red-500 text-white p-2 rounded hover:bg-red-600 text-sm">Delete</button>
//                 </div>
//             </div>
//             <div className="flex mb-4">
//                 <div class="flex-1">
//                     <label for="address" className="block text-sm font-bold text-gray-700 mb-1">Address</label>
//                     <input type="text" id="address" name="address" value="Address" className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"/>
//                 </div>
//                 <div className="flex items-end ml-4 mb-4">
//                      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 text-sm mx-2">Edit</button>
//                     <button type="button" className="bg-red-500 text-white p-2 rounded hover:bg-red-600 text-sm">Delete</button>
//                 </div>
//             </div>

//         </form>




//         </>
//     );
// }
