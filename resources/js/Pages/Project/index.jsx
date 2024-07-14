
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

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


export default function RecentOrders({auth, projects}) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [update, setUpddate] = useState(false)

	const {data, setData, post, put, get} = useForm({
        name:'',
		url:'',
		status:''
    });


	const projectSubmit = (e) => {
		e.preventDefault();
		post(route('project.store'))
		setIsModalOpen(false);
		setData(data.name="", data.url="", data.status="");
	}

	const projectUpdate = (e) => {
		e.preventDefault();
		put(route('project.update',data.id))
		setIsModalOpen(false);
		setData(data.name="", data.url="", data.status="");
	}

	const projectEdit = (e) => {
		setUpddate(true)
		setIsModalOpen(true),
		axios.get(`/projects-edit/${e}`).then((response) => {
			
			setData({
				id:e,
				name:response.data.project.name,
				url:response.data.project.url,
				status:response.data.project.status
			})
			
		})
		
	}

	const projectDelete = (e) => {
		get(route('project.delete',e))
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
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Project</h2>}
        >
            <Head title="Project Edit" />
			
            <div className="py-12">
				
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
				<div className='flex items-end justify-end'>
			<button className='bg-white text-black rounded-lg p-3 text-sm mb-8 font-bold' onClick={openModal}>Add</button>

			</div>
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
					<div className="border border-gray-200 rounded-sm">
                <table className="w-full ">
                    <thead>
                        <tr className='w-full text-sm '>
                            <th className='py-3'>SL</th>
                            <th className='py-3'>Project Name</th>
                            <th className='py-3'>Project URL</th>
                            <th className='py-3'>Status</th>
                            <th className='py-3'>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {projects.map((project, index) => (
                            <tr key={project.id} className='text-center text-sm border-b-2 border-gray'>

                                <td className=''> {index+1}</td>
                                <td>{project.name}</td>
                                <td>{project.url}</td>
                                <td><button className='text-green-600 bg-green-200 p-1.5 m-1 rounded'>{project.status == 1 ? "Active" : "Inactive"}</button></td>
                                <td>
								<button type="submit" onClick={(e) => projectEdit(project.id)} className="bg-blue-500 text-white p-2 mx-2 rounded hover:bg-blue-600 text-sm hover:focus:ring-2">Edit</button>
								<button onClick={(e) => projectDelete(project.id)} className='bg-red-500 text-white p-2 rounded hover:bg-red-600 text-sm hover:focus:ring-2'>Delete</button>
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

<div className='absolute flex justify-center items-center inset-0 bg-gray-500 bg-opacity-75 h-full transition-opacity'>
<div  className=" " >
<div className=" max-w-2xl "  x-transition:enter="transition-opacity ease-out duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition-opacity ease-in duration-300" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0">
	<div className="bg-white dark:bg-gray-800 pr-10 p-6 rounded-lg" >
		<h1 className=' font-bold text-lg ml-7'>Project</h1>
		<form className=' p-8' onSubmit={update?projectUpdate:projectSubmit} >
			<div>
			<div className="sm:col-span-4 flex flex-row gap-6">
				<label for="username" className="w-40 block text-sm font-medium leading-6  mt-3">Project Name</label>
				<div className="mt-2 mb-2 w-full">
					<input type="text" name="name" id="name" value={data.name || ""} onChange={(e) => setData('name',e.target.value)} className="w-full border border-gray-300 rounded-md block text-gray-900 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 " placeholder="" />
				</div>
			</div>
			  <div>
			</div> 
		</div>
			<div className="sm:col-span-4 flex flex-row gap-6">
				<label for="username" className="w-40 block text-sm font-medium leading-6 mt-3 ">Project URL</label>
				<div className="mt-2 mb-2 w-full">
					<input type="text" name="url" id="url" value={data.url || ""} onChange={(e)=>setData('url', e.target.value)} className="w-full border border-gray-300 rounded-md block text-gray-900 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 " placeholder="" />
				</div>
			</div>

			<div className=" mt-3 flex flex-row gap-6">
				<label for="username" className="w-40 block text-sm font-medium leading-6 mt-2">Status</label>
				<div className="mt-2 mb-2 w-full">
					<select name='status' id='status' value={data.status} onChange={(e)=>setData('status', e.target.value)} className="w-full px-5 py-2 border border-gray-300 rounded-md ">
						<option value="1" >Active</option>
						<option value="0" >Inactive</option>
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
    );
}
