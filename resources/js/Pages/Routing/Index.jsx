
import Authenticated from '@/Layouts/AuthenticatedLayout'
import React from 'react'



const Index = ({ auth }) => {
    return (


        <Authenticated user={auth.user} >
            <div className="overflow-y-auto h-screen bg-white ">
                <div className=' text-black md:w-full'>
                    <div className="flex-wrap ">
                        <h1 className="text-4xl font-bold ml-4 pt-4 mt-8">Routing Fundamentals</h1>
                        <p className="mt-7 text-md mx-4 text-gray-700 font-medium">The skeleton of every application is routing.
                            This page will introduce you to the fundamental concepts of routing for the web and
                            how to handle routing in Next.js.</p>
                        <p className="border-b border-gray-200 mt-8 mx-4"></p>
                    </div>


                    <div className="flex-wrap bg-white">
                        <h1 className='text-2xl ml-4 font-bold mt-8'>Terminology</h1>
                        <p className="mt-7 ml-4 mb-8 text-gray-700 text-md font-medium">First, you will see these terms being used throughout the documentation. Here's a quick reference:</p>
                        <div className=" mx-4 mb-6 flex justify-center">
                            <img src="./images/terminology-component-tree.avif" className=" rounded-lg h-64" alt="" />
                        </div>
                        <p className="mt-5 ml-4 mb-2 font-medium text-gray-500"> <span className='font-black text-black'>- Tree: </span>
                            A convention for visualizing a hierarchical structure. For example, a component tree with parent and children components,
                            a folder structure, etc.</p>
                        <p className=" ml-4 mb-2 font-medium text-gray-500"><span className='font-black text-black'>- Subtree: </span> Part of a tree, starting at a new root (first) and ending at the leaves (last).</p>
                        <p className=" ml-4 mb-2 font-medium text-gray-500"><span className='font-black text-black'>- Root: </span>The first node in a tree or subtree, such as a root layout.</p>
                        <p className=" ml-4 font-medium text-gray-500"><span className='font-black text-black'>- Leaf: </span> Nodes in a subtree that have no children, such as the last segment in a URL path.</p>
                    </div>

                </div>

                {/* .................2nd */}
                <div className="flex gap-4 text-white  w-full flex-col md:flex-row bg-white px-4 ">
                    <div className="px-4 py-3 rounded-md mt-10 mb-10 shadow-md border border-gray-200 w-full">
                        <h1 className="text-blue-500 hover:text-black text-md mb-2 text-lg font-bold ">Routing</h1>
                        <p className="text-gray-500 text-sm">Learn the fundamentals of routing for front-end applications with the Pages Router..</p>
                    </div>
                    <div className="px-4 py-3 rounded-md mt-10 mb-10 shadow-md border border-gray-200 w-full">
                        <h1 className="text-blue-500 hover:text-black text-md mb-2 text-lg font-bold">Rendering</h1>
                        <p className="text-gray-500 text-sm ">Learn the fundamentals of rendering in React and Next.js. </p>
                    </div>
                    <div className="px-4 py-3 rounded-md mt-10 mb-10 shadow-md border border-gray-200 w-full">
                        <h1 className="text-blue-500 hover:text-black text-md mb-2 text-lg font-bold">Data Fetching
                        </h1>
                        <p className="text-gray-500 text-sm ">
                            Next.js allows you to fetch data in multiple ways, with pre-rendering,
                            server-side.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 text-white  w-full flex-col md:flex-row bg-white px-4 ">
                    <div className="px-4 py-3 rounded-md mb-10 shadow-md border border-gray-200 w-full">
                        <h1 className="text-blue-500 hover:text-black text-md mb-2 text-lg font-bold">Styling</h1>
                        <p className="text-gray-500 text-sm">Learn the fundamentals of routing for front-end applications with the Pages Router..</p>
                    </div>
                    <div className="px-4 py-3 rounded-md mb-10 shadow-md border border-gray-200 w-full">
                        <h1 className="text-blue-500 hover:text-black text-md mb-2 text-lg font-bold">Optimizing</h1>
                        <p className="text-gray-500 text-sm ">Learn the fundamentals of rendering in React and Next.js. </p>
                    </div>
                    <div className="px-4 py-3 rounded-md mb-10 shadow-md border border-gray-200 w-full">
                        <h1 className="text-blue-500 hover:text-black text-md mb-2 text-lg font-bold">Configuring</h1>
                        <p className="text-gray-500 text-sm">
                            Next.js allows you to fetch data in multiple ways, with pre-rendering,server-side.</p>
                    </div>
                </div>


                {/* <.........3rd...... */}

                <div className=''>
                    <div className='bg-white '>
                        <div className="">
                            <h1 className="text-4xl font-bold ml-4 pt-4">Rendering</h1>
                            <p className="mt-7 ml-4 mb-8 text-gray-700 text-md font-medium"> Rendering converts the code you write into user interfaces.
                                React and Next.js allow you to create hybrid web applications where parts of your code can be rendered on
                                the server or the client. This section will help you understand the differences between these rendering environments,
                                strategies, and runtimes.</p>
                            <p className="border-b border-gray-200 mt-8 mx-4"></p>
                        </div>
                        <div className="">
                            <h1 className="text-2xl font-bold ml-4 pt-4">Fundamentals</h1>
                            <p className="mt-4 mx-4 ml-4 mb-4 text-gray-700 text-md font-medium">
                                To start, it's helpful to be familiar with three foundational web concepts:</p>
                            <p className=" ml-4 mb-4 text-gray-700 text-md font-medium">-The Environments your application code can be executed in: the server and the client.</p>
                            <p className=" ml-4 mb-4 text-gray-700 text-md font-medium">- The Request-Response Lifecycle that's initiated when a user visits or interacts with your application.</p>
                            <p className=" ml-4 mb-4 text-gray-700 text-md font-medium">- The Network Boundary that separates server and client code.</p>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold ml-4 pt-4">Rendering Environments</h1>
                            <p className="mt-5 ml-4 text-gray-700 text-md font-medium ">There are two environments where web applications can be rendered: the client and the server</p>
                        </div>
                    </div>
                </div>

                {/* <......4th...... */}

                <div className='bg-white '>
                    <div className="">
                        <h1 className="text-4xl font-bold ml-4 pt-4">Styling</h1>
                        <p className="mt-5 ml-4 mb-4 text-gray-700 text-md font-medium"> Next.js supports different ways of styling your application, including:
                        </p>
                    </div>
                    <div className="">
                        <p className="ml-4 mb-4 text-gray-700 text-md font-medium">
                            To start, it's helpful to be familiar with three foundational web concepts:</p>
                        <p className=" ml-4 mb-4 text-gray-700 text-md font-medium"> <span className="font-bold text-lg">- Global CSS: </span> Simple to use and familiar for those experienced with traditional CSS,
                            but can lead to larger CSS bundles and difficulty managing styles as the application grows.</p>
                        <p className=" ml-4 mb-4 text-gray-700 text-md font-medium"> <span className="font-bold text-lg">- CSS Modules: </span> Create locally scoped CSS classes to avoid naming conflicts and improve maintainability.</p>
                        <p className=" ml-4 mb-4 text-gray-700 text-md font-medium"><span className="font-bold text-lg">- Tailwind CSS: </span>A utility-first CSS framework that allows for rapid custom designs by composing utility classes.</p>
                        <p className=" ml-4 mb-4 text-gray-700 text-md font-medium"> <span className="font-bold text-lg">- Sass: </span> A popular CSS preprocessor that extends CSS with features like variables, nested rules, and mixins.
                        </p>
                        <p className=" ml-4 mb-4 text-gray-700 text-md font-medium"> <span className="font-bold text-lg">- CSS-in-JS</span>: Embed CSS directly in your JavaScript components, enabling dynamic and scoped styling
                        </p>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold ml-4 pt-4">Rendering Environments</h1>
                        <p className="mt-5 ml-4 text-gray-700 text-md font-medium ml-4">There are two environments where web applications can be rendered: the client and the server</p>
                    </div>
                </div>
                <div className="flex gap-4 text-white w-full flex-col md:flex-row bg-white px-4 ">
                    <div className="px-4 py-3 rounded-md mt-10 mb-10 shadow-md border border-gray-200 w-full">
                        <h1 className="text-blue-500 hover:text-black text-md mb-2 text-lg font-bold "> Fetching, Caching, and Revalidating</h1>
                        <p className="text-gray-500 text-sm">Learn how to fetch, cache, and revalidate data in your Next.js application.</p>
                    </div>
                    <div className="px-4 py-3 rounded-md mt-10 mb-10 shadow-md border border-gray-200 w-full">
                        <h1 className="text-blue-500 hover:text-black text-md mb-2 text-lg font-bold">Server Actions and Mutations</h1>
                        <p className="text-gray-500 text-sm ">Learn how to handle form submissions and data mutations with Next.js. </p>
                    </div>
                    <div className="px-4 py-3 rounded-md mt-10 mb-10 shadow-md border border-gray-200 w-full">
                        <h1 className="text-blue-500 hover:text-black text-md mb-2 text-lg font-bold">Data Fetching Patterns and Best Practices
                        </h1>
                        <p className="text-gray-500 text-sm ">
                            Learn about common data fetching patterns in React and Next.js.
                        </p>
                    </div>
                </div>

                {/* <......5th....... */}
                <div className="bg-white">
                    <h1 className="text-4xl font-bold ml-4 pt-4 ">Caching in Next.js</h1>
                    <p className="mt-7 mb-2 ml-4 text-gray-700 text-md font-medium"> Next.js improves your application's performance and reduces costs by caching rendering work and
                        data requests. This page provides an in-depth look at Next.js caching mechanisms, the APIs you can use to configure them, and
                        how they interact with each other.
                    </p>
                    <div className=" border border-gray-400 px-2 py-2 rounded-md mt-10 mx-4">
                        <h1 className=" mb-2 ml-4 text-gray-700 text-md font-medium"> <span className='font-black text-md text-black'>Good to know:</span> This page helps you understand how Next.js
                            works under the hood but is not essential knowledge to be productive with Next.js. Most of Next.js' caching heuristics
                            are determined by your API usage and have defaults for the best performance with zero or minimal configuration.
                        </h1>
                    </div>
                    <p className="border-b border-gray-200 mt-8 mx-4 "></p>
                </div>
                <div className="bg-white">
                    <div>
                        <h1 className="text-2xl font-bold ml-4 pt-4">Overview</h1>
                        <p className=" mt-4 ml-4 text-gray-700 text-md font-medium"> Here's a high-level overview of the different caching mechanisms and their purpose:
                        </p>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold ml-4 pt-4">Duration</h1>
                        <p className="mt-5 ml-4 mb-8 text-gray-700 text-md font-medium"> The cache lasts the lifetime of a server request until the React component tree has finished rendering.
                        </p>     
                    </div>
                </div>
            </div>


        </Authenticated>
    )
}

export default Index
