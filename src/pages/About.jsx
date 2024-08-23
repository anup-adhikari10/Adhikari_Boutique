// import React from 'react'

import { assets } from "../assets/assets"
import NewsLetterBox from "../components/NewsLetterBox"
import Title from "../components/Title"

const About = () => {
  return (
    <div>
        <div className="text-2x1 text-center pt-8 borrder-t">
            <Title text1={'ABOUT'} text2={'US'}/>
        </div>
        <div className="my-10 flex flex-col md:flex-row gap-16">
            <img src={assets.about_img} alt="" className="w-full md:max-w-[450px]" />
            <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
            <p>
            Welcome to Adhikari Boutique, where fashion meets artistry. Founded on a passion for exquisite design and quality craftsmanship, we strive to bring you clothing that not only complements your style but also tells a story. Each piece in our collection is carefully curated, reflecting a blend of traditional elegance and modern sophistication. We believe that fashion is a powerful form of self-expression, and our mission is to help you express your unique identity with confidence and grace.
            </p>
            <p>
            At Adhikari Boutique, we are committed to sustainability and ethical practices. Our garments are crafted from the finest materials, sourced responsibly to ensure minimal impact on the environment. We work closely with skilled artisans who share our values, ensuring that every item is made with care and attention to detail. Our dedication to quality extends beyond our products to the entire shopping experience, offering you personalized service and a seamless journey from browsing to purchase.
            </p>
            <b className="text-gray-800">Our Mission</b>
            <p>
            At Adhikari Boutique, our mission is to empower individuals through fashion by offering thoughtfully curated, high-quality clothing that celebrates both tradition and innovation. We are dedicated to promoting sustainable and ethical practices, ensuring that each piece we offer is crafted with respect for people and the planet. Our goal is to inspire confidence and self-expression, helping our customers feel their best in styles that resonate with their unique personalities. We aim to create a shopping experience that is not only enjoyable but also meaningful, fostering a community that values creativity, quality, and conscious living.
            </p>
            </div>
        </div>
        <div className="text-x1 py-4">
            <Title text1={'WHY'} text2={'CHOOSE UUS'}/>
        </div>
        <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                <b className="">Quality Assurance:</b>
                <p className="text-gray-600">
                At Adhikari Boutique, quality is our top priority. We meticulously select the finest materials and collaborate with skilled artisans to ensure every piece meets our high standards. Each item undergoes thorough inspection to guarantee exceptional craftsmanship and durability. Our commitment to quality extends beyond our products to provide you with a satisfying shopping experience. Trust in our dedication to excellence, as we bring you clothing that not only looks beautiful but also stands the test of time.
                </p>
            </div>
            <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                <b className="">Convenience:</b>
                <p className="text-gray-600">
                Here, we prioritize your convenience by offering a seamless shopping experience from start to finish. Our user-friendly website ensures easy navigation and secure checkout, while our responsive customer service team is always available to assist with any inquiries. Enjoy fast, reliable shipping and hassle-free returns, so you can shop with confidence. We aim to make your fashion journey as effortless and enjoyable as possible, allowing you to focus on discovering the perfect pieces for your wardrobe.
                </p>
            </div>
            <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                <b className="">Exceptional Customer Service:</b>
                <p className="text-gray-600">
                At our Shop, exceptional customer service is at the heart of everything we do. Our dedicated team is here to provide personalized assistance, ensuring a smooth and satisfying shopping experience. From prompt responses to your inquiries to expert guidance in choosing the perfect pieces, we go the extra mile to exceed your expectations. We value your feedback and are committed to resolving any issues with care and efficiency. Your satisfaction is our priority, and we’re here to make every interaction memorable and positive.
                </p>
            </div>
        </div>
        <NewsLetterBox/>
    </div>
  )
}

export default About