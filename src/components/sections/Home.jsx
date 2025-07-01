import  RevealOnScroll from "../RevealOnScroll"

export const Home = () => {
  return (
   <section id="home" 
  className="min-h-screen flex items-center justify-center relative">
    <RevealOnScroll>
        
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#22c55e] to-[#008080] bg-clip-text text-transparent leading-right">
              Hi,I'm Muriithi.
            </h1>

            <p className="text-gray-200 text-lg mb-8 max-w-lg mx-auto">
             I'm a systems thinker and digital explorer. The terminal isn’t just where I work, it’s home. Whether I’m writing code, automating workflows, or probing systems for weaknesses, I bring together mathematics, software engineering, and cybersecurity to build secure, focused technologies with precision.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#projects"
                className="bg-[#0f301d] text-[#00ff88] py-3 px-6 rounded font-medium border border-[#00ff88] transition-all duration-200 ease-in-out relative overflow-hidden  hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(0,255,136,0.6)] hover:bg-[#112f1f]"
              >
                View My Work
              </a>

<a
  href="#contact"
  className="contact-button bg-transparent text-[#00ff88] py-3 px-6 rounded font-medium border border-[#00ff88] transition-all duration-200 ease-in-out overflow-hidden hover:animate-pulse hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(0,255,136,0.6)] hover:bg-[#112f1f]"
>
  &gt; exec contact.sh
</a>


            </div>
        </div> 
  </RevealOnScroll>
  </section>
  )
}