import React from 'react';
import { Menu, X, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-violet-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur-md shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center h-16">
            
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="home" smooth={true} className="text-gray-300 hover:text-white hover:scale-105 transition-all cursor-pointer">Home</Link>
              <Link to="about" smooth={true} className="text-gray-300 hover:text-white hover:scale-105 transition-all cursor-pointer">About</Link>
              <Link to="experience" smooth={true} className="text-gray-300 hover:text-white hover:scale-105 transition-all cursor-pointer">Experience</Link>
              {/* <Link to="projects" smooth={true} className="text-gray-300 hover:text-white hover:scale-105 transition-all cursor-pointer">Projects</Link> */}
              {/* <Link to="education" smooth={true} className="text-gray-300 hover:text-white hover:scale-105 transition-all cursor-pointer">Education</Link> */}
              <Link to="skills" smooth={true} className="text-gray-300 hover:text-white hover:scale-105 transition-all cursor-pointer">Skills</Link>
              <Link to="contact" smooth={true} className="text-gray-300 hover:text-white hover:scale-105 transition-all cursor-pointer">Contact</Link>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-300 hover:text-white">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="home" smooth={true} className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md cursor-pointer">Home</Link>
              <Link to="about" smooth={true} className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md cursor-pointer">About</Link>
              <Link to="experience" smooth={true} className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md cursor-pointer">Experience</Link>
              {/* <Link to="projects" smooth={true} className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md cursor-pointer">Projects</Link> */}
              {/* <Link to="education" smooth={true} className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md cursor-pointer">Education</Link> */}
              <Link to="skills" smooth={true} className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md cursor-pointer">Skills</Link>
              <Link to="contact" smooth={true} className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md cursor-pointer">Contact</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="block text-gray-200">Hi, I'm </span>
              <span className="block mt-2 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">SHUBHAM SARAVARIYA </span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-gray-300">
              SOFTWARE DEVELOPER
            </p>
            <div className="mt-8 flex justify-center space-x-6">
              <a href="https://github.com/Shubhamsuthar98" target="_blank" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
                <Github size={28} />
              </a>
              <a href="http://www.linkedin.com/in/shubham-saravariya-8b2312123" target="_blank" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
                <Linkedin size={28} />
              </a>
              <a href="mailto:sarvariyashubham111@gmail.com" target="_blank" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
                <Mail size={28} />
              </a>
            </div>
            <div className="mt-12">
              <Link to="about" smooth={true} className="inline-flex items-center text-purple-400 hover:text-purple-300 cursor-pointer group">
                Learn more about me
                <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-purple-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text inline-block">About Me</h2>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Motivated and ambitious software engineer with a passion for developing innovative and efficient solutions. I am seeking a position where I can leverage my expertise in writing clean, maintainable, and scalable code using industry best practices. I am eager to contribute to impactful projects while continuously expanding my knowledge of emerging technologies and improving my skills to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20">
  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-fixed">
    <div className="absolute inset-0 bg-purple-900/90 backdrop-blur-sm"></div>
  </div>
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="lg:text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text inline-block tracking-wide">
        Experience
      </h2>
    </div>
    {/* Experience Timeline */}
    <div className="space-y-12">
      {/* Job 1 */}
      <div className="group relative bg-gradient-to-r from-purple-700 via-pink-600 to-purple-700 p-1 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-purple-700 group-hover:text-pink-600 transition-colors">
            E-Procurement Technologies Limited (PHP Developer)
          </h3>
          <p className="text-gray-500 italic mt-1">30th Oct 2023 – 3rd September 2024</p>
          <ul className="mt-4 space-y-3 text-gray-800">
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span> Actively contributed to website (Company Product) maintenance and implemented additional functionalities.
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span> Identified and addressed software bugs to ensure optimal application performance.
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span> Conducted thorough testing and debugging to resolve issues promptly.
            </li>
          </ul>
          <p className="mt-4 font-medium text-gray-600">
            <span className="text-purple-700 font-semibold">Technology Stack:</span> Laravel, CodeIgniter, Core PHP, JavaScript/JQuery, MySQL Server
          </p>
        </div>
      </div>
      {/* Job 2 */}
      <div className="group relative bg-gradient-to-r from-purple-700 via-pink-600 to-purple-700 p-1 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-purple-700 group-hover:text-pink-600 transition-colors">
            SQUAD TECHNOLOGY (Software Developer)
          </h3>
          <p className="text-gray-500 italic mt-1">1st July 2022 – 19th September 2023</p>
          <ul className="mt-4 space-y-3 text-gray-800">
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span> Reviewed and analyzed change requests from clients.
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span> Contributed to the design and development of new features based on project requirements.
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span> Developed web solutions using PHP (CodeIgniter) Framework.
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span> Built RESTful APIs to serve dynamic front-end user data.
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span> Integrated new libraries into the development workflow and worked on plugins using Core JavaScript.
            </li>
          </ul>
          <p className="mt-4 font-medium text-gray-600">
            <span className="text-purple-700 font-semibold">Technology Stack:</span> CodeIgniter, Node.js, JavaScript/JQuery, MySQL Server
          </p>
        </div>
      </div>
      {/* Job 3 */}
      <div className="group relative bg-gradient-to-r from-purple-700 via-pink-600 to-purple-700 p-1 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-purple-700 group-hover:text-pink-600 transition-colors">
            DEV INFORMATION TECHNOLOGY (Software Developer)
          </h3>
          <p className="text-gray-500 italic mt-1">8th January 2021 – 1st June 2022</p>
          <ul className="mt-4 space-y-3 text-gray-800">
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span> Worked on web-based applications using Open-Source Technologies.
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span> Developed web solutions using PHP (Laravel) Framework.
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span> Conducted development and unit testing of modules assigned by senior developers.
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span> Created the Email Template Module for restaurant owner dashboards to generate invoice templates.
            </li>
          </ul>
          <p className="mt-4 font-medium text-gray-600">
            <span className="text-purple-700 font-semibold">Technology Stack:</span> Laravel, PHP, JavaScript/JQuery, MySQL Server
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Projects Section 
       <section id="projects" className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-gray-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text inline-block">Projects</h2>
          </div>
          -- Add project grid here --
        </div>
      </section> */}

      {/* Education Section 
      <section id="education" className="relative py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-fixed">
          <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-sm"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text inline-block">Education</h2>
          </div>
          -- Add education timeline here --
        </div>
      </section>
      */}

      {/* Skills Section */}
      <section id="skills" className="relative py-20">
  <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-purple-900"></div>
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="lg:text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text inline-block">
        Skills
      </h2>
    </div>
    {/* Skills Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Programming Languages */}
      <div className="bg-white p-6 rounded-lg shadow-lg transition-shadow hover:shadow-xl">
        <h3 className="text-xl font-semibold text-purple-700 mb-4">Programming Languages/Platforms</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>PHP</li>
          <li>Laravel</li>
          <li>CodeIgniter</li>
          <li>ReactJs (Basic)</li>
          <li>NodeJs (Basic)</li>
          <li>Python</li>
        </ul>
      </div>
      {/* Architecture Concepts */}
      <div className="bg-white p-6 rounded-lg shadow-lg transition-shadow hover:shadow-xl">
        <h3 className="text-xl font-semibold text-purple-700 mb-4">Architecture Concepts</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>MVC</li>
          <li>OOPs</li>
        </ul>
      </div>
      {/* Project Management */}
      <div className="bg-white p-6 rounded-lg shadow-lg transition-shadow hover:shadow-xl">
        <h3 className="text-xl font-semibold text-purple-700 mb-4">Project Management</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>JIRA</li>
        </ul>
      </div>
      {/* Version Control */}
      <div className="bg-white p-6 rounded-lg shadow-lg transition-shadow hover:shadow-xl">
        <h3 className="text-xl font-semibold text-purple-700 mb-4">Version Control</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Git</li>
        </ul>
      </div>
      {/* Client-Side Technologies */}
      <div className="bg-white p-6 rounded-lg shadow-lg transition-shadow hover:shadow-xl">
        <h3 className="text-xl font-semibold text-purple-700 mb-4">Client-Side Technologies</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>AJAX</li>
          <li>React</li>
        </ul>
      </div>
      {/* Framework/Open Source */}
      <div className="bg-white p-6 rounded-lg shadow-lg transition-shadow hover:shadow-xl">
        <h3 className="text-xl font-semibold text-purple-700 mb-4">Frameworks/Open Sources</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Laravel</li>
          <li>CodeIgniter</li>
          <li>NodeJs</li>
        </ul>
      </div>
      {/* Database */}
      <div className="bg-white p-6 rounded-lg shadow-lg transition-shadow hover:shadow-xl">
        <h3 className="text-xl font-semibold text-purple-700 mb-4">Database</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>MySQL</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="relative py-20">
  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-fixed">
    <div className="absolute inset-0 bg-purple-900/90 backdrop-blur-sm"></div>
  </div>
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="lg:text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text inline-block">
        Contact
      </h2>
    </div>
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-12">
      {/* Contact Details */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-purple-700 mb-4">Contact Information</h3>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-center">
            <span className="text-purple-500 mr-2">📍</span> Location: Ahmedabad
          </li>
          <li className="flex items-center">
            <span className="text-purple-500 mr-2">📞</span> Phone: (+91) 9714381057
          </li>
          <li className="flex items-center">
            <span className="text-purple-500 mr-2">✉️</span> Email: sarvariyashubham111@gmail.com
          </li>
        </ul>
      </div>
      {/* Social Links */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-purple-700 mb-4">Follow Me</h3>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-center">
            <a href="http://www.linkedin.com/in/shubham-saravariya-8b2312123" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-pink-600 flex items-center space-x-2">
              <span>🔗</span><span>LinkedIn</span>
            </a>
          </li>
          <li className="flex items-center">
            <a href="https://github.com/Shubhamsuthar98" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-pink-600 flex items-center space-x-2">
              <span>🐙</span><span>GitHub</span>
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="relative bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="mt-8 border-t border-gray-800 pt-8 md:flex md:items-center md:justify-center">
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              © 2024 Shubham Saravariya. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;