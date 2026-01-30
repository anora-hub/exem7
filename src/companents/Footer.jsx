import React from 'react'

const Footer = () => {
  return (
   <>
          
         
          <div class="bg-[#F5F5F5] pt-32 relative">
             
              <div class="absolute -top-24 left-0 w-full">
                  <div class="max-w-7xl mx-auto px-4">
                      <div
                          class="bg-black rounded-2xl p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-xl"
                      >
                          <h2 class="text-white text-2xl md:text-3xl font-bold max-w-md">
                              STAY UPTO DATE ABOUT <br />
                              OUR LATEST OFFERS
                          </h2>

                          <div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                              <input
                                  type="email"
                                  placeholder="Enter your email address"
                                  class="rounded-full px-5 py-3 w-full sm:w-72 outline-none"
                              />
                              <button
                                  class="bg-white text-black rounded-full px-6 py-3 font-medium"
                              >
                                  Subscribe to Newsletter
                              </button>
                          </div>
                      </div>
                  </div>
              </div>

            
              <footer class="container mx-auto px-5 pt-24 pb-10">
                  <div class="grid grid-cols-1 gap-10 items-start
            sm:grid-cols-2 text-center sm:text-left        lg:grid-cols-5">

                      <div className='sm:ml-auto sm:mr-auto sm:block'>
                          <h3 class="text-4xl font-bold mb-4">SHOP.CO</h3>
                          <p class="text-gray-500 text-sm mb-6">
                              We have clothes that suits your style and which you're proud to wear.
                              From women to men.
                          </p>

                          <div class="flex gap-4 justify-center sm:justify-start text-gray-600">
                              <img src="rasm18.png" alt="" />
                              <img src="rasm19.png" alt="" />
                              <img src="rasm20.png" alt="" />
                              <img src="rasm21.png" alt="" />
                          </div>
                      </div>
                      <div className=''>
                          <h4 class="font-semibold mb-4 text-xl">COMPANY</h4>
                          <ul class="space-y-2 text-gray-500 text-sm">
                              <li>About</li>
                              <li>Features</li>
                              <li>Works</li>
                              <li>Career</li>
                          </ul>
                      </div>

                      <div>
                          <h4 class="font-semibold mb-4 text-xl">HELP</h4>
                          <ul class="space-y-2 text-gray-500 text-sm">
                              <li>Customer Support</li>
                              <li>Delivery Details</li>
                              <li>Terms & Conditions</li>
                              <li>Privacy Policy</li>
                          </ul>
                      </div>

                      <div>
                          <h4 class="font-semibold mb-4 text-xl">FAQ</h4>
                          <ul class="space-y-2 text-gray-500 text-sm">
                              <li>Account</li>
                              <li>Manage Deliveries</li>
                              <li>Orders</li>
                              <li>Payments</li>
                          </ul>
                      </div>

                      <div>
                          <h4 class="font-semibold mb-4 text-xl">RESOURCES</h4>
                          <ul class="space-y-2 text-gray-500 text-sm">
                              <li>Free eBooks</li>
                              <li>Development Tutorial</li>
                              <li>How to - Blog</li>
                              <li>Youtube Playlist</li>
                          </ul>
                      </div>
                  </div>



               
                  <div
                      class="border-t border-t-black/20 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500"
                  >
                      <p>Shop.co © 2000-2023, All Rights Reserved</p>
                      <div class="flex gap-3">
                          <img src="rasm22.png" alt="" />
                          <img src=" rasm23.png" alt="" />
                          <img src=" rasm24.png" alt="" />
                          <img src="rasm25.png" alt="" />
                          <img src="rasm26.png" alt="" />
                      </div>
                  </div>
              </footer>
          </div>

   </>
  )
}

export default Footer