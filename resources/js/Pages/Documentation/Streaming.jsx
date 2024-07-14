
import Authenticated from '@/Layouts/AuthenticatedLayout'
import React from 'react'



const Streaming = ({ auth }) => {
    return (


        <Authenticated user={auth.user} >
            <div className=' w-full'>
                <div className='bg-black h-screen overflow-y-auto w-full flex-wrap '>
                    <div className="">
                        <h1 className="text-4xl font-bold text-white ml-4 pt-4">Rendering</h1>
                        <p className="mt-7 text-white mx-4"> Rendering converts the code you write into user interfaces.
                            React and Next.js allow you to create hybrid web applications where parts of your code can be rendered on
                            the server or the client. This section will help you understand the differences between these rendering environments,
                            strategies, and runtimes.</p>
                        <p className="border-b border-gray-400 mt-8 mx-4"></p>
                    </div>

                    <div className=" ">
                        <h1 className="text-2xl font-bold text-white ml-4 pt-4">Fundamentals</h1>
                        <p className="mt-7 text-white mx-4"> To start, it's helpful to be familiar with three foundational web concepts:</p>
                        <p className="mt-5 text-white ml-4 mb-2">- The Environments your application code can be executed in: the server and the client.</p>
                        <p className="mt-5 text-white ml-4 mb-2">- The Request-Response Lifecycle that's initiated when a user visits or interacts with your application.</p>
                        <p className="mt-5 text-white ml-4 mb-2">- The Network Boundary that separates server and client code.</p>  
                    </div>
                     
                    <div className=''>
                        <h1 className="text-xl font-bold text-white ml-4 pt-4">Rendering Environments</h1>
                        <p className="mt-5 text-white ml-4 "> There are two environments where web applications can be rendered: 
                            the client and the server </p>
                        
                    </div>
                </div>
            </div>           
            
        </Authenticated>
    ) 
}

export default Streaming
