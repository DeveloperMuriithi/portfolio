import RevealOnScroll  from "../RevealOnScroll"

export const About = () => {

  const frontendSkills = [
    "HTML", 
    "CSS", 
    "JavaScript", 
    "TypeScript", 
    "React.js", 
    "TailwindCss",
  ];

  const backendSkills = [
    "Node.js", 
    "REST APIs", 
    "AWS", 
    "MongoDB", 
    "Python", 
    "SQL", 
    "Bash Scripting"
  ];

  const infoSecSkills = [
    "Web App Pentesting", 
    "Burp Suite", 
    "API Testing with cURL", 
    "Recon & Enumeration",
    "Common Vulnerability Discovery (XSS, CSRF, IDOR, SQLi)", 
    "Linux Privilege & Shell Exploitation"
  ];

  const softSkills = [
    "Problem Solving", 
    "Systems Thinking", 
    "Adversarial Mindset", 
    "Team Collaboration",
    "Debugging & Troubleshooting", 
    "Self-Learning", 
    "Version Control (Git/GitHub)", 
    "Terminal Proficiency"
  ];

  const programmingSkills = [
    "C", 
    "C++", 
  ];

  const skillSections = [
    { title: "Frontend", skills: frontendSkills },
    { title: "Backend", skills: backendSkills },
    { title: "CyberSec", skills: infoSecSkills },
    { title: "Conversant with", skills: programmingSkills },
    { title: "Soft Skills", skills: softSkills },
    
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
    <RevealOnScroll>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-teal-700 bg-clip-text text-transparent text-center">
          whoami
        </h2>

        {/* Intro & Skills */}
        <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
          <div className="mb-10 text-base md:text-lg leading-relaxed text-gray-300 space-y-6">
            <p>I'm a passionate developer with a knack for breaking things and building them back smarter.</p>
            <p>With a foundation in Mathematics and Computer Science, I approach technology as both an engineer and an explorer. I enjoy reverse-engineering systems, writing clean, functional code, and digging into the “why” behind how things work (or break).</p>
            <p>My focus lies at the intersection of cybersecurity, software engineering, and mathematics; where logic meets structure, and curiosity meets precision. Whether I'm scripting automations, testing vulnerabilities, or building tools from scratch, I'm driven by one goal: to understand deeply and create intentionally.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillSections.map(({ title, skills }) => (
              <div key={title} className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">{title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((tech) => (
                    <span
                      key={tech}
                      className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:text-white hover:shadow-[0_0_0_1px_rgba(0,255,136,0.4)] transition duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WORK EXPERIENCE */}
        <div className="p-6 mt-8 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
          <h3 className="text-xl font-bold mb-6">👨🏾‍💻 Work Experience</h3>

          <div className="relative border-l-2 border-gray-700 pl-10 space-y-12">
            {/* Item 1 */}
            <div className="relative">
              <div className="absolute left-0 top-2.5 w-3 h-3 bg-black border-2 border-green-500 rounded-full z-10"></div>
              <div className="absolute left-0 top-4 w-8 h-[2px] bg-green-500 z-0"></div>

              <div className="ml-10">
                <h4 className="text-lg font-semibold text-white mb-1">
                  <span className="text-[#00ff00]">Administrative Secretary</span> – <span className="text-gray-300">Matunda Education Centre</span>
                </h4>
                <span className="text-sm text-gray-400 block mb-2">(Jan 2023 – July 2023)</span>
                <ul className="list-disc list-inside text-gray-200 space-y-1">
                  <li>Maintained and secured digital records, improving data accuracy and accessibility.</li>
                  <li>Implemented basic cybersecurity measures to protect sensitive data.</li>
                  <li>Developed procurement automation tools using spreadsheets and scripts.</li>
                  <li>Acted as the primary liaison for IT-related issues, streamlining internal processes.</li>
                </ul>
              </div>
            </div>

            {/* Item 2 */}
            <div className="relative">
              <div className="absolute left-0 top-2.5 w-3 h-3 bg-black border-2 border-green-500 rounded-full z-10"></div>
              <div className="absolute left-0 top-4 w-8 h-[2px] bg-green-500 z-0"></div>

              <div className="ml-10">
                <h4 className="text-lg font-semibold text-white mb-1">
                  <span className="text-[#00ff00]">Marketing Intern</span> – <span className="text-gray-300">Jodamatt Motors</span>
                </h4>
                <span className="text-sm text-gray-400 block mb-2">(Jan 2023 – Dec 2023)</span>
                <ul className="list-disc list-inside text-gray-200 space-y-1">
                  <li>Designed and executed targeted digital campaigns.</li>
                  <li>Leveraged analytic tools to monitor KPIs and optimize strategy.</li>
                  <li>Applied content automation and SEO strategies to enhance digital reach.</li>
                  <li>Strengthened project coordination and teamwork on cross-functional initiatives.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* EDUCATION */}
        <div className="p-6 mt-8 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
          <h3 className="text-xl font-bold mb-6">🎓 Education</h3>

          <div className="relative border-l-2 border-gray-700 pl-10 space-y-8">
            <div className="relative">
              <div className="absolute left-0 top-2.5 w-3 h-3 bg-black border-2 border-green-500 rounded-full z-10"></div>
              <div className="absolute left-0 top-4 w-8 h-[2px] bg-green-500 z-0"></div>

              <div className="ml-10">
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <strong className="text-[#00ff00]">B.Sc Mathematics and Computer Science</strong> – Kenyatta University (Ongoing)
                  </li>
                  <p>Relevant Coursework: Data Structures and Algorithms, Operating Systems, Computer Networks, Database Systems, Software Engineering, Object-Oriented Programming, Computer Architecture, Discrete Mathematics, Probability and Statistics, Linear Algebra, Number Theory & Calculus I–III. </p>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </RevealOnScroll>
    </section>
  );
};
