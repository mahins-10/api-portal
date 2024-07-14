
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';



export default function Contact({ auth }) {

    const [signup, setSignup] = useState();

    const {data, setData} = useForm({
        
        username:"",
        email:"",
       password:""
    })

    const showData =() => {
        console.log(data);

    }
    
    const {update, setUpdate} = useForm({
        
        firstname:"",
        lastname:"",
        email:"",
        birthdate:"",
        phone:"",
       password:"",
       confirmpassword:""
    })

const showTest =() => {
    console.log(update);

    }

    const openModal = () => {
        setSignup(true);
        setTimeout(()=>{
            document.getElementById('modalInner').classList.remove('scale-75')
        }, 10)
    };

    
    const closeModal = () => {
        document.getElementById('modalInner').classList.add('scale-75')
        setTimeout(()=>{
            setSignup(false);
        }, 200)
    };

    const pageSubmit = (e) => {
        e.preventDefault();
    }

    const [value, setValue] = useState([]);
    const showResult = (e) => {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
            setValue(response.data)
        })
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Contact</h2>}
        >
            <Head title="Contact" />

            <div className=''>

            <div className=''>
                    <div className=" flex justify-center mt-6" >
                        <div className="bg-white rounded-lg py-6" >
                            <form className='px-12 py-2 w-[400px] 'onSubmit={pageSubmit}  >
                            <h1 className='text-gray-700 font-bold text-3xl text-center pt-2 mb-3'>Sign In</h1>
                            <div className="">
                                    <label for="username" className="w-48 block text-md font-medium leading-6 text-gray-800 mt-3">Username</label>
                                    <div className=" mt-1 mb-1">
                                        <input type="text" name="name" onChange={(e) => setData('username', e.target.value)} className="w-full rounded-md block font-sm  text-gray-900 bg-transparent  
                                        placeholder:text-gray-400 focus:ring-0 " placeholder="Username" />
                                    </div>
                                </div>

                                <div className=" ">
                                    <label for="username" className="w-48 block text-md font-medium leading-6 text-gray-800 mt-3">Email</label>
                                    <div className="mt-1 mb-1 ">
                                        <input type="email" onChange={(e) => setData('email', e.target.value)}  className="w-full rounded-md block  text-gray-900 bg-transparent placeholder:text-gray-400 focus:ring-0 " placeholder="Email" />
                                    </div>
                                </div>

                                <div className="">
                                    <label for="username" className="w-48 block text-md font-medium leading-6 text-gray-800 mt-3">Password</label>
                                    <div className="mt-1 mb-1 w-full">
                                        <input type="password" onChange={(e) => setData('password', e.target.value)}   className="w-full rounded-md block text-gray-900 bg-transparent  placeholder:text-gray-400 focus:ring-0 " placeholder="Password" />
                                    </div>
                                </div>

                                <div className="text-center ">
                                <button type="signup" onClick={openModal}  className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 text-sm hover:focus:ring-2">Sign Up</button>
                                <button type="register" onClick={showData} className="ml-3 bg-blue-500 text-white p-2 mt-4 rounded hover:bg-blue-600 text-sm hover:focus:ring-2">Sign In</button>
                                </div>
                            </form>
                        </div>  
                    </div>
                </div>

                <button onClick={showResult} className='text-white bg-blue-400 py-2 px-3 rounded-lg mt-10 ml-10'>showData</button>
                {value ? value.map((newData) =>
                    <div>
                    <p className='mb-4'>{newData.name}</p>
                    <p className='mb-4'>{newData.username}</p>
                    <p className='mb-4'>{newData.email}</p>
                    <p className='mb-4'>{newData.website}</p>
                    <p className='mb-4'>{newData.phone}</p>
                    <p className='mb-4'>{newData.address.city}</p>
                    </div>
                ) : ""}

                {signup && (

                <div className='w-full absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity flex justify-center '>
                    <div className=" justify-center mt-6 " >
                        <div id='modalInner' className="bg-white rounded-lg scale-75 transition ease-in-out" >
                            <form className='px-12 py-2 w-[400px]'>
                            <h1 className='text-gray-700 font-bold text-3xl text-center pt-2 mb-3'>Sign Up</h1>
                            <p className='text-sm text-center mt-2 text-gray-500 mb-3'>Let's get started with your 30 days free trail</p>
                            <div className="mt-2 mb-3 ">
                                    {/* <label for="username" className="w-48 block text-md font-medium leading-6 text-white mt-3">Username</label> */}
                                    <div className=" ">
                                        <input type="text" name="name" onChange={(e) => setUpdate('firstname', e.target.value)}  className="w-full rounded-md block font-sm  text-gray-900 bg-transparent  
                                        placeholder:text-gray-400 focus:ring-0" placeholder="First name"/>
                                    </div>
                                </div>

                                <div className="mt-2 mb-3">
                                    {/* <label for="username" className="w-48 block text-md font-medium leading-6 text-white mt-3">Username</label> */}
                                    <div className="mt-2 mb-2 w-full">
                                        <input type="text" name="name" onChange={(e) => setUpdate('lastname', e.target.value)} className="w-full rounded-md block  text-gray-900 bg-transparent  placeholder:text-gray-400 focus:ring-0 " placeholder="Last name" />
                                    </div>  
                                </div>
                                
                                <div className=" mt-2 mb-3">
                                    {/* <label for="username" className="w-48 block text-md font-medium leading-6 text-white mt-3">Email</label> */}
                                    <div className="mt-2 mb-2 w-full">
                                        <input type="email" email="email" onChange={(e) => setUpdate('email', e.target.value)} className="w-full rounded-md block  text-gray-900 bg-transparent  placeholder:text-gray-400 focus:ring-0 " placeholder="Email" />
                                    </div>
                                </div>

                                <div className="mt-2 mb-3">
                                    {/* <label for="username" className="w-48 block text-md font-medium leading-6 text-white mt-3">Email</label> */}
                                    <div className="mt-2 mb-2 w-full">
                                        <input type="date"  onChange={(e) => setUpdate('birthdate', e.target.value)} className="w-full rounded-md block text-gray-900 bg-transparent placeholder:text-gray-400 focus:ring-0 " placeholder="Birth date" />
                                    </div>
                                </div>

                                <div className="mt-2 mb-3 ">
                                    {/* <label for="username" className="w-48 block text-md font-medium leading-6 text-white mt-3">Password</label> */}
                                    <div className="mt-2 mb-2 w-full">
                                        <input type="number" onChange={(e) => setUpdate('phone', e.target.value)}  className="w-full rounded-md block  text-gray-900 bg-transparent placeholder:text-gray-400 focus:ring-0 " placeholder="Phone number" />
                                    </div>
                                </div>

                                <div className="mt-2 mb-3">
                                    {/* <label for="username" className="w-48 block text-md font-medium leading-6 text-white mt-3">Password</label> */}
                                    <div className="mt-2 mb-2 w-full">
                                        <input type="password" onChange={(e) => setUpdate('password', e.target.value)}   className="w-full rounded-md block text-gray-900 bg-transparent  placeholder:text-gray-400 focus:ring-0 " placeholder="Password" />
                                    </div>
                                </div>

                                <div className="mt-2 mb-3">
                                    {/* <label for="username" className="w-48 block text-md font-medium leading-6 text-white mt-3">Confirm Password</label> */}
                                    <div className="mt-2 mb-2 w-full">
                                        <input type="password" onChange={(e) => setUpdate('confirmpassword', e.target.value)}  className=" w-full rounded-md block text-gray-900 bg-transparent  placeholder:text-gray-400 focus:ring-0 " placeholder="Confirm Password" />
                                    </div>
                                </div>

                                <div className="text-center">
                                    <button type="register" onClick={closeModal} className="bg-blue-500 text-white w-full p-2 mt-4 rounded hover:bg-blue-600 text-sm hover:focus:ring-2">Sign Up</button>
                                    <p className='mt-2 mb-1 text-sm text-gray-500'>Already have an account? <a href="" className='underline text-blue-500'>log in</a></p>
                                </div>
                            </form>

                  
                        </div>  
                    </div>
                </div>

                )}
</div>

                   

        </AuthenticatedLayout>
    )
}






























