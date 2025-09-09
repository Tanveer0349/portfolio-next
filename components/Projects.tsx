'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const projects = [
    {
      title: 'ERP Solution',
      description: 'Full Stack ERP Management System with real-time stats and analytics',
      image: '/images/proj1.jpg',
      tech: ['Next.js', 'JavaScript', 'Mongoose', 'MongoDB'],
      github: 'https://github.com/Tanveer0349/erp-next.git',
      live: 'https://erp-next-4u.vercel.app',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      image: '/images/proj2.jpg',
      tech: ['Next.js', 'JavaScript', 'Mongoose', 'MongoDB'],
      github: 'https://github.com/Tanveer0349/Task-Manager-Nextjs.git',
      live: 'https://task-manager-4u.vercel.app',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
      image: '/images/proj3.jpg',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/Tanveer0349/Ecommerce-Website_Book-Store.git',
      live: '#',
    },
    {
      title: 'A Gym Fitness App',
      description: 'A Fitness App containing different targeted Muscle Exercises',
      image: '/images/proj4.jpg',
      tech: ['React', 'Material UI', 'Exercises APIs'],
      github: 'https://github.com/Tanveer0349/Fitness-Exercise-App.git',
      live: '#',
    },
  ]

  return (
    <section id="projects" className="section-padding bg-gray-800/50">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700/50 hover:border-gray-600/50 group hover:-translate-y-2"
              >
                {/* Image Container - Fixed Structure */}
                <div className="relative overflow-hidden rounded-xl mb-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative w-full h-56 sm:h-64">
                    {/* Main Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75 rounded-xl"
                      onLoad={(e) => {
                        // Hide fallback when image loads successfully
                        const fallback = e.currentTarget.parentElement?.querySelector('.fallback-placeholder') as HTMLElement;
                        if (fallback) fallback.style.display = 'none';
                      }}
                      onError={(e) => {
                        // Show fallback if image fails to load
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.parentElement?.querySelector('.fallback-placeholder') as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    
                    {/* Fallback Placeholder */}
                    <div className="fallback-placeholder absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center rounded-xl">
                      <div className="text-center">
                        <span className="text-6xl opacity-50 block">🚀</span>
                        <p className="text-sm text-gray-300 mt-2">{project.title}</p>
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                    
                    {/* Action Buttons */}
                    <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg"
                      >
                        <Github size={20} className="text-gray-800" />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 bg-blue-600/90 backdrop-blur-sm rounded-full hover:bg-blue-600 hover:scale-110 transition-all duration-200 shadow-lg"
                      >
                        <ExternalLink size={20} className="text-white" />
                      </a>
                    </div>
                    
                    {/* Featured Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30 hover:bg-blue-600/30 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects