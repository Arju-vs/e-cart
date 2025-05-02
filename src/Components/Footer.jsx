import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-violet-900 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold mb-3">eCart</h2>
          <p className="text-sm">
            Your one-stop destination for all your shopping needs. Quality, trust, and speed at your fingertips.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">Shop</a></li>
            <li><a href="#" className="hover:text-gray-300">About Us</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>


        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-white">
            <a href="#" className="hover:text-blue-500"><i className="fa-brands fa-facebook"></i></a>
            <a href="#" className="hover:text-blue-400"><i className="fa-brands fa-twitter"></i></a>
            <a href="#" className="hover:text-pink-500"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="hover:text-blue-600"><i className="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} eCart. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer