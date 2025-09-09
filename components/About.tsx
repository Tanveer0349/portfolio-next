'use client';

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="section-padding bg-gray-800/50">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6">
                I'm a passionate full-stack developer with expertise in modern web technologies.
                I love creating efficient, scalable, and user-friendly applications that solve
                real-world problems.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                With a strong foundation in both frontend and backend development, I enjoy
                working on projects that challenge me to learn and grow as a developer.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-blue-600/20 rounded-lg text-blue-300">
                  Frontend Development
                </span>
                <span className="px-4 py-2 bg-green-600/20 rounded-lg text-green-300">
                  Backend Development
                </span>
                <span className="px-4 py-2 bg-purple-600/20 rounded-lg text-purple-300">
                  UI/UX Design
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                {/* Animated background circles */}
                <div className="absolute inset-0 w-80 h-80 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full animate-pulse"></div>
                <div className="absolute inset-4 w-72 h-72 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full animate-ping animation-delay-1000"></div>
                
                {/* Main image container */}
                <div className="relative w-72 h-72 mx-4 my-4">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl group-hover:border-white/20 transition-all duration-300">
                    <img
                      src="/images/profile.jpg" // Add your profile image here
                      alt="Tanveer - Full Stack Developer"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.parentElement?.querySelector('.profile-fallback') as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    
                    {/* Fallback avatar */}
                    <div className="profile-fallback w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-2">👨‍💻</div>
                        <p className="text-white text-sm font-medium">Tanveer</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full animate-bounce"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-500 rounded-full animate-bounce animation-delay-500"></div>
                  <div className="absolute top-1/2 -right-4 w-4 h-4 bg-pink-500 rounded-full animate-pulse"></div>
                </div>
                
                {/* Skill badges around the circle */}
                <div className="absolute top-8 -left-8 px-3 py-1 bg-blue-600/90 backdrop-blur-sm rounded-full text-white text-xs font-medium animate-float">
                  React
                </div>
                <div className="absolute top-16 -right-12 px-3 py-1 bg-green-600/90 backdrop-blur-sm rounded-full text-white text-xs font-medium animate-float animation-delay-1000">
                  Node.js
                </div>
                <div className="absolute bottom-16 -left-12 px-3 py-1 bg-purple-600/90 backdrop-blur-sm rounded-full text-white text-xs font-medium animate-float animation-delay-2000">
                  MongoDB
                </div>
                <div className="absolute bottom-8 -right-8 px-3 py-1 bg-yellow-600/90 backdrop-blur-sm rounded-full text-white text-xs font-medium animate-float animation-delay-1500">
                  Next.js
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About