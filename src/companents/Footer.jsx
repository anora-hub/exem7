import React from 'react'

const Footer = () => {
  return (
   <>
          
         
          <div className="bg-[#F5F5F5] pt-32">
              {/* Newsletter Section */}
              <div className="container mx-auto px-4 mb-16">
                  <div className="bg-black rounded-2xl p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-xl overflow-hidden">

                      <h2 className="text-white text-2xl md:text-3xl font-bold max-w-full md:max-w-md">
                          STAY UPTO DATE ABOUT <br />
                          OUR LATEST OFFERS
                      </h2>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full max-w-md">
                          <input
                              type="email"
                              placeholder="Enter your email address"
                              className="rounded-full px-5 py-3 w-full sm:flex-1 outline-none text-sm"
                          />
                          <button className="bg-white text-black rounded-full px-6 py-3 font-medium hover:bg-gray-200 transition w-full sm:w-auto">
                              Subscribe to Newsletter
                          </button>
                      </div>

                  </div>
              </div>

              {/* Footer */}
              <footer className="container mx-auto px-5 pb-16 overflow-hidden">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 text-center sm:text-left">

                      {/* Logo & About */}
                      <div className="sm:mx-auto">
                          <h3 className="text-4xl font-bold mb-4">SHOP.CO</h3>
                          <p className="text-gray-500 text-sm mb-6">
                              We have clothes that suit your style and which you're proud to wear. From women to men.
                          </p>
                          <div className="flex gap-4 justify-center sm:justify-start text-gray-600">
                              <img src="rasm18.png" alt="social" />
                              <img src="rasm19.png" alt="social" />
                              <img src="rasm20.png" alt="social" />
                              <img src="rasm21.png" alt="social" />
                          </div>
                      </div>

                      {/* Company */}
                      <div>
                          <h4 className="font-semibold mb-4 text-xl">COMPANY</h4>
                          <ul className="space-y-2 text-gray-500 text-sm">
                              <li>About</li>
                              <li>Features</li>
                              <li>Works</li>
                              <li>Career</li>
                          </ul>
                      </div>

                      {/* Help */}
                      <div>
                          <h4 className="font-semibold mb-4 text-xl">HELP</h4>
                          <ul className="space-y-2 text-gray-500 text-sm">
                              <li>Customer Support</li>
                              <li>Delivery Details</li>
                              <li>Terms & Conditions</li>
                              <li>Privacy Policy</li>
                          </ul>
                      </div>

                      {/* FAQ */}
                      <div>
                          <h4 className="font-semibold mb-4 text-xl">FAQ</h4>
                          <ul className="space-y-2 text-gray-500 text-sm">
                              <li>Account</li>
                              <li>Manage Deliveries</li>
                              <li>Orders</li>
                              <li>Payments</li>
                          </ul>
                      </div>

                      {/* Resources */}
                      <div>
                          <h4 className="font-semibold mb-4 text-xl">RESOURCES</h4>
                          <ul className="space-y-2 text-gray-500 text-sm">
                              <li>Free eBooks</li>
                              <li>Development Tutorial</li>
                              <li>How to - Blog</li>
                              <li>Youtube Playlist</li>
                          </ul>
                      </div>
                  </div>

                  {/* Bottom */}
                  <div className="border-t border-black/20 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                      <p>Shop.co © 2000-2023, All Rights Reserved</p>
                      <div className="flex gap-3 flex-wrap">
                          <img src="rasm22.png" alt="payment" />
                          <img src="rasm23.png" alt="payment" />
                          <img src="rasm24.png" alt="payment" />
                          <img src="rasm25.png" alt="payment" />
                          <img src="rasm26.png" alt="payment" />
                      </div>
                  </div>
              </footer>
          </div>


   </>
  )
}

export default Footer