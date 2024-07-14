

import Authenticated from '@/Layouts/AuthenticatedLayout'
import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CopyToClipboard from "@cloudscape-design/components/copy-to-clipboard"

const Index = ({ auth }) => {
  return (


    <Authenticated user={auth.user} >
      <div className=" ">

        <div className=' border-2 border-indigo-700 text-white bg-gray-800 mt-5 ml-6 p-10 border-solid rounded-lg w-full'>
          <span className='text-white'>
            <>
              <pre className=''>
                <code className='text-blue-200 font-sans text-md'>
                  <CopyToClipboard
                    textToCopy="
import Link from 'next/link'
 
export default function PostList({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}"

                    variant="inline"

                  />
                </code>
              </pre>
            </>

          </span>
        </div>
      </div>


      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 ml-10 mb-10 mx-auto flex flexp-col md:flex-row sm:flex-row font-face">
        <form className="space-y-4 ">

          <div className='mb-4 flex flex-col text-md md:flex-row '>
            <label className="block text-md font-medium text-gray-700 mt-3 w-28 ">Title</label>
            <input 
              type="text"
              name="title"
              placeholder="Title"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm mx-auto"
            />
          </div>

          <div className='mb-4 flex '>
            <label className="block text-md font-medium text-gray-700 mt-3 w-28">Address</label>

            <input
              type="text"
              name="address"
              placeholder="Address"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          

          <div className='flex'>
            <div className='flex gap-2'>
              <label className="block text-md font-medium text-gray-700 mt-3 w-32">Post Code</label>

              <input
                type="text"
                name="Post Code"
                placeholder="Post Code"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              
              />
            </div>

            <div className='flex gap-2'>
              <label className="block text-md font-medium text-gray-700 mt-3 ml-2 ">State</label>

              <input
                type="text"
                name="State"
                placeholder="State"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>

            <div className='flex gap-2'>
              <label className="block text-md font-medium text-gray-700 mt-3 ml-2">Suburb</label>

              <input
                type="text"
                name="Suburb"
                placeholder="Suburb"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
          </div>

          <div className='flex'>
            <label className="block text-md font-medium text-gray-700 mt-3 w-28">Image</label>

            <input
              type="text"
              name="image"
              placeholder="Image"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div className='flex '>
            <label className="block text-md font-medium text-gray-700 mt-3 w-28">Type</label>

            <input
              type="text"
              name="type"
              placeholder="Type"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div className='flex'>
            <label className="block text-md font-medium text-gray-700 mt-3 w-28">Property</label>

            <input
              type="text"
              name="property"
              placeholder="Property"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div className='flex'>
            <label className="block text-md font-medium text-gray-700 mt-3 w-28">Map</label>

            <input
              type="text"
              name="map"
              placeholder="Map"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div className='flex'>
            <label className="block text-md font-medium text-gray-700 mt-3 w-28">Bed</label>

            <input
              type="text"
              name="bed"
              placeholder="Bed"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div className='flex '>
            <label className="block text-md font-medium text-gray-700 mt-3 w-28">Bathroom</label>

            <input
              type="text"
              name="bathroom"
              placeholder="Bathroom"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm "
            />
          </div>
          <div className='flex '>
            <label className="block text-md font-medium text-gray-700 mt-3 w-28">Garage</label>

            <input
              type="text"
              name="garage"
              placeholder="Garage"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div className="p-4 bg-white shadow rounded-md ml-24 ">
            <h2 className="text-2xl mb-4 text-gray-700 ">Description</h2>
            <CKEditor  
              editor={ClassicEditor}
              data="<p>Description</p>"

              config={{
                height: ['500px'] ,
                toolbar: [
                  'heading', '|',
                  'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', '|',
                  'undo', 'redo'
                ],
                heading: { 
                  options: [
                    { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                    { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                    { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
                  ]
                
                }
              }}
            />

          </div>

          <div className='ml-24'>
            <button
              type="submit"
              className="mt-4 w-1/4 py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700">
              Submit
            </button>
          </div>
        </form>
      </div>




    </Authenticated>
  )
}


export default Index


