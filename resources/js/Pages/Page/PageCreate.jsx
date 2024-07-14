
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';
import axios from 'axios';

const recentOrderData = [
    {
        id: '1',
        serial: '1',
        project_name: 'Name',
        project_url: '.com',
        status: 'Active',
        action: ' 97424'
    },
    {
		id: '2',
		serial: '2',
		project_name: 'Name',
		project_url: '.com',
		status: 'Active',
		action: '90017'
	},
	{
		id: '3',
        serial: '3',
		project_name: 'Name',
		project_url: '.com',
		status: 'Active',
		action: '92683'
	},
	{
		id: '4',
        serial: '4',
		project_name: 'Name',
		project_url: '.com',
		status: 'Active',
		action: '94403'
	},
	{
		id: '5',
        serial: '5',
		project_name: 'Name',
		project_url: '.com',
		status: 'Active',
		action: '94403'
	},
	{
		id: '6',
		serial: '6',
		project_name: 'Name',
		project_url: '.com',
		status: 'Active',
		action: '90017'
	}
    
]


export default function pageInformation({ auth, projects, pages }) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [update, setUpdate] = useState(false)
    
    const {data, setData, post, put, get} = useForm({
        title:"",
        project_id:"",
        page_slug:""
    })
    
    
    const pageCreateSubmit = (e) => {
        e.preventDefault();
        post(route('page.store'))
        setIsModalOpen(false);
		setData(data.title="", data.project_id="", data.page_slug="");
    }

    const pageUpdateSubmit = (e) => {
        e.preventDefault();
        put(route('page.update', data.id))
        setIsModalOpen(false);
		setData(data.title="", data.project_id="", data.page_slug="");
    }


    const pageEdit = (e) => {
        setUpdate(true)
		setIsModalOpen(true),
		axios.get(`/page-edit/${e}`).then((response) => {
			setData({
                id:e,
				title:response.data.page.title,
				page_slug:response.data.page.page_slug,
				project_id:response.data.page.project_id
			})
			
		})
		
	}

    const pageDelete = (e) => {
        get(route('page.delete',e))
    }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Page</h2>}
        >
            <Head title="Project Edit" />
            <button className='bg-white text-black rounded-lg p-3 ml-[1020px] text-sm mt-[20px] font-bold' onClick={openModal}>Add</button>
            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <div className="border border-gray-200 rounded-sm">

                            <table className="w-full ">
                                <thead>
                                    <tr className='w-full text-sm '>
                                        <th className='py-3'>SL</th>
                                        <th className='py-3'>Page Name</th>
                                        <th className='py-3'>Page Slug</th>
                                        <th className='py-3'>Project Name</th>
                                        <th className='py-3'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pages.map((page, index) => (
                                        <tr key={page.id} className='text-center text-sm border-b-2 border-gray'>

                                            <td className=''> {index+1}</td>
                                            <td>{page.title}</td>
                                            <td>{page.page_slug}</td>
                                            <td>{page.project?.name}</td>
                                            <td>
                                            <button type="submit" onClick={(e) => pageEdit(page.id)} className="bg-blue-500 text-white p-2 mx-2 rounded hover:bg-blue-600 text-sm hover:focus:ring-2">Edit</button>
								            <button onClick={(e) => pageDelete(page.id)} className='bg-red-500 text-white p-2 rounded hover:bg-red-600 text-sm hover:focus:ring-2'>Delete</button>
                                                
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            


            {isModalOpen && (

                <div className='flex justify-center items-center absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity p-3'>
                <div className=" " >
                <div className=" max-w-3xl "  x-transition:enter="transition-opacity ease-out duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition-opacity ease-in duration-300" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0">
                    <div className="bg-white dark:bg-gray-800 pr-10 p-6 rounded-lg" >
                        <h1 className=' font-bold text-lg ml-7'>Page</h1>
                        <form className='p-8' onSubmit={update?pageUpdateSubmit:pageCreateSubmit} >
                           
                            <div className="sm:col-span-4 flex flex-row gap-6">
                                <label for="username" className="w-40 block text-sm font-medium leading-6 mt-3">Title</label>
                                <div className="mt-2 mb-2 w-full">
                                    <input type="text" name="title" id="title" onChange={(e) => setData('title', e.target.value)}  value={data.title} className="w-full border border-gray-300 rounded-md block text-gray-900 bg-transparent py-1.5 pl-1 placeholder: focus:ring-0 " placeholder="" />
                                </div>
                            </div>

                            <div className="sm:col-span-4 flex flex-row gap-6">
                                <label for="username" className="w-40 block text-sm font-medium leading-6 mt-3">Slug</label>
                                <div className="mt-2 mb-2 w-full">
                                    <input type="text" name="page_slug" onChange={(e) => setData('page_slug', e.target.value)} value={data.page_slug} 
                                    className="w-full block rounded-md bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  focus:ring-0 text-gray-900 border border-gray-300" placeholder="" />
                                </div>
                            </div>

                            <div className=" mt-3 flex flex-row gap-6">
                                    <label for="username" className="w-40 block text-sm font-medium leading-6 mt-2">Project</label>
                                    <div className="mt-2 mb-2 w-full">
                                        <select name='project_id' onChange={(e) => setData('project_id', e.target.value)} value={data.project_id} className="w-full px-5 text-gray-900 py-2 border border-gray-300 rounded-md ">
                                            {projects.map((project) => (
                                                <option value={project.id}>{project.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                
                                    <div className="flex justify-end gap-3">
                                        <button onClick={closeModal} className='bg-red-500 text-white p-2  rounded hover:bg-red-600 text-sm hover:focus:ring-2'>Close</button>
                                        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 text-sm hover:focus:ring-2">Submit</button>
                                    </div>
                        </form>
                    </div>  
                </div>

            </div>
            </div>
            )}
        </AuthenticatedLayout>
    )
}

