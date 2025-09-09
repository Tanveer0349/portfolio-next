'use client'

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
              <div className="w-64 h-64 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About