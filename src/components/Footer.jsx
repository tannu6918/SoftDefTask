import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full ml-7 bg-[#BCDDFE] text-[#22262A]">
      <div className="max-w-7xl mx-auto px-8 py-12">
        
        {/* Row 1: Logo / Follow Us / Contact */}
        <div className="grid grid-cols-3 gap-12 mb-12">
          {/* Logo + Text */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-[#40BFFF] rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rotate-[-90deg]" />
              </div>
              <h2 className="text-lg font-bold">E-Comm</h2>
            </div>
            <p className="text-sm text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since
              the 1500s.
            </p>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <p className="text-sm text-gray-600 mb-4">
              Since the 1500s, when an unknown printer took a galley of type and scrambled.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[#385C8E] hover:text-[#2d4471]">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-[#03A9F4] hover:text-[#0288d1]">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-600">
              E-Comm , 4578 Marmora Road, <br />
              Glasgow D04 89GR
            </p>
          </div>
        </div>

        {/* Row 2: Footer Links */}
        <div className="grid grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-lg font-semibold mb-4">Information</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>About Us</li>
              <li>Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Service</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>About Us</li>
              <li>Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">My Account</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>About Us</li>
              <li>Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Offers</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>About Us</li>
              <li>Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-300 pt-6 flex items-center justify-between text-sm text-gray-500">
          <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
          <div className="flex gap-3">
            <img src="/visa.png" alt="Visa" className="h-6" />
            <img src="/mastercard.png" alt="MasterCard" className="h-6" />
            <img src="/paypal.png" alt="Paypal" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}
