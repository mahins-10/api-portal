import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';


export default function About({ auth }) {


    const pages = [
        {
            id: '',
            author: 'John Michael',
            function: 'Manager',
            status: 'Active',
            employed: ' 97424'
        },
        {

            author: 'Alexa Liras',
            function: 'Developer',
            status: 'Active',
            employed: ' 97424'
        },
        {

            author: 'Michael Levi',
            function: 'Executive',
            status: 'Inactive',
            employed: ' 97424'
        },
        {

            author: 'Richard Gran',
            function: 'Programer',
            status: 'Inactive',
            employed: ' 97424'
        },
        {

            author: 'Richard Gran',
            function: 'Programer',
            status: 'Inactive',
            employed: ' 97424'
        }

    ]

    const [modal, setModal] = useState();
    const [data, setData] = useState();

    const openModal = () => {
        setModal(true);
    }
    const updateData = (e) => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then((response) => {
            fetchData({
                id: e,
                author: response.data,
                function: response.data,
                status: response.data,
                employed: response.data

            })
        })



    }
    const showData = (e) => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then((response) => {
            setData(response.data)
        })
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Table</h2>}
        >
            <Head title="Table" />
            <div>
                <div className="w-full px-6 py-6 mx-auto">

                    <div className="flex flex-wrap -mx-3 ">
                        <div className="flex-none w-full max-w-full px-3">
                            <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-solid shadow-soft-xl rounded-xl">
                                <div className=" mx-8 border-b-solid rounded-t-2xl flex justify-between">
                                    <h6 className='text-lg py-4 px-3 text-gray-500 font-semibold'>Authors table</h6>
                                    <button className='bg-blue-400 px-3 mt-3 text-white rounded-md hover:bg-blue-800' onClick={openModal}>click</button>
                                </div>
                                <div className="flex-auto px-0 pt-0 pb-2">
                                    <div className="p-0 overflow-x-auto">
                                        <table className="items-center w-full border-gray-200 text-slate-500">
                                            <thead className="align-center">
                                                <tr>
                                                    <th className="px-3 py-3 font-bold text-center uppercase align-middle border-b border-gray-200  text-xs border-b-solid text-slate-400 opacity-70">SL</th>
                                                    <th className="px-3 py-3 font-bold text-center uppercase align-middle border-b border-gray-200  text-xs border-b-solid text-slate-400 opacity-70">Author</th>
                                                    <th className="px-3 py-3 font-bold text-center uppercase align-middle border-b border-gray-200  text-xs border-b-solid text-slate-400 opacity-70">Function</th>
                                                    <th className="px-3 py-3 font-bold text-center uppercase align-middle border-b border-gray-200  text-xs border-b-solid text-slate-400 opacity-70">Status</th>
                                                    <th className="px-3 py-3 font-bold text-center uppercase align-middle border-b border-gray-200  text-xs border-b-solid text-slate-400 opacity-70">Employed</th>
                                                    <th className="px-3 py-3 font-semibold  align-middle border-b border-gray-200 border-solid text-slate-400 opacity-70"></th>
                                                </tr>
                                            </thead>
                                            {/* <tbody>
                                                <tr>
                                                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <div className="flex px-2 py-1">
                                                            <div>
                                                                <img src="../assets/img/team-2.jpg" class="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl" alt="user1" />
                                                            </div>
                                                            <div className="flex flex-col justify-center">
                                                                <h6 className="mb-0 text-sm leading-normal">John Michael</h6>
                                                                <p className="mb-0 text-xs leading-tight text-slate-400">john@creative-tim.com</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <p class="mb-0 text-xs font-semibold leading-tight">Manager</p>
                                                        <p class="mb-0 text-xs leading-tight text-slate-400">Organization</p>
                                                    </td>
                                                    <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <span class="bg-gradient-to-tl from-green-600 to-lime-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Online</span>
                                                    </td>
                                                    <td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <span class="text-xs font-semibold leading-tight text-slate-400">23/04/18</span>
                                                    </td>
                                                    <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <a href="javascript:;" class="text-xs font-semibold leading-tight text-slate-400"> Edit </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <div class="flex px-2 py-1">
                                                            <div>
                                                                <img src="../assets/img/team-3.jpg" class="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl" alt="user2" />
                                                            </div>
                                                            <div class="flex flex-col justify-center">
                                                                <h6 class="mb-0 text-sm leading-normal">Alexa Liras</h6>
                                                                <p class="mb-0 text-xs leading-tight text-slate-400">alexa@creative-tim.com</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <p class="mb-0 text-xs font-semibold leading-tight">Programator</p>
                                                        <p class="mb-0 text-xs leading-tight text-slate-400">Developer</p>
                                                    </td>
                                                    <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <span class="bg-gradient-to-tl from-slate-600 to-slate-300 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Offline</span>
                                                    </td>
                                                    <td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <span class="text-xs font-semibold leading-tight text-slate-400">11/01/19</span>
                                                    </td>
                                                    <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <a href="javascript:;" class="text-xs font-semibold leading-tight text-slate-400"> Edit </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <div class="flex px-2 py-1">
                                                            <div>
                                                                <img src="../assets/img/team-4.jpg" class="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl" alt="user3" />
                                                            </div>
                                                            <div class="flex flex-col justify-center">
                                                                <h6 class="mb-0 text-sm leading-normal">Laurent Perrier</h6>
                                                                <p class="mb-0 text-xs leading-tight text-slate-400">laurent@creative-tim.com</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <p class="mb-0 text-xs font-semibold leading-tight">Executive</p>
                                                        <p class="mb-0 text-xs leading-tight text-slate-400">Projects</p>
                                                    </td>
                                                    <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <span class="bg-gradient-to-tl from-green-600 to-lime-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Online</span>
                                                    </td>
                                                    <td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <span class="text-xs font-semibold leading-tight text-slate-400">19/09/17</span>
                                                    </td>
                                                    <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <a href="javascript:;" class="text-xs font-semibold leading-tight text-slate-400"> Edit </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <div class="flex px-2 py-1">
                                                            <div>
                                                                <img src="../assets/img/team-3.jpg" class="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl" alt="user4" />
                                                            </div>
                                                            <div class="flex flex-col justify-center">
                                                                <h6 class="mb-0 text-sm leading-normal">Michael Levi</h6>
                                                                <p class="mb-0 text-xs leading-tight text-slate-400">michael@creative-tim.com</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <p class="mb-0 text-xs font-semibold leading-tight">Programator</p>
                                                        <p class="mb-0 text-xs leading-tight text-slate-400">Developer</p>
                                                    </td>
                                                    <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <span class="bg-gradient-to-tl from-green-600 to-lime-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Online</span>
                                                    </td>
                                                    <td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <span class="text-xs font-semibold leading-tight text-slate-400">24/12/08</span>
                                                    </td>
                                                    <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <a href="javascript:;" class="text-xs font-semibold leading-tight text-slate-400"> Edit </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <div class="flex px-2 py-1">
                                                            <div>
                                                                <img src="../assets/img/team-2.jpg" class="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl" alt="user5" />
                                                            </div>
                                                            <div class="flex flex-col justify-center">
                                                                <h6 class="mb-0 text-sm leading-normal">Richard Gran</h6>
                                                                <p class="mb-0 text-xs leading-tight text-slate-400">richard@creative-tim.com</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <p class="mb-0 text-xs font-semibold leading-tight">Manager</p>
                                                        <p class="mb-0 text-xs leading-tight text-slate-400">Executive</p>
                                                    </td>
                                                    <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <span class="bg-gradient-to-tl from-slate-600 to-slate-300 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Offline</span>
                                                    </td>
                                                    <td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <span class="text-xs font-semibold leading-tight text-slate-400">04/10/21</span>
                                                    </td>
                                                    <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <a href="javascript:;" class="text-xs font-semibold leading-tight text-slate-400"> Edit </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                                                        <div class="flex px-2 py-1">
                                                            <div>
                                                                <img src="../assets/img/team-4.jpg" class="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl" alt="user6" />
                                                            </div>
                                                            <div class="flex flex-col justify-center">
                                                                <h6 class="mb-0 text-sm leading-normal">Miriam Eric</h6>
                                                                <p class="mb-0 text-xs leading-tight text-slate-400">miriam@creative-tim.com</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                                                        <p class="mb-0 text-xs font-semibold leading-tight">Programtor</p>
                                                        <p class="mb-0 text-xs leading-tight text-slate-400">Developer</p>
                                                    </td>
                                                    <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                                                        <span class="bg-gradient-to-tl from-slate-600 to-slate-300 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Offline</span>
                                                    </td>
                                                    <td class="p-2 text-center align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                                                        <span class="text-xs font-semibold leading-tight text-slate-400">14/09/20</span>
                                                    </td>
                                                    <td class="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                                                        <a href="javascript:;" class="text-xs font-semibold leading-tight text-slate-400"> Edit </a>
                                                    </td>
                                                </tr>
                                            </tbody> */}

                                            <tbody>
                                                {pages.map((page, index) => (
                                                    <tr key={page.id} className='text-center border-b border-gray-200 border-solid'>

                                                        <td className='text-center '> {index + 1}</td>
                                                        <td className='text-center'>
                                                            <div className='flex justify-center gap-2 items-center'>
                                                                <img src="./images/avatar.avif" alt="" className='w-8 ' />
                                                                <p className='w-1/2 text-start '>{page.author}</p>
                                                            </div>
                                                        </td>

                                                        <td className='text-center'>
                                                            <div className=''>
                                                                {page.function}
                                                                <p className='text-xs'>mahin@gmail.com</p>
                                                            </div>
                                                        </td>

                                                        <td className=''>
                                                            <div className='inline-flex justify-center items-center h-full bg-gradient-to-tl from-green-600 to-lime-400 px-2 text-xs rounded-md font-bold text-white text-center'>
                                                                {page.status}
                                                            </div>
                                                        </td>
                                                        <td className='text-center'>{page.employed}</td>
                                                        <td className='text-center my-2'>
                                                            <button type="submit" onClick={showData} className="bg-blue-500 text-white p-2 my-2 rounded hover:bg-blue-600 text-sm hover:focus:ring-2">Edit</button>
                                                            <button type="submit" onClick={openModal} className="bg-blue-500 text-white p-2 ml-3 my-2 rounded hover:bg-blue-600 text-sm hover:focus:ring-2">Click</button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    <div>
                                        <h1>Testing Data</h1>
                                        {data?data.map((newData) => 
                                            <p>{newData.title}</p>
                                        ):""}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {modal && (

                    <div className='w-full absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity flex justify-center '>
                        <div className=" justify-center mt-6 " >
                            <div className="bg-white rounded-lg scale-75 transition ease-in-out" >

                                <form className='px-12 py-2 w-[400px]' >
                                    <h1 className='text-gray-700 font-bold text-3xl text-center pt-2 mb-3'>Sign Up</h1>
                                    <p className='text-sm text-center mt-2 text-gray-500 mb-3'>Let's get started with your 30 days free trail</p>
                                    <div className="mt-2 mb-3 ">
                                        {/* <label for="username" className="w-48 block text-md font-medium leading-6 text-white mt-3">Username</label> */}
                                        <div className=" ">
                                            <input type="text" name="name" onChange={(e) => setUpdate('firstname', e.target.value)} className="w-full rounded-md block font-sm  text-gray-900 bg-transparent  
                        placeholder:text-gray-400 focus:ring-0 " placeholder="First name" />
                                        </div>
                                    </div>

                                    <div className=" mt-2 mb-3 ">
                                        {/* <label for="username" className="w-48 block text-md font-medium leading-6 text-white mt-3">Username</label> */}
                                        <div className="mt-2 mb-2 w-full">
                                            <input type="text" name="name" onChange={(e) => setUpdate('lastname', e.target.value)} className="w-full rounded-md block  text-gray-900 bg-transparent  placeholder:text-gray-400 focus:ring-0 " placeholder="Last name" />
                                        </div>
                                    </div>

                                    <div className=" mt-2 mb-3">
                                        {/* <label for="username" className="w-48 block text-md font-medium leading-6 text-white mt-3">Email</label> */}
                                        <div className="mt-2 mb-2 w-full">
                                            <input type="email" email="email" onChange={(e) => setUpdate('email', e.target.value)} className="w-full rounded-md block  text-gray-900 bg-transparent  placeholder:text-gray-400 focus:ring-0 " placeholder="Email" />
                                        </div>
                                    </div>

                                    <div className="mt-2 mb-3 ">
                                        {/* <label for="username" className="w-48 block text-md font-medium leading-6 text-white mt-3">Email</label> */}
                                        <div className="mt-2 mb-2 w-full">
                                            <input type="date" onChange={(e) => setUpdate('birthdate', e.target.value)} className="w-full rounded-md block text-gray-900 bg-transparent placeholder:text-gray-400 focus:ring-0 " placeholder="Birth date" />
                                        </div>
                                    </div>

                                    <div className="mt-2 mb-3 ">
                                        {/* <label for="username" className="w-48 block text-md font-medium leading-6 text-white mt-3">Password</label> */}
                                        <div className="mt-2 mb-2 w-full">
                                            <input type="number" onChange={(e) => setUpdate('phone', e.target.value)} className="w-full rounded-md block  text-gray-900 bg-transparent placeholder:text-gray-400 focus:ring-0 " placeholder="Phone number" />
                                        </div>
                                    </div>

                                    <div className="mt-2 mb-3">
                                        {/* <label for="username" className="w-48 block text-md font-medium leading-6 text-white mt-3">Password</label> */}
                                        <div className="mt-2 mb-2 w-full">
                                            <input type="password" onChange={(e) => setUpdate('password', e.target.value)} className="w-full rounded-md block text-gray-900 bg-transparent  placeholder:text-gray-400 focus:ring-0 " placeholder="Password" />
                                        </div>
                                    </div>

                                    <div className="mt-2 mb-3">
                                        {/* <label for="username" className="w-48 block text-md font-medium leading-6 text-white mt-3">Confirm Password</label> */}
                                        <div className="mt-2 mb-2 w-full">
                                            <input type="password" onChange={(e) => setUpdate('confirmpassword', e.target.value)} className=" w-full rounded-md block text-gray-900 bg-transparent  placeholder:text-gray-400 focus:ring-0 " placeholder="Confirm Password" />
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <button type="register" className="bg-blue-500 text-white w-full p-2 mt-4 rounded hover:bg-blue-600 text-sm hover:focus:ring-2">Sign Up</button>
                                        <p className='mt-2 mb-1 text-sm text-gray-500'>Already have an account? <a href="" className='underline text-blue-500'>log in</a></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}

            </div>

        </AuthenticatedLayout>
    )
}