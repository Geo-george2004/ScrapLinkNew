import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'

const About = () => {
    return(
    <div>

         <div className='text-2xl text-center pt-8 border-t'>
             <Title text1={'ABOUT'} text2={'US'}/>
         </div>

         <div className='my-10 flex flex-col md:flex-row gap-16'>
             <Img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
             <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                 <p>We are a digital platform focused on revolutionizing waste management by connecting individuals and organizations with scrap materials to nearby scrap dealers. Our solution streamlines the process of recycling and reuse, making it easier for users to trade materials efficiently while reducing waste. With features like geolocation, secure payments, and real-time communication, we ensure a seamless and transparent experience for all users.</p>
                 <p>Our platform goes beyond facilitating transactions by fostering sustainability and promoting a circular economy. By encouraging responsible resource management and reducing landfill waste, we aim to create a positive environmental impact. Whether you're a seller or a dealer, we provide the tools to make recycling simple, efficient, and rewarding for everyone involved.</p>
                 <b className='text-gray-800'>Our Mission</b>
                 <p>Our mission is to revolutionize the waste management industry by creating a digital platform that connects scrap sellers and dealers, driving sustainability and fostering a circular economy. We strive to make recycling and reuse accessible, efficient, and impactful, helping individuals, businesses, and communities work together toward a greener, more sustainable future.</p>
             </div>
         </div>

        <div className=' text-xl py-4'>
            <Title text1={'WHY'} text2={'CHOOSE US'} />
        </div>
        
        <div className='flex flex-col md:flex-row text-sm mb-20'>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Quality Assurance:</b>
                <p className=' text-gray-600'>We ensure a seamless and secure experience through rigorous testing of functionality, performance, and security. Features like user authentication, secure payments, and a review system promote trust and transparency. By continuously monitoring and improving our platform, we deliver reliable, user-friendly solutions while supporting sustainability goals.</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Convenience:</b>
                <p className=' text-gray-600' >Our platform simplifies buying and selling scrap materials with geolocation, real-time notifications, and an easy-to-use interface. Features like secure payments and integrated chat ensure a smooth, hassle-free experience anytime, anywhere.</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Exceptional Customer Service:</b>
                <p className=' text-gray-600'> We are committed to providing outstanding customer support to ensure a smooth experience for all users. Our dedicated team is available to address queries, resolve issues, and offer guidance promptly, ensuring customer satisfaction at every step.</p>
            </div>
            

        </div>
        <Newsletterbox/>
     </div>
  )
}

export default About
