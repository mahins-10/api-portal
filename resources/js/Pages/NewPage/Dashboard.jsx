
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

import { FiBox } from "react-icons/fi";
import { GoChevronRight } from "react-icons/go";



export default function Dashboard({ auth }) {

    const test = [
           
        
        {
            "id": 2,
            "title": "Routing",
            "link":"./routing",

            "submenu": [
                {
                    "id": 1,
                    "name": "Defining Routes"
                },
                {
                    "id": 2,
                    "name": "Pages and Layouts"
                },
                {
                    "id": 3,
                    "name": "Linking and Navigating"
                },
                {
                    "id": 4,
                    "name": "Loading UI"
                },

                {
                    "id": 5,
                    "name": "Error Handling"
                },

                {
                    "id": 6,
                    "name": "Redirecting"
                }
            ]

        },

        {
            "id": 3,
            "title": "Data Fetching",


            "submenu": [
                {
                    "id": 7,
                    "name": "Fetching, Catching"
                },
                {
                    "id": 8,
                    "name": "Server Actions and Mutations"
                },

                {
                    "id": 9,
                    "name": "Data Fetching Patterns"
                }
            ]

        },

        {
            "id": 4,
            "title": "Rendering"


        },

        {
            "id": 5,
            "title": "Catching",

            "submenu": [
                {
                    "id": 10,
                    "name": "Server Components"
                },
                {
                    "id": 11,
                    "name": "Client Components"
                },
                {
                    "id": 12,
                    "name": "Composition"
                }
            ]
        },

        {
            "id": 6,
            "title": "Optimizing"

        },

        {
            "id": 7,
            "title": "Styling",

            "submenu": [
                {
                    "id": 13,
                    "name": "CSS Moduls"
                },
                {
                    "id": 14,
                    "name": "Tailwind Css"
                },
                {
                    "id": 15,
                    "name": "CSS-in-JS"
                },
                {
                    "id": 16,
                    "name": "Sass"
                }

            ]

        },

        {
            "id": 8,
            "title": "Configuring",

            "submenu": [
                {
                    "id": 17,
                    "name": "TypeScript"
                },
                {
                    "id": 18,
                    "name": "ESLint"
                },
                {
                    "id": 19,
                    "name": "Environment Variables"
                },
                {
                    "id": 20,
                    "name": "MDX"
                }
            ]

        },

        {
            "id": 9,
            "title": "Testing",

            "submenu": [
                {
                    "id": 3,
                    "name": "Font"
                },
                {
                    "id": 4,
                    "name": "<Image>"
                }
            ]

        },
        {
            "id": 10,
            "title": "Authentication",

            "submenu": [
                {
                    "id": 3,
                    "name": "Font"
                },
                {
                    "id": 4,
                    "name": "<Image>"
                }
            ]

        },
        {
            "id": 11,
            "title": "Deploying",

            "submenu": [
                {
                    "id": 3,
                    "name": "Font"
                },
                {
                    "id": 4,
                    "name": "<Image>"
                }
            ]

        },
        {
            "id": 12,
            "title": "Upgrading",

            "submenu": [
                {
                    "id": 3,
                    "name": "Font"
                },
                {
                    "id": 4,
                    "name": "<Image>"
                }
            ]

        },
        {
            "id": 13,
            "title": "API Reference",

            "submenu": [
                {
                    "id": 3,
                    "name": "Font"
                },
                {
                    "id": 4,
                    "name": "<Image>"
                }
            ]

        },

        {
            "id": 14,
            "title": "Components",

            "submenu": [
                {
                    "id": 3,
                    "name": "Font"
                },
                {
                    "id": 4,
                    "name": "<Image>"
                }
            ]

        },
        {
            "id": 15,
            "title": "File Conventions",

            "submenu": [
                {
                    "id": 3,
                    "name": "Font"
                },
                {
                    "id": 4,
                    "name": "<Image>"
                }
            ]

        },
        {
            "id": 16,
            "title": "Functions",

            "submenu": [
                {
                    "id": 3,
                    "name": "Font"
                },
                {
                    "id": 4,
                    "name": "<Image>"
                }
            ]

        },
        {
            "id": 17,
            "title": "Edge Runtime",

            "submenu": [
                {
                    "id": 3,
                    "name": "Font"
                },
                {
                    "id": 4,
                    "name": "<Image>"
                }
            ]

        },
        {
            "id": 18,
            "title": "Architecture",

            "submenu": [
                {
                    "id": 3,
                    "name": "Font"
                },
                {
                    "id": 4,
                    "name": "<Image>"
                }
            ]

        },
        {
            "id": 19,
            "title": "Accessibility",

            "submenu": [
                {
                    "id": 3,
                    "name": "Font"
                },
                {
                    "id": 4,
                    "name": "<Image>"
                }
            ]

        },
        {
            "id": 20,
            "title": "Fast Refresh",

            "submenu": [
                {
                    "id": 3,
                    "name": "Font"
                },
                {
                    "id": 4,
                    "name": "<Image>"
                }
            ]

        },
        {
            "id": 21,
            "title": "Nest.js Compiler",

            "submenu": [
                {
                    "id": 3,
                    "name": "Font"
                },
                {
                    "id": 4,
                    "name": "<Image>"
                }
            ]

        },
        {
            "id": 22,
            "title": "Supported Browsers",

            "submenu": [
                {
                    "id": 3,
                    "name": "Font"
                },
                {
                    "id": 4,
                    "name": "<Image>"
                }
            ]

        },
        {
            "id": 23,
            "title": "Turbopack",

            "submenu": [
                {
                    "id": 3,
                    "name": "Font"
                },
                {
                    "id": 4,
                    "name": "<Image>"
                }
            ]

        },
        {
            "id": 24,
            "title": "Community",

            "submenu": [
                {
                    "id": 3,
                    "name": "Font"
                },
                {
                    "id": 4,
                    "name": "<Image>"
                }
            ]

        },
        {
            "id": 25,
            "title": "Contribution",

            "submenu": [
                {
                    "id": 3,
                    "name": "Font"
                },
                {
                    "id": 4,
                    "name": "<Image>"
                }
            ]

        }
        


    ]

    const [open, setOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState();
    const [color, setColor] = useState(false);

    const handleShow = (index) => {
        setOpen(!open);
        setActiveMenu(index);
    };

    const handleClick = (index) => {
        setColor(index);
    
      };
      
    


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-white leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            
            
            <div className=' '>

                <div className=" flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
                    <div
                        className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                        <div className="relative z-10 mx-auto max-w-md">
                            <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10 text-white transition-all">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                </svg>
                            </span>
                            <div
                                className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share
                                    online.</p>
                            </div>
                            <div className="pt-5 text-base font-semibold leading-7">
                                <p> 
                                    <a href="#" className="text-sky-500 transition-all duration-300 group-hover:text-white">Read the docs
                                        &rarr;
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div> 

            {/* <div className='bg-black w-96 h-screen  cursor-pointer overflow-y-auto '>
                <div className='flex flex-row gap-4 ml-20 mt-5 text-sm hover:text-white text-gray-300 hover:bg-gray-700  hover:p-3  hover:rounded-lg '>
                <p className='bg-gradient-to-r from-blue-800 to-indigo-900 text-lg p-2 text-blue-400 rounded'><FiBox /></p>
                <h1 className='mt-2'>Using App Router</h1>
                
                </div>
                <h1 className='mt-4 text-white text-sm ml-20 font-semibold '>Building Your Application</h1>

                {test.map((menu, index) => (
                    <div className=' ml-20' key={index}>

                        
                            <div className=''>
                                <span className=' flex justify-between text-gray-400 font-semibold gap-10 text-sm hover:text-white'
                                    onClick={() => handleShow(menu.id)}>
                                   <p className={`mt-4 hover:text-white ${color===index ?'text-blue-400 ':'text-gray-400'}`} onClick={() => handleClick(index)} >{menu.title} </p>
                                {menu.submenu? <p className={`mt-4 mr-3 ${color===index ?'text-blue-400 ':'text-gray-400'}`} onClick={() => handleClick(index)} ><GoChevronRight />{" "}</p>  :""}
                                </span>
                            </div>

                        {open && activeMenu === menu.id && menu.submenu ? (
                            <ul className='text-sm mt-6 text-gray-400 font-semibold border-l border-gray-800 ml-3 ' onClick={() => handleClick(index)} >
                                {menu.submenu.map((sub) => (
                                    <li className="mx-4 hover:text-white mt-4" key={sub.id}>
                                        {sub.name}  

                                    </li>
                                ))}
                            </ul>
                        ) : (
                            ""
                        )}
                    </div>


                ))}
            </div> */}

 

        </AuthenticatedLayout>
    )
}







