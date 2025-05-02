import React from 'react'
import Header from '../Components/Header'

const Wishlist = () => {
  return (
    <>
      <Header />
      <div style={{paddingTop:'100px'}} className='px-5'>
        <>
        <h1 className="text-4xl font-bold text-red-600">My Wishlist</h1>
        <div className="grid grid-cols-4 gap-4">
          <div className="rounded border p-2 shadow">
            <img width={'100%'} height={'200px'} src="https://specials-images.forbesimg.com/imageserve/65df2e0562b5d061b718a4af/960x0.jpg" alt="" />
            <div className="text-center">
              <h3 className="text-xl font-bold">title</h3>
              <div className="flex justify-evenly mt-3">
                <button className="text-xl"><i className="fa-solid fa-heart-circle-xmark text-red-500"></i></button>
                <button className="text-xl"><i className="fa-solid fa-cart-plus text-green-700"></i></button>
                </div>            
            </div>
          </div>
        </div>
        </>
      </div>
    </>
  )
}

export default Wishlist