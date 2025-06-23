"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Code,
  Briefcase,
  GraduationCap,
  User,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = {
    frontend: ['React.js (2 years)', 'Vue.js (3 years)', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript'],
    backend: ['Node.js', 'Express.js', 'RESTful APIs'],
    tools: ['Git', 'GitHub', 'Responsive Design', 'Cross-browser Compatibility']
  };

  const projects = [
    {
      title: 'Crypto Analysis',
      description: 'Developed a comprehensive crypto analysis tool using React.js with real-time data visualization and market insights.',
      technologies: ['React.js', 'JavaScript', 'API Integration'],
      role: 'Front-End Developer',
      link: '#'
    },
    {
      title: 'A2Z',
      description: 'Built a full-featured web application using Vue.js 3 with modern UI/UX design and optimized performance.',
      technologies: ['Vue.js 3', 'JavaScript', 'CSS3'],
      role: 'Front-End Developer',
      link: 'https://mahmoudsalih1990.github.io/A2Z/'
    },
    {
      title: 'AlFakher',
      description: 'Developed a responsive web application with Vue.js 3, focusing on user experience and mobile optimization.',
      technologies: ['Vue.js 3', 'Responsive Design', 'Mobile-First'],
      role: 'Front-End Developer',
      link: 'https://mahmoudsalih1990.github.io/AlFakher/'
    }
  ];

  const experience = [
    {
      company: 'AMS IT Solutions',
      position: 'Full-Stack Developer',
      duration: '3/2024 - now',
      location: 'Remote',
      responsibilities: [
        'Worked on front-end development using React.js and back-end development using Node.js',
        'Integrated third-party libraries and APIs to enhance application functionality',
        'Ensured cross-browser compatibility and optimized performance'
      ]
    },
    {
      company: 'Zanobia',
      position: 'Front-End Developer',
      duration: '1/2023 - 1/2024',
      location: 'Remote',
      responsibilities: [
        'Developed and maintained web applications using Vue.js, React.js, HTML, CSS, and JavaScript',
        'Collaborated with the design team to implement responsive and user-friendly interfaces',
        'Utilized Git for version control and project management'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-slate-800">MS</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-slate-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200">
              {['About', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-slate-600 hover:text-blue-600"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
                MS
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-4">
                Mahmoud Salih
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8">
                Full-Stack Developer
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-slate-600 mb-8">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Syria</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>+963992817164</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>mahmoud.mhd.salih@gmail.com</span>
                </div>
              </div>
              <div className="flex justify-center gap-4 mb-12">
                <Button variant="outline" size="lg" asChild>
                  <a href="https://www.linkedin.com/in/mahmoud-salih-1210b9156" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2" size={20} />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="mailto:mahmoud.mhd.salih@gmail.com">
                    <Mail className="mr-2" size={20} />
                    Email
                  </a>
                </Button>
              </div>
            </div>
            <button
              onClick={() => scrollToSection('about')}
              className="animate-bounce text-slate-400 hover:text-slate-600 transition-colors"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="p-6">
                <CardContent className="p-0">
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Passionate and detail-oriented Full Stack Developer with over 2 years of experience in creating 
                    responsive and user-friendly web applications. Proficient in HTML5, CSS3, JavaScript, and modern 
                    frameworks like React and Vue. Seeking to leverage my expertise in UI/UX design and web 
                    development to contribute to the innovative projects at your company, enhancing user experiences 
                    and driving digital transformation.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Skills & Technologies</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-slate-700 mb-3">Front-End Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-blue-100 text-blue-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-slate-700 mb-3">Back-End Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-green-100 text-green-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-slate-700 mb-3">Tools & Others</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-purple-100 text-purple-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Experience</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl text-slate-800">{job.position}</CardTitle>
                      <CardDescription className="text-lg font-medium text-blue-600">
                        {job.company} • {job.location}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                      {job.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-2">
                    {job.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-600">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-slate-800">{project.title}</CardTitle>
                    {project.link !== '#' && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                        </a>
                      </Button>
                    )}
                  </div>
                  <CardDescription className="text-blue-600 font-medium">
                    {project.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-slate-100 text-slate-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Education</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                <CardTitle className="text-xl text-slate-800">
                  Bachelor of Information Systems Engineering
                </CardTitle>
                <CardDescription className="text-lg font-medium text-blue-600">
                  SVU, Damascus • 2018
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <span className="font-medium text-slate-700">Major:</span>
                    <span className="text-slate-600 ml-2">Information Engineering</span>
                  </div>
                  <div>
                    <span className="font-medium text-slate-700">Minor:</span>
                    <span className="text-slate-600 ml-2">Software Engineering</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-slate-600 mb-8">
              I'm always interested in new opportunities and exciting projects. 
              Let's connect and discuss how we can work together!
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-slate-800 mb-2">Email</h3>
                  <a 
                    href="mailto:mahmoud.mhd.salih@gmail.com"
                    className="text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    mahmoud.mhd.salih@gmail.com
                  </a>
                </div>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-slate-800 mb-2">Phone</h3>
                  <span className="text-slate-600">+963992817164</span>
                </div>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <Linkedin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-slate-800 mb-2">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/mahmoud-salih-1210b9156"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    Connect with me
                  </a>
                </div>
              </Card>
            </div>
            
            <div className="flex justify-center gap-4">
              <Button size="lg" asChild>
                <a href="mailto:mahmoud.mhd.salih@gmail.com">
                  <Mail className="mr-2" size={20} />
                  Send Email
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://www.linkedin.com/in/mahmoud-salih-1210b9156" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2" size={20} />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-300">
            © 2024 Mahmoud Salih. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}