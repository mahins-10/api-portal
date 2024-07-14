
import React from "react"
import { useState } from "react";
import { ClipboardCopy } from '@patternfly/react-core';


export default function Main1({ auth }) {

    //     <ClipboardCopy isReadOnly hoverTip="Copy" clickTip="Copied">
    //     This is read-only
    //   </ClipboardCopy>;

    // const myFunction = () => {
    //     console.log();
    // }

    // const [copyText, setCopyText] = useState('')
    // const handleCopy = () => {
    //     navigator.clipboard.writeText(copyText)
    //     // alert("Copied")
    // }

    return (

        <>

            <div className="overflow-y-auto h-screen ">
                <div className='bg-black md:w-full'>
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
                {/* .................2nd */}
                <div className="flex gap-4 mb-10 bg-black px-4 ">
                    <div className="border border-gray-400 px-4 py-3 rounded-md mt-10 mb-10 ">
                        <h1 className="text-blue-500 hover:text-white text-md mb-2">Fetching, Caching, and Revalidating</h1>
                        <p className="text-gray-400 text-sm">Learn how to fetch, cache, and revalidate data in your Next.js application.</p>
                    </div>
                    <div className="border border-gray-400 px-4 py-3 rounded-md mt-10 mb-10 ">
                        <h1 className="text-blue-500 hover:text-white text-md mb-2">Server Actions and Mutations</h1>
                        <p className="text-gray-400 text-sm ">Learn how to handle form submissions and data mutations with Next.js </p>
                    </div>
                    <div className="border  border-gray-400 p-4 rounded-md mt-10 mb-10 ">
                        <h1 className="text-blue-500 hover:text-white text-md mb-2">Data Fetching Patterns and Best Practices
                        </h1>
                        <p className="text-gray-400 text-sm">Learn about common data fetching patterns in React and Next.js.
                        </p>
                    </div>
                </div>

                {/* ............3rd */}

                <div className='bg-black flex-wrap '>
                    <div className="">
                        <h1 className="text-4xl font-bold text-white ml-4 pt-4">Routing Fundamentals</h1>
                        <p className="mt-7 text-white mx-4">The skeleton of every application is routing.
                            This page will introduce you to the fundamental concepts of routing for the web and how to handle routing in Next.js.</p>
                        <p className="border-b border-gray-400 mt-8 mx-4"></p>
                    </div>
                    <div>
                        <p className="mt-7 text-white ml-4 mb-8">First, you will see these terms being used throughout the documentation. Here's a quick reference:</p>
                        <div className=" sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg mx-auto">
                            <img src="./images/terminology-component-tree.avif" className=" rounded-lg mx-4 mb-4" alt="" />
                        </div>
                        <p className="mt-5 text-white ml-4 mb-2">- Tree: A convention for visualizing a hierarchical structure. For example, a component tree with parent and children components,
                            a folder structure, etc.</p>
                        <p className="mt-5 text-white ml-4 mb-2">- Subtree: Part of a tree, starting at a new root (first) and ending at the leaves (last).</p>
                        <p className="mt-5 text-white ml-4 mb-2">- Root: The first node in a tree or subtree, such as a root layout.</p>
                        <p className="mt-5 text-white ml-4 "> - Leaf: Nodes in a subtree that have no children, such as the last segment in a URL path.</p>
                    </div>

                </div>

                {/* <.........4th...... */}

                <div>
                    <div className='bg-black '>
                        <div className="">
                            <h1 className="text-4xl font-bold text-white ml-4 pt-4">Rendering</h1>
                            <p className="mt-7 text-white mx-4"> Rendering converts the code you write into user interfaces.
                                React and Next.js allow you to create hybrid web applications where parts of your code can be rendered on
                                the server or the client. This section will help you understand the differences between these rendering environments,
                                strategies, and runtimes.</p>
                            <p className="border-b border-gray-400 mt-8 mx-4"></p>
                        </div>

                        <div className="">
                            <h1 className="text-2xl font-bold text-white ml-4 pt-4">Fundamentals</h1>
                            <p className="mt-7 text-white mx-4">
                                To start, it's helpful to be familiar with three foundational web concepts:</p>
                            <p className="mt-5 text-white ml-4 mb-2">-The Environments your application code can be executed in: the server and the client.</p>
                            <p className="mt-5 text-white ml-4 mb-2">- The Request-Response Lifecycle that's initiated when a user visits or interacts with your application.</p>
                            <p className="mt-5 text-white ml-4 mb-2">- The Network Boundary that separates server and client code.</p>

                        </div>

                        <div>
                            <h1 className="text-xl font-bold text-white ml-4 pt-4">Rendering Environments</h1>
                            <p className="mt-5 text-white ml-4 ">There are two environments where web applications can be rendered: the client and the server</p>
                        </div>

                    </div>

                </div>

                {/* <......5th...... */}


                <div>
                    <div className='bg-black '>
                        <div className="">
                            <h1 className="text-4xl font-bold text-white ml-4 pt-4">Styling</h1>
                            <p className="mt-7 text-white mx-4"> Next.js supports different ways of styling your application, including:
                            </p>

                        </div>

                        <div className="">

                            <p className="mt-7 text-white mx-4 text-md">
                                To start, it's helpful to be familiar with three foundational web concepts:</p>
                            <p className="text-white ml-4 mb-2 mt-5"> <span className="font-bold text-white  text-lg">- Global CSS: </span> Simple to use and familiar for those experienced with traditional CSS,
                                but can lead to larger CSS bundles and difficulty managing styles as the application grows.</p>
                            <p className="text-white ml-4 mb-2 mt-5"> <span className="font-bold text-white  text-lg">- CSS Modules: </span> Create locally scoped CSS classes to avoid naming conflicts and improve maintainability.</p>
                            <p className="text-white ml-4 mb-2 mt-5"><span className="font-bold text-white  text-lg">- Tailwind CSS: </span>A utility-first CSS framework that allows for rapid custom designs by composing utility classes.</p>
                            <p className="text-white ml-4 mb-2 mt-5"> <span className="font-bold text-white  text-lg">- Sass: </span> A popular CSS preprocessor that extends CSS with features like variables, nested rules, and mixins.
                            </p>
                            <p className="text-white ml-4 mb-2 mt-5"> <span className="font-bold text-white  text-lg">- CSS-in-JS</span>: Embed CSS directly in your JavaScript components, enabling dynamic and scoped styling
                            </p>

                        </div>

                        <div>
                            <h1 className="text-xl font-bold text-white ml-4 pt-4">Rendering Environments</h1>
                            <p className="mt-5 text-white ml-4 ">There are two environments where web applications can be rendered: the client and the server</p>
                        </div>

                    </div>
                    <div className=" ">
                        <div className=" flex flex-wrap gap-4  bg-black px-4  ">
                            <div className="flex-1 sm:flex-col md:flex-col lg:flex-col border border-gray-400 px-4 py-3 rounded-md mt-10 mb-10 ">
                                <h1 className="text-blue-500 hover:text-white text-xl mb-2">Fetching, Caching, and Revalidating</h1>
                                <p className="text-gray-400 text-sm">Learn how to fetch, cache, and revalidate data in your Next.js application.</p>
                            </div>
                            <div className="flex-1 sm:flex-col md:flex-col lg:flex-col border border-gray-400 px-4 py-3 rounded-md mt-10 mb-10 ">
                                <h1 className="text-blue-500 hover:text-white text-xl mb-2">Server Actions and Mutations</h1>
                                <p className="text-gray-400 text-sm ">Learn how to handle form submissions and data mutations with Next.js </p>
                            </div>
                            <div className="flex-1 sm:flex-col md:flex-col lg:flex-col border  border-gray-400 p-4 rounded-md mt-10 mb-10 ">
                                <h1 className="text-blue-500 hover:text-white text-xl mb-2">Data Fetching Patterns and Best Practices
                                </h1>
                                <p className="text-gray-400 text-sm">Learn about common data fetching patterns in React and Next.js.
                                </p>
                            </div>
                            <div className="flex-1 sm:flex-col md:flex-col lg:flex-col border border-gray-400 p-4 rounded-md mt-10 mb-10">
                                <h1 className="text-blue-500 hover:text-white text-xl mb-2"> Data Fetching Patterns and Best Practices
                                </h1>
                                <p className="text-gray-400 text-sm"> Learn about common data fetching patterns in React and Next.js.
                                </p>
                            </div>
                        </div>

                    </div>
{/* <......5th....... */}
                    <div className="bg-black">
                            <h1 className="text-4xl font-bold text-white ml-4 pt-4">Caching in Next.js</h1>
                            <p className="mt-7 text-white mx-4"> Next.js improves your application's performance and reduces costs by caching rendering work and 
                                data requests. This page provides an in-depth look at Next.js caching mechanisms, the APIs you can use to configure them, and 
                                how they interact with each other.
                            </p>
                            
                            <div className=" border border-gray-400 px-2 py-2 rounded-md mt-10 mx-4 text-white">
                                <h1 className="text-white text-sm mb-2"> Good to know: This page helps you understand how Next.js 
                                    works under the hood but is not essential knowledge to be productive with Next.js. Most of Next.js' caching heuristics 
                                    are determined by your API usage and have defaults for the best performance with zero or minimal configuration.
                                </h1>
                                
                            </div> 
                            <p className="border-b border-gray-400 mt-8 mx-4 "></p>
                        </div>
                    
                    <div className="bg-black">
                        <div>
                        <h1 className="text-2xl font-bold text-white ml-4 pt-4">Overview</h1>
                            <p className="mt-5 text-white mx-4"> Here's a high-level overview of the different caching mechanisms and their purpose:
                            </p>
                           
                        </div>
                        <div>
                        <h1 className="text-2xl font-bold text-white ml-4 pt-4">Duration</h1>
                            <p className="mt-5 text-white mx-4"> The cache lasts the lifetime of a server request until the React component tree has finished rendering.
                            </p>
                        </div>
                    </div>                                                                                                                                                                                                                                                                                  
                </div>
            </div >

        </>
    )
}


{/* <div>
                    <textarea value={copyText} onChange={(e) => setCopyText(e.target.value)} />
                    <button className="" onClick={handleCopy}>Copy</button>
                </div> */}

{/* <ClipboardCopy />;

            const rootElement = document.getElementById("root");
            ReactDOM.render(<ClipboardCopyReadOnly />, rootElement); */}