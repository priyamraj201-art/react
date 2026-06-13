import React from 'react';

export default function Card() {
  return (
    /* Centering Container: Centers the card vertically and horizontally on the screen */
 <div className="flex min-h-screen w-full items-center justify-center bg-gray-100 p-6 transition-colors duration-300 dark:bg-gray-900">
      
      {/* 2. Card Container: Restricts the total width of the component */}
      <div className="w-full max-w-sm overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg transition-all duration-300 dark:border-gray-700 dark:bg-gray-800">
        
        <a href="/" className="block w-full">
          {/* 3. FIXED IMAGE: Added h-48 and object-cover to stop it from taking over the screen */}
          <img 
            className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105" 
            src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="product_image1" 
          />
        </a>

        {/* Product Details */}
        <div className="p-5">
          <a href="/">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 line-clamp-2 dark:text-white">
              Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
            </h5>
          </a>

          {/* Ratings */}
          <div className="mb-5 mt-3 flex items-center gap-1">
            <div className="flex items-center text-yellow-300">
              {[...Array(4)].map((_, i) => (
                <svg key={i} className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
              ))}
              <svg className="h-4 w-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
            </div>
            <span className="ml-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
              4.0
            </span>
          </div>

          {/* Pricing & CTA */}
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">$599</span>
            <a
              href="/"
              className="rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}