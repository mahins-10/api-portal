
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import axios from 'axios';
import { useState } from 'react';

const recentOrderData = [
    {
        id: '1',
        serial: '1',
        project_name: 'Name',
        project_url: '.com',
        status: 'Active',
        action: ' '
    },
    
]


export default function pageInformation({ auth, pages, projects, pageInfo }) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [update, setUpdate] = useState(false)
    const [pagelist, setPageList] = useState(pages)

    const {data, setData, post, put, get} = useForm({
        project_id:'',
        page_id:'',
        meta_title:'',
        meta_description:'',
        canonical_tag:'',
        image_alt:'',
        status:''
    })

   

    const pageInfoEdit = (e) => {
        setUpdate(true)
        setIsModalOpen(true)
        axios.get(`/page-info-edit/${e}`).then((response) => {
			setData({
                id: e,
                project_id:response.data.pageInfo.project_id,
				page_id:response.data.pageInfo.page_id,
				meta_title:response.data.pageInfo.meta_title,
                meta_description: response.data.pageInfo.meta_description,
                canonical_tag: response.data.pageInfo.canonical_tag,
                status: response.data.pageInfo.status,
                image_alt: response.data.pageInfo.image_alt
			})
			
		})
    }
    
    const projectSelect = (e) => {
        axios.get(route("page.allPageByProject",e.target.value)).then((response) => {
            setPageList(response.data.allPagesByProject)
        })
    }

    const metaDetailSubmit = (e) => {
        e.preventDefault();
        post(route('info.page.store'))
        setData(data.project_id = "", data.page_id = "", data.meta_title="", data.meta_description="", data.canonical_tag="", data.image_alt="", data.status="");
        setIsModalOpen(false)
    }

    const metaDetailUpdate = (e) => {
        e.preventDefault();
        put(route('info.page.update', data.id))
        setIsModalOpen(false)
    }
  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const pageInfoDelete = (e) => {
    get(route('info.page.delete',e));
  }

  const closeModal = () => {
    setIsModalOpen(false);
  };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Page Information</h2>}
        >
            <Head title="Project Edit" />
            <button className='bg-white text-black rounded-lg p-3 ml-[1020px] text-sm mt-[20px] font-bold' onClick={openModal}>Add</button>
            <div className="py-12">
                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <div className="border border-gray-200 rounded-sm">

                            <table className="w-full p-2">
                                <thead>
                                    <tr className=' text-sm '>
                                    <th className='py-3'>SL</th>
                                        <th className='py-3'>Project Name</th>
                                        <th className='py-3'>Page Name</th>
                                        <th className='py-3'>Meta Description</th>
                                        <th className='py-3'>Meta Title</th>
                                        <th className='py-3'>Image Alt</th>
                                        <th className='py-3'>Canonical</th>
                                        <th className='py-3'>Status</th>
                                        <th className='py-3'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {pageInfo.map((page_info, index) => (
                                        <tr  key={page_info.id} className='text-center text-sm border-b-2 border-gray'>

                                            <td className=''> {index + 1}</td>
                                            <td>{page_info.project?.name}</td>
                                            <td>{page_info.page?.title}</td>
                                            <td>{page_info.meta_description}</td>                                                                                                  
                                            <td>{page_info.meta_title}</td>
                                            <td>{page_info.image_alt}</td>
                                            <td>{page_info.canonical_tag}</td>
                                            <td><button className='text-green-600 bg-green-200 p-1.5 m-1 rounded'>{page_info.status == 1 ? "Active" : "Inactive"}</button></td>
                                            <td>{page_info.action}</td>
                                            
                                            <td className='flex flex-row'>
                                                <button type="submit" onClick={(e) => pageInfoEdit(page_info.id)} className="bg-blue-500
                                                 p-2 mx-2 rounded hover:bg-blue-600 text-sm hover:focus:ring-2">Edit</button>
								                <button onClick={(e) => pageInfoDelete(page_info.id)} className='bg-red-500 p-2 rounded hover:bg-red-600 text-sm hover:focus:ring-2'>Delete</button>
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

                <div className='absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity p-3'>
                <div className="flex justify-center items-center " >
                <div className=" max-w-3xl "  x-transition:enter="transition-opacity ease-out duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition-opacity ease-in duration-300" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0">
                    <div className="bg-white dark:bg-gray-800 pr-10 p-6 rounded-lg" >
                        <h1 className=' font-bold text-lg ml-7'>Page Information</h1>
                        <form className=' p-8' onSubmit={update?metaDetailUpdate:metaDetailSubmit}>
                            <div>
                                <div className=" mt-3 flex flex-row gap-6">
                                    <label for="username" className="w-40 block text-sm font-medium leading-6  mt-2">Project</label>
                                    <div className="mt-2 mb-2 w-full">
                                        <select name='poject_id' onChange={ projectSelect } className="w-full px-5 py-2 border border-gray-300 rounded-md ">
                                            {projects.map((project) => (
                                                <option key={project.id} value={project.id}>{project.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                              <div>
                          </div>
                        </div>

                            <div className="sm:col-span-4 flex flex-row gap-6">
                                <label for="username" className="w-40 block text-sm font-medium leading-6 mt-3">Page Name</label>
                                <div className="mt-2 mb-2 w-full">
                                        <select name='poject_id' onChange={(e) => setData('page_id', e.target.value)} className="w-full px-5 py-2 border border-gray-300 rounded-md ">
                                            <option value="">Please choose Page</option>
                                            {pagelist.map((page) => 
                                                <option key={page.id} value={page.id}>{page.title}</option>
                                            )}
                                        </select>
                                    </div>
                                {/* <div className="mt-2 mb-2 w-full">
                                    <input type="url" name="username" className="w-full block text-white rounded-md bg-transparent py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 " placeholder="" />
                                </div> */}
                            </div>
                            

                            <div className="sm:col-span-4 flex flex-row gap-6">
                                <label for="username" className="w-40 block text-sm font-medium leading-6 mt-3">Meta Description</label>

                                <div className=" mt-2 mb-2 w-full rounded-md ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                                    <input type="text" name="meta_description" id="meta_description"  onChange={(e)=>setData('meta_description', e.target.value)} value={data.meta_description} 
                                    className="w-full block border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:leading-6" placeholder="" />
                                </div>
                            </div>

                            <div className="sm:col-span-4 flex flex-row gap-6">
                                <label for="username" className="w-40 block text-sm font-medium leading-6 mt-3">Meta Title</label>

                                <div className=" w-full rounded-md ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                                    <input type="text" name="meta_title" id="meta_title" onChange={(e)=> setData('meta_title', e.target.value)} value={data.meta_title} className="  block flex-1 w-full border-0 bg-transparent pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:leading-6" placeholder="" />
                                </div>
                                
                            </div>

                            <div className="sm:col-span-4 flex flex-row gap-6">
                                <label for="username" className="w-40 block text-sm font-medium leading-6  mt-3">Image Alt</label>

                                <div className="mt-2 mb-2 w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                                    <input type="text" name="image_alt" id="image_alt" onChange={(e)=> setData('image_alt', e.target.value)} value={data.image_alt} className="w-full block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0  sm:leading-6" placeholder="" />
                                </div>

                            </div>

                            <div className="sm:col-span-4 flex flex-row gap-6">
                                <label for="username" className="w-40 block text-sm font-medium leading-6 mt-3">Canonical</label>

                                <div className="mt-2 mb-2 w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                                    <input type="text" name="canonical_tag" id="canonical_tag" onChange={(e) => setData('canonical_tag', e.target.value)} value={data.canonical_tag} className="w-full  flex-1 border-0 bg-transparent py-1.5 pl-1  placeholder:text-gray-400 focus:ring-0  sm:leading-6" placeholder="" />
                                </div>
                            </div>

                            <div className=" mt-3 flex flex-row gap-6">
                                <label for="username" className="w-40 block text-sm font-medium leading-6 mt-2">Status</label>
                                <div className="mt-2 mb-2 w-full">
                                    <select name='status' id='satus' onChange={(e) => setData('status', e.target.value)} value={data.status} className="w-full px-5 py-2 border border-gray-300 rounded-md ">
                                        <option value="1" selected>Active</option>
                                        <option value="0"> Inactive</option>
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


