import React from 'react'
import { useForm } from '@formspree/react'

function Contact() {

    const [state, handleSubmit] = useForm("mbjejkrj");

  return (
    <section 
        id="contact" 
        className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4
            items-center justify-center">
        <p className='font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide'>What's Next?</p>
        <h2 className='font-titleFont text-5xl font-semibold'>Get In Touch</h2>
        <div className=' border border-textGreen px-12 py-10 flex justify-center items-center gap-20 mt-10'>
            <div>
                <div>
                    <p className='font-titleFont font-thin text-4xl'>Let's build something</p>
                    <p className='font-titleFont font-semibold text-4xl'>great together.</p>
                </div>
                {
                    state.succeeded ? <p className='text-textGreen font-titleFont text-sm mt-5'>Thanks for your message. I'll get back to you soon.</p> 
                                        : ""
                                    }
                <form
                    action="https://formspree.io/f/mbjejkrj"
                    method="POST"
                    className='flex flex-col gap-7 mt-10 items-center'
                >
                    <input placeholder='Name' name="Name" className='w-full outline-none border border-textGreen bg-transparent px-3 py-2 font-titleFont rounded-md' required/>
                    <input placeholder='Email' name="Email" className='w-full outline-none border border-textGreen bg-transparent px-3 py-2 font-titleFont rounded-md' required/>
                    <textarea placeholder='Message' name="Message" className='w-full outline-none border border-textGreen bg-transparent px-3 py-2 font-titleFont resize-none rounded-md' required></textarea>
                    <button type='submit' onSubmit={handleSubmit} className='border border-textGreen font-bolder text-sm text-textGreen w-20 px-5 py-1 rounded-md hover:bg-textGreen hover:text-bodyColor duration-300'>Send</button>
                </form>
            </div>
            <div className='flex flex-col gap-7 mt-20'>
                <div className='flex flex-col border-b border-gray-400 pb-5'>
                    <span className='text-xs text-textDark'>EMAIL</span>
                    <span className='font-titleFont'><a href="mailto:itsmevishal360@gmail.com">itsmevishal360@gmail.com</a></span>
                </div>
                <div className='flex flex-col border-b border-gray-400 pb-5'>
                    <span className='text-xs text-textDark'>Address</span>
                    <span className='font-titleFont'>Mumbai, Maharashtra, India</span>
                </div>
                <div className='flex flex-col border-b border-gray-400 pb-5'>
                    <span className='text-xs text-textDark'>Phone No.</span>
                    <span className='font-titleFont'>+91-84294958xx</span>
                </div>
            </div>
        </div>


    </section>
)
}

export default Contact