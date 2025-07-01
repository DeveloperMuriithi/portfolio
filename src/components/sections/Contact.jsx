import RevealOnScroll from "../RevealOnScroll"
import emailjs from 'emailjs-com'
import { useState } from 'react';


export const Contact = () => {
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    message:"",
  })

  const SERVICE_ID = "service_426vu3i";
  const TEMPLATE_ID = "template_4ekpbpl";
  const PUBLIC_KEY = "vTTHtzglGlZxluEzQ";
  const handleSubmit = (e) => {
    e.preventDEfault()

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then((result) => {
      alert("Message Sent!");
      setFormData({name:"", email:"", message:""})
    })
    .catch(() => alert("Oops! Something went wrong. Please try again.")
    )
  };



  return (
    <section
    id="contact"
    className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full max-w-lg">

          <h2
              className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-teal-700 bg-clip-text text-transparent text-center"
          > 
          Let's Connect! 
          </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <input type="text" id="name" name="name" 
                required 
                value={formData.name}
                className="w-full bg-gray-500/5 border border-green-700/10 rounded px-4 py-3 text-green-300 transition focus:outline-none focus:border-green-500 focus:bg-black "
                placeholder="John Doe"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                

              </div>

              <div className="relative">
                <input 
                type="text" 
                id="email" 
                name="email" 
                required 
                value={formData.email}
                className="w-full bg-gray-500/5 border border-green-700/10 rounded px-4 py-3 text-green-300 transition focus:outline-none focus:border-green-500 focus:bg-black "
                placeholder="example@email.com"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              

                <div className="relative">
                <textarea 
                id="message" 
                name="message" 
                required
                value={formData.message}
                className="w-full bg-gray-500/5 border border-green-700/10 rounded px-4 py-3 text-green-300 transition focus:outline-none focus:border-green-500 focus:bg-black "
                rows={5}
                placeholder="Your Message..."
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
                

              </div>

                <button type="submit" className="w-full bg-green-700 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_4px_12px_rgba(16,185,129,0.4)]">
                  Send Message
                </button>

              
            </form>
        </div>
      </RevealOnScroll>

    </section>

  )
}