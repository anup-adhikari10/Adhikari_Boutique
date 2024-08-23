// import React from 'react'

import { assets } from "../assets/assets"

const Footer = () => {
  return (
    <div>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
<div className="">
    <p className="text-x1 font-medium mb-5">ADHIKARI BOUTIQUE</p>
    <p className="w-full md:w-2/3 text-gray-600">
    Adhikari Boutique is your destination for curated fashion that blends tradition with contemporary trends. We take pride in offering unique, high-quality pieces that reflect craftsmanship and style. Whether you're looking for classic designs or modern flair, our boutique has something special for every taste. At Adhikari Boutique, we believe in celebrating individuality through fashion. Join us in discovering timeless elegance and fresh new looks!
    </p>
</div>
<div className="">
    <p className="text-x1 font-medium mb-5">COMPANY</p>
    <ul className="flex flex-col gap-1 text-gray-600">
    <li>Home</li>
    <li>About Us</li>
    <li>Delivery</li>
    <li>Privacy Policy</li>
    </ul>
</div>
        <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>+061 555 555</li>
                <li>adhikariboutique@gmail.com</li>
            </ul>
        </div>
        </div>
        <div className="">
            <hr/>
            <p className="py-5 text-sm text-center">Copyright 2024@ adhikariboutique@gmail.com -All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer