
import Authenticated from '@/Layouts/AuthenticatedLayout'
import React from 'react'



const Defining_routes= ({ auth }) => {
    return (


        <Authenticated user={auth.user} >
            <div className="overflow-y-auto h-screen ">
                <div className='bg-black md:w-full'>
                    <div className="flex-wrap ">
                        <h1 className="text-4xl font-bold text-white ml-4 pt-4">Documentation</h1>
                        <p className="mt-7 text-white mx-4">The skeleton of every application is routing.
                            This page will introduce you to the fundamental concepts of routing for the web and how to handle routing in Next.js.</p>
                        <p className="border-b border-gray-400 mt-8 mx-4"></p>
                    </div>


                    <div className="flex-wrap flex">
                        <p className="mt-7 text-white ml-4 mb-8">First, you will see these terms being used throughout the documentation. Here's a quick reference:</p>
                        <div className="sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg mx-auto">
                            <img src="./images/terminology-component-tree.avif" className=" rounded-lg mx-4 mb-4" alt="" />
                        </div>
                        <p className="mt-5 text-white ml-4 mb-2">- Tree: A convention for visualizing a hierarchical structure. For example, a component tree with parent and children components,
                            a folder structure, etc.</p>
                        <p className=" text-white ml-4 mb-2">- Subtree: Part of a tree, starting at a new root (first) and ending at the leaves (last).</p>
                        <p className=" text-white ml-4 mb-2">- Root: The first node in a tree or subtree, such as a root layout.</p>
                        <p className=" text-white ml-4 ">- Leaf: Nodes in a subtree that have no children, such as the last segment in a URL path.</p>
                    </div>

                </div>


                <div className='bg-black md:w-full w-full'>
                    <div className="flex-wrap ">
                        <h1 className="text-4xl font-bold text-white ml-4 pt-4">Routing Fundamentals</h1>
                        <p className="mt-7 text-white mx-4">The skeleton of every application is routing.
                            This page will introduce you to the fundamental concepts of routing for the web and how to handle routing in Next.js.</p>
                        <p className="border-b border-gray-400 mt-8 mx-4"></p>
                    </div>
                    <div className="flex-wrap flex">
                        <p className="mt-7 text-white ml-4 mb-8">First, you will see these terms being used throughout the documentation. Here's a quick reference:</p>
                        <div className="sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg mx-auto">
                            <img src="./images/terminology-component-tree.avif" className=" rounded-lg mx-4 mb-4" alt="" />
                        </div>
                        <p className="mt-5 text-white ml-4 mb-2">- Tree: A convention for visualizing a hierarchical structure. For example, a component tree with parent and children components,
                            a folder structure, etc.</p>
                        <p className=" text-white ml-4 mb-2">- Subtree: Part of a tree, starting at a new root (first) and ending at the leaves (last).</p>
                        <p className=" text-white ml-4 mb-2">- Root: The first node in a tree or subtree, such as a root layout.</p>
                        <p className=" text-white ml-4 ">- Leaf: Nodes in a subtree that have no children, such as the last segment in a URL path.</p>
                    </div>
        
                </div>
                
            </div>
            

        </Authenticated>
    )
}

export default Defining_routes
