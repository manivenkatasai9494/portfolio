import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { ArrowDown, Award, Calendar, ExternalLink, Github, GraduationCap, Mail, MapPin, Phone, Send } from 'lucide-react';
import React from 'react';
import profileImage from '../../mani.jpg';

const SinglePagePortfolio: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const experiences = [
    {
      title: 'Vice President',
      company: 'IngenuITy, CVR College of Engineering',
      period: 'January 2025 - Present',
      location: 'Hyderabad, India',
      description: [
        'Led and organized 2 workshops, 4 technical events, and multiple skill development sessions, enhancing students\' technical and professional growth.',
        'Actively mentored and supported students, fostering a collaborative environment and ensuring the success of various initiatives.'
      ],
      color: 'bg-blue-500'
    },
    {
      title: 'Cyber Security and Blockchain Team',
      company: 'Google Developer Groups, CVR College of Engineering',
      period: 'October 2024 - Present',
      location: 'Hyderabad, India',
      description: [
        'Conducted 15+ cybersecurity and blockchain classes, delivering hands-on training and live sessions for students.',
        'Organized 3 hackathons and 5+ workshops in the club, engaging 100+ participants in real-world security challenges.'
      ],
      color: 'bg-green-500'
    },
    {
      title: 'Campus Ambassador',
      company: 'E-Cell, IIT Bombay',
      period: 'July 2024 - February 2025',
      location: 'Hyderabad, India',
      description: [
        'Led 10+ entrepreneurship events, fostering innovation and engaging 500+ students in startup initiatives.',
        'Organized 5+ workshops and seminars with 300+ participants, enhancing skill development and knowledge sharing.'
      ],
      color: 'bg-purple-500'
    }
  ];

  const technicalSkills = [
    { name: 'Java', icon: '☕', color: 'from-orange-500 to-red-500' },
    { name: 'Python', icon: '🐍', color: 'from-blue-500 to-yellow-500' },
    { name: 'JavaScript', icon: '📜', color: 'from-yellow-400 to-yellow-600' },
    { name: 'SQL', icon: '🗄️', color: 'from-blue-600 to-purple-600' },
    { name: 'Git', icon: '🌿', color: 'from-orange-600 to-red-600' },
    { name: 'MySQL', icon: '🐬', color: 'from-blue-500 to-cyan-500' },
    { name: 'Linux', icon: '🐧', color: 'from-black to-yellow-500' },
    { name: 'Web Dev', icon: '🌐', color: 'from-green-500 to-blue-500' },
    { name: 'Windows', icon: '🪟', color: 'from-blue-600 to-cyan-400' },
    { name: 'Machine Learning', icon: '🤖', color: 'from-purple-500 to-pink-500' },
    { name: 'AI/ML', icon: '🧠', color: 'from-indigo-500 to-purple-600' },
    { name: 'Cybersecurity', icon: '🔒', color: 'from-red-500 to-orange-500' }
  ];

  const softSkills = [
    'Leadership',
    'Event Management', 
    'Public Speaking',
    'Time Management',
    'Team Collaboration',
    'Problem Solving'
  ];

  const projects = [
    {
      title: 'Accident Severity Prediction and Response System',
      date: 'February 2025',
      description: [
        'Designed an AI-driven system to predict accident severity and optimize emergency response.',
        'Integrated real-time traffic, weather, and historical data for accurate severity classification.',
        'Implemented dynamic route optimization to minimize emergency response time.'
      ],
      tags: ['AI/ML', 'Python', 'Data Analysis', 'Real-time Systems'],
      gradient: 'from-red-500 to-orange-500'
    },
    {
      title: 'Urban Planning Platform',
      date: 'November 2023',
      description: [
        'Implemented an urban planning platform website to enhance community engagement and streamline communication effectively.',
        'Engineered a platform with voting, notice board, and project approvals, speeding up project approval processes by 50%.',
        'Strategically designed to promote civic participation and improve communication in urban planning initiatives.'
      ],
      tags: ['Web Development', 'JavaScript', 'Community Platform', 'UI/UX'],
      gradient: 'from-green-500 to-blue-500'
    },
    {
      title: 'Titanic Classification',
      date: 'December 2023',
      description: [
        'Created a binary classification model to predict Titanic survival using statistical and machine learning techniques, achieving 85% accuracy.',
        'Conducted analysis of survival factors like age, gender, class, and fare, improving model interpretability and reducing error by 15%.'
      ],
      tags: ['Machine Learning', 'Python', 'Data Science', 'Statistical Analysis'],
      gradient: 'from-blue-500 to-purple-500'
    }
  ];

  const certifications = [
    {
      title: 'Google Cloud Generative-AI Virtual Internship',
      issuer: 'Google Cloud',
      type: 'Internship',
      skills: ['Generative AI', 'Google Cloud', 'Machine Learning'],
      color: 'from-blue-500 to-green-500'
    },
    {
      title: 'Google AI-ML Virtual Internship',
      issuer: 'Google',
      type: 'Internship',
      skills: ['Artificial Intelligence', 'Machine Learning', 'TensorFlow'],
      color: 'from-red-500 to-yellow-500'
    },
    {
      title: 'Full-Stack Web Development',
      issuer: 'Colt Steele - Udemy',
      type: 'Course',
      skills: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Advanced Java',
      issuer: 'Udemy',
      type: 'Course',
      skills: ['Java', 'Spring Framework', 'Advanced Programming'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Google Cyber Security',
      issuer: 'Google',
      type: 'Professional Certificate',
      skills: ['Cybersecurity', 'Network Security', 'Risk Management'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const achievements = [
    {
      title: '3rd Prize - VJ National Level Hackathon',
      description: 'Developed an Agri-Tech solution using Machine Learning',
      type: 'Hackathon Prize'
    },
    {
      title: '4th Prize - Password Cracking Hackathon',
      description: 'ICE Multi National Company - Solved 27k/45k hashes',
      type: 'Cybersecurity Challenge'
    },
    {
      title: 'Best Student Volunteer Award',
      description: 'International Conference on Cyber Security (ICCSCP-2024)',
      type: 'Volunteer Recognition'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology - Information Technology',
      institution: 'CVR College of Engineering',
      period: 'November 2022 - June 2026',
      location: 'Hyderabad, India',
      grade: 'CGPA: 8.6',
      icon: '🎓',
      color: 'from-blue-500 to-purple-500'
    },
    {
      degree: 'Intermediate - MPC',
      institution: 'Narayana Junior College',
      period: 'July 2020 - June 2022',
      location: 'Hyderabad, India',
      grade: 'Percentage: 89.2%',
      icon: '📚',
      color: 'from-green-500 to-blue-500'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'medammani4@gmail.com',
      href: 'mailto:medammani4@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-9494059447',
      href: 'tel:+919494059447',
      color: 'from-green-500 to-blue-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, Telangana',
      href: '#',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'manivenkatasaimedam',
      href: 'https://github.com/manivenkatasaimedam',
      color: 'from-gray-700 to-gray-900'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="pt-20">
      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-8 animate-fade-in-up">
          <div className="relative mx-auto">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 animate-glow">
              <img
                src={profileImage}
                alt="Mani Venkata Sai Medam"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/10 to-transparent"></div>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Hey! I'm Mani Venkata Sai Medam
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Passionate Software Developer & AI Enthusiast
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Information Technology student at CVR College of Engineering with expertise in 
              AI/ML, Web Development, and Cybersecurity. Building innovative solutions that make a difference.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
            <span>📍 Hyderabad, Telangana</span>
            <span>📞 +91-9494059447</span>
            <span>✉️ medammani4@gmail.com</span>
          </div>

          <div className="pt-8">
            <ArrowDown className="w-8 h-8 mx-auto text-primary animate-bounce" />
            <p className="text-sm text-muted-foreground mt-2">Scroll to explore</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My journey in leadership, technology, and innovation - building communities and driving impact.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 h-full w-0.5 bg-primary/30"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'
                }`}
              >
                <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 timeline-dot`}></div>

                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <Card className="glow-card hover:scale-[1.02] transition-transform duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-3 h-3 rounded-full ${exp.color}`}></div>
                        <span className="text-sm text-primary font-medium">{exp.period}</span>
                      </div>
                      <CardTitle className="text-xl md:text-2xl">{exp.title}</CardTitle>
                      <p className="text-primary font-semibold">{exp.company}</p>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {exp.description.map((desc, idx) => (
                          <li key={idx} className="text-muted-foreground leading-relaxed">
                            • {desc}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills</h2>
            <p className="text-xl text-muted-foreground">
              Technologies and competencies I work with
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {technicalSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`skill-icon bg-gradient-to-r ${skill.color} hover:scale-110 transform transition-all duration-300`}>
                    <span className="text-2xl">{skill.icon}</span>
                  </div>
                  <p className="text-center mt-3 font-medium text-sm">{skill.name}</p>
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-center mb-8">Soft Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {softSkills.map((skill) => (
                <Card key={skill} className="glow-card hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6 text-center">
                    <h4 className="text-lg font-semibold">{skill}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Innovative solutions and applications I've built to solve real-world problems
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className="glow-card hover:scale-[1.02] transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm text-primary font-medium">{project.date}</span>
                    </div>
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${project.gradient}`}></div>
                  </div>
                  <CardTitle className="text-xl md:text-2xl mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {project.description.map((desc, idx) => (
                      <li key={idx} className="text-muted-foreground leading-relaxed">
                        • {desc}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors text-primary">
                      <Github className="w-4 h-4" />
                      <span className="text-sm">View Code</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 rounded-lg transition-colors text-accent">
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live Demo</span>
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications</h2>
            <p className="text-xl text-muted-foreground">
              Professional certifications and achievements in technology
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8">Professional Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {certifications.map((cert) => (
                <Card key={cert.title} className="glow-card hover:scale-[1.02] transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${cert.color} flex items-center justify-center`}>
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {cert.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg md:text-xl group-hover:text-primary transition-colors">
                      {cert.title}
                    </CardTitle>
                    <p className="text-primary font-semibold">{cert.issuer}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <button className="flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      View Certificate
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-center mb-8">Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {achievements.map((achievement) => (
                <Card key={achievement.title} className="glow-card hover:scale-[1.02] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {achievement.type}
                      </Badge>
                    </div>
                    <h4 className="font-bold text-lg mb-2">{achievement.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
            <p className="text-xl text-muted-foreground">
              Academic journey and qualifications
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu) => (
              <Card key={edu.institution} className="glow-card hover:scale-[1.02] transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${edu.color} flex items-center justify-center text-2xl`}>
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm text-primary font-medium">{edu.period}</span>
                      </div>
                      <CardTitle className="text-xl md:text-2xl mb-2 group-hover:text-primary transition-colors">
                        {edu.degree}
                      </CardTitle>
                      <p className="text-primary font-semibold text-lg">{edu.institution}</p>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-primary/10 px-4 py-2 rounded-lg">
                        <span className="text-primary font-bold">{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="glow-card max-w-2xl mx-auto">
              <CardContent className="p-8">
                <GraduationCap className="w-16 h-16 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-4">Academic Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Maintaining strong academic performance while actively participating in 
                  extracurricular activities, hackathons, and technical events. Focused on 
                  practical application of theoretical knowledge through projects and internships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's connect and discuss opportunities, collaborations, or just have a chat!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
              
              {contactInfo.map((info) => (
                <Card key={info.label} className="glow-card hover:scale-[1.02] transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg">{info.label}</h4>
                        <a 
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="glow-card mt-8">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-4">About Me</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm a passionate software developer and AI enthusiast currently pursuing 
                    my B.Tech in Information Technology. I love working on innovative projects, 
                    participating in hackathons, and contributing to the tech community. 
                    Always open to new opportunities and collaborations!
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="glow-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="text-sm font-medium mb-2 block">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="text-sm font-medium mb-2 block">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="text-sm font-medium mb-2 block">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Your message here..."
                        rows={6}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                      size="lg"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SinglePagePortfolio;