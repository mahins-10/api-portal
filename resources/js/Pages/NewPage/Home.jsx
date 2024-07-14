
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head} from '@inertiajs/react';


export default function Home({ auth }) {


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-white leading-tight">Home</h2>}
        >
            <Head title="Home" />
            
            <div className=' flex flex-row justify-between bg-white pr-10 p-6 rounded-lg mt-10 mx-10 '>
            <div className='pt-10 px-10'>
                <p className='pb-4 text-red-600'>GET EVERY SINGLE SOLUTIONS</p>
                <h1 className='text-5xl font-bold mb-4'>I'm Sadman Mahin</h1>
                <p className='text-xl mb-4 transform transition-all duration-300 delay-300 animate-bounce'>Frontend Web Developer</p>
                <p className='w-2/3 mb-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, 
                    by injected humour, or randomised words which don't look even slightly believable. </p> 
                    <button className='bg-red-500 text-white p-3 rounded hover:bg-red-700 hover:transition-all hover:ease-in hover:scale-110'>Learn More</button>
                    <button className='bg-gray-300 text-black p-3 rounded ml-3 hover:bg-gray-600 hover:text-white hover:transition-all hover:ease-in hover:scale-110'>Hire me</button>
            </div>
            <div>
            <img src="./images/avatar.avif" alt="" className=' ' />

            </div>

            </div>

       
        </AuthenticatedLayout>
    )
}



























































// const recentOrderData = [
//     {
//         id: '1',
//         serial: '1',
//         project_name: 'Name',
//         project_url: '.com',
//         status: 'Active',
//         action: ' 97424'
//     },
    
    
// ]


// export default function Home({ auth }) {

    
  
//     return (
//         <AuthenticatedLayout
//             user={auth.user}
//             header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Home</h2>}
//         >
//             <Head title="Home" />
//             <button className='bg-white text-black rounded-lg p-3 ml-[1020px] text-sm mt-[20px] font-bold' >Add</button>
//             <div className="py-12">
//                 <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
//                     <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
//                         <div className="border border-gray-200 rounded-sm">

//                             <table className="w-full text-white">
//                                 <thead>
//                                     <tr className='w-full text-sm '>
//                                         <th className='py-3'>SL</th>
//                                         <th className='py-3'>Page Name</th>
//                                         <th className='py-3'>Page Slug</th>
//                                         <th className='py-3'>Project Name</th>
//                                         <th className='py-3'>Action</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>

                                  
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </div>
            


        

//                 {/* <div className='flex justify-center items-center absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity p-3'>
//                 <div  className=" " >
//                 <div className=" max-w-3xl "  >
//                     <div className="bg-white dark:bg-gray-800 pr-10 p-6 rounded-lg" >
//                         <h1 className='text-white font-bold text-lg ml-7'>Page</h1>
//                         <form className='p-8' >
                           
//                             <div className="sm:col-span-4 flex flex-row gap-6">
//                                 <label for="username" className="w-40 block text-sm font-medium leading-6 text-white mt-3">Title</label>
//                                 <div className="mt-2 mb-2 w-full">
//                                     <input type="text" name="title" id="title"  className="w-full rounded-md block text-white text-gray-900 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 " placeholder="" />
//                                 </div>
//                             </div>

//                             <div className="sm:col-span-4 flex flex-row gap-6">
//                                 <label for="username" className="w-40 block text-sm font-medium leading-6 text-white mt-3">Slug</label>
//                                 <div className="mt-2 mb-2 w-full">
//                                     <input type="text" name="page_slug"  className="w-full block text-white rounded-md bg-transparent py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 " placeholder="" />
//                                 </div>
//                             </div>

                            
//                                     <div className="flex justify-end gap-3">
//                                         <button className='bg-red-500 text-white p-2  rounded hover:bg-red-600 text-sm hover:focus:ring-2'>Close</button>
//                                         <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 text-sm hover:focus:ring-2">Submit</button>
//                                     </div>

//                         </form>
//                     </div>  

//                 </div>

//             </div>
//             </div> */}
            
//         </AuthenticatedLayout>
//     )
// }

