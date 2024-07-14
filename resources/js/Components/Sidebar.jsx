import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import { useState } from 'react';

import { FiBox } from "react-icons/fi";
import { GoChevronRight } from "react-icons/go";




export default function Sidebar() {

    const test = [

        {
            "id": 2,
            "title": "Routing",
            "link": "routing.page",


            "submenu": [
                {
                    "id": 1,
                    "name": "Defining Routes",
                    "link": "documentation.define"
                },
                {
                    "id": 2,
                    "name": "Pages and Layouts",
                    "link": "routing.page"

                },
                {
                    "id": 3,
                    "name": "Linking and Navigating",
                    "link": "documentation.page"
                },
                {
                    "id": 4,
                    "name": "Loading UI",
                    "link": "documentation.streaming"
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
                    "name": "Image"
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
                    "name": "Image"
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
                    "name": "Image"
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
                    "name": "Image"
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
                    "name": "Image"
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
                    "name": "Image"
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
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleShow = (index) => {
        setOpen(!open);
        setActiveMenu(index);
    };

    const handleClick = (index) => {
        setColor(index);
    };
    
    return (
        <>

            <div className="sm:hidden ">
                <button onClick={toggleMenu} className="focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg> 
                </button>
            </div>

            <div className={`${isMenuOpen?"hidden":"block"} space-y-2 bg-white`}>
                <div className='bg-white'>
                    <div className='bg-white w-96 h-screen cursor-pointer overflow-y-auto mt-7 hide-scrollbar scrollbar'>
                    {/* scrollbar-thin scrollbar scrollbar-thumb-slate-700 scrollbar-track-white */}
                        <div className='flex flex-row gap-4 ml-20 mt-5 text-sm hover:text-white text-gray-300 hover:bg-gray-100 hover:p-3 hover:mr-4 hover:rounded-lg '>
                            <p className='bg-gradient-to-r from-blue-100 to-indigo-200 text-xl p-2 text-blue-400 rounded-lg'><FiBox /></p>
                            <div className='flex flex-col'>
                                <h1 className='mt-1 text-md text-black font-medium'> Using App Router</h1>
                                <p className='text-xs text-black'>Features available in/apps</p>
                            </div>
                        </div>
                        <h1 className='mt-10 text-gray-700 text-sm ml-20 font-semibold'>Getting Started </h1>
                        <h2 className='mt-4 text-gray-500  text-sm ml-20 font-medium hover:text-black'>Installation</h2>
                        <p className= 'mt-4 text-gray-500  text-sm ml-20 mb-7 font-medium hover:text-black'>Project Structure</p>
                        <p className= 'mt-4 text-gray-700  text-sm ml-20 font-semibold'>Building Your Application</p>
                         
                        {test.map((menu, index) => (
                            <div className=' ml-20' key={index}>
                                <div className=''>
                                    <ul className='flex justify-between text-gray-600 gap-10 text-sm font-medium hover:text-black'
                                        onClick={() => handleShow(menu.id)}>

                                        <li className={`mt-4 hover:text-gray-900 ${color === index ? 'text-blue-700 ' : 'text-gray-500'}`}
                                            onClick={() => handleClick(index)} ><Link href={menu.link ? route(menu.link) : ""}>{menu.name}  </Link>{menu.title} </li>
                                        {menu.submenu ? <li className={`mt-4 mr-3 ${color === index ? 'text-blue-700 ' : 'text-gray-900'}`}
                                            onClick={() => handleClick(index)}  >
                                            <GoChevronRight className={`transition-transform duration-300 ${open && activeMenu === menu.id ? 'rotate-90' : 'rotate-0'} text-md font-bold `}
                                            onClick={toggleOpen} /> {" "}
                                        </li> : ""}
                                    </ul>
                                </div>
                               
                                {open && activeMenu === menu.id && menu.submenu ? (
                                    <ul className='mt-6 text-gray-900 border-l border-gray-300 ml-3' onClick={() => handleClick(index)}>
                                        {menu.submenu.map((sub) => (
                                            <li className="mx-4 hover:text-black mt-4 text-sm" key={sub.id}>
                                                <Link href= {sub.link ? route(sub.link) : ""}>{sub.name}</Link>                                              
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    ""
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}







