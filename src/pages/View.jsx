import React from 'react'
import Header from '../Components/Header'

const View = () => {
  return (
    <>
    <Header />
    <div className='flex flex-col mx-5'>
      <div className="grid grid-cols-2 items-center h-screen">
        <img className='ms-40' width={'350px'} height={'250px'} src="https://specials-images.forbesimg.com/imageserve/65df2e0562b5d061b718a4af/960x0.jpg" alt="" />
        <div>
        
        <h3 className="font-bold">PID : id</h3>
        <h1 className="text-5xl font-bold">Title</h1>
        <h4 className="text-bold text-red-600 text-2xl">$ 250</h4>
        <h4>Brand : brand</h4>
        <h4>Category : category</h4>
        <p><span className="font-bold">Description</span> : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis velit optio recusandae quo culpa pariatur iure eius adipisci sequi, vitae cumque fugit id aliquid molestias fuga tenetur architecto! Minus, iusto?
        </p>
          <div className="flex justify-between mt-5">
            <button className="bg-blue-600 rounded text-white p-2">ADD TO WISHLIST</button>
            <button className="bg-green-600 rounded text-white p-2">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default View