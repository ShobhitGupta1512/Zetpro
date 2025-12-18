import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../config/emailjs'
// import Logo from '../assets/Logo.png'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState(null)
  const [isSubscribing, setIsSubscribing] = useState(false)

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    if (!newsletterEmail) return

    setIsSubscribing(true)
    setNewsletterStatus(null)

    try {
      const templateParams = {
        subscriber_email: newsletterEmail,
        subscription_type: 'newsletter',
        to_name: 'Zaptro Team',
      }

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.NEWSLETTER_TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      )

      setNewsletterStatus({ type: 'success', message: 'Successfully subscribed!' })
      setNewsletterEmail('')
    } catch (error) {
      console.error('Newsletter subscription error:', error)
      setNewsletterStatus({ type: 'error', message: 'Subscription failed. Please try again.' })
    } finally {
      setIsSubscribing(false)
    }
  }
  return (
    <footer className='bg-gray-900 text-gray-200 py-10'>
      <div className='max-w-7xl mx-auto px-4 md:flex md:justify-between'>
        {/*  info */}
        <div className='mb-6 md:mb-0'>
            <Link to='/'>
              {/* <img src={Logo} alt="" className='w-32'/> */}
              <h1 className='text-red-500 text-2xl font-bold'>Zaptro</h1>
            </Link>
            <p className='mt-2 text-sm'>Powering Your World with the Best in Electronics.</p>
            <p className='mt-2 text-sm'>123 Electronics St, Style City, NY 10001</p>
            <p className='text-sm'>Email: support@Zaptro.com</p>
            <p className='text-sm'>Phone: (123) 456-7890</p>
        </div>
        {/* customer service link */}
        <div className='mb-6 md:mb-0'>
            <h3 className='text-xl font-semibold'>Customer Service</h3>
            <ul className='mt-2 text-sm space-y-2'>
                <li>Contact Us</li>
                <li>Shipping & Returns</li>
                <li>FAQs</li>
                <li>Order Tracking</li>
                <li>Size Guide</li>
            </ul>
        </div>
        {/* social media links */}
        <div className='mb-6 md:mb-0'>
            <h3 className='text-xl font-semibold'>Follow Us</h3>
            <div className='flex space-x-4 mt-2'>
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitterSquare/>
                <FaPinterest/>
            </div>
        </div>
        {/* newsletter subscription */}
        <div>
            <h3 className='text-xl font-semibold'>Stay in the Loop</h3>
            <p className='mt-2 text-sm'>Subscribe to get special offers, free giveaways, and more</p>
            <form onSubmit={handleNewsletterSubmit} className='mt-4'>
                <div className='flex'>
                    <input
                        type="email"
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        placeholder='Your email address'
                        required
                        className='w-full p-2 rounded-l-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500'
                    />
                    <button
                        type='submit'
                        disabled={isSubscribing}
                        className='bg-red-600 text-white px-4 rounded-r-md hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed'
                    >
                        {isSubscribing ? '...' : 'Subscribe'}
                    </button>
                </div>
                {newsletterStatus && (
                    <p className={`mt-2 text-sm ${newsletterStatus.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                        {newsletterStatus.message}
                    </p>
                )}
            </form>
        </div>
      </div>
      {/* bottom section */}
      <div className='mt-8 border-t border-gray-700 pt-6 text-center text-sm'>
        <p>&copy; {new Date().getFullYear()} <span className='text-red-500'>Zaptro</span>. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer