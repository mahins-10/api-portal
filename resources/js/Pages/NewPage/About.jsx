
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';


export default function About({ auth }) {


  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">About</h2>}
    >
      <Head title="About" />

      <div className='bg-white p-6 rounded-lg shadow-lg mx-32 mt-8'>
        <h1 className='text-center text-3xl font-bold '>ABOUT <a href="" className='text-blue-400'>ME</a></h1>
        <div className='flex flex-row justify-between '>
          <div className='px-10 mt-20'>
            <h1 className='font-semibold text-xl'>Myself Sadman Sakib</h1>
            <p className='text-md text-gray-700'>Frontend Developer </p>
            <p className='text-sm text-gray-800'>Proin vitae placerat quam. Ut sodales eleifend urna, in condimentum tortor ultricies eu.
              Nunc auctor iaculis dolorProin vitae placerat quam. Proin vitae placerat quam.</p>

            <div>
              <button className='bg-blue-600 py-1 px-3 text-white rounded-md  mt-6 hover:bg-blue-800 hover:text-white'>Projects</button>
              <button className='bg-gray-600 py-1 px-3 rounded-md mt-6 hover:bg-gray-800 hover:text-white ml-3'>Hire</button>
            </div>
          </div>

          <div className='w-2/3'>
            <img src="./images/avatar.avif" className='w-2/3 transform-all hover:ease-out hover:skew-y-3' alt="" />
          </div>
        </div>

        <div class="w-full px-6 py-6 mx-auto">



        </div>
      </div>


    </AuthenticatedLayout>
  )
}

