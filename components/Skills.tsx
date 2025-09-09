'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const skills = [
     { name: 'JavaScript', level: 90, color: 'from-blue-300 to-blue-400' },
    { name: 'React', level: 90, color: 'from-blue-500 to-blue-600' },
    { name: 'Next.js', level: 85, color: 'from-yellow-300 to-yellow-400'  },
    { name: 'Node.js', level: 88, color: 'from-green-500 to-green-600' },
    { name: 'TypeScript', level: 85, color: 'from-blue-600 to-blue-700' },
    { name: 'Socket.io', level: 80, color: 'from-yellow-500 to-yellow-600' },
    { name: 'MongoDB', level: 80, color: 'from-green-600 to-green-700' },
    { name: 'Tailwind CSS', level: 85, color: 'from-blue-400 to-blue-500' },
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <motion.div
                    className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills