import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
const pageCreate = ({ auth }) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Project Create</h2>}
        >
            <Head title="Project Create" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-5">
                        <form action="">
                            <div className="sm:col-span-4">
                                <label for="username" class="block text-sm font-medium leading-6 text-white">Project Name</label>
                                <div className="mt-2 mb-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input type="text" name="username" id="username" className="block text-white flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="" />
                                    </div>
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <label for="username" className="block text-sm font-medium leading-6 text-white">Project URL</label>
                                <div className="mt-2 mb-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input type="url" name="username" id="username" className="block text-white flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="" />
                                    </div>
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <div className="mt-2 mb-2">
                                    <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 ml-[387px] text-sm hover:focus:ring-2">submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default pageCreate
