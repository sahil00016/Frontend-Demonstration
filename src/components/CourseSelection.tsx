import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEnrollment, programs, Course } from '../contexts/EnrollmentContext';
import ProgressIndicator from './ProgressIndicator';

const CourseSelection: React.FC = () => {
  const { setSelectedCourse, setStep, setActiveProgram, activeProgram } = useEnrollment();
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    setActiveProgram(programs[activeIndex]);
  }, [activeIndex, setActiveProgram]);

  const handleProgramSelect = (index: number) => {
    setPrevIndex(activeIndex);
    setActiveIndex(index);
  };

  const handleCourseSelect = (course: Course) => {
    setSelectedCourse(course);
    setStep(3);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-neutral-50 to-stone-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Progress Indicator */}
        <ProgressIndicator
          steps={[
            { number: 1, label: 'Details' },
            { number: 2, label: 'Programs & Courses' },
            { number: 3, label: 'Details' },
            { number: 4, label: 'Enrollment' },
            { number: 5, label: 'Payment' },
          ]}
          currentStep={2}
        />

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Program</h1>
          <p className="text-lg text-gray-600">Select the program that best fits your career goals</p>
        </motion.div>

        {/* Program Selector */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-4">
            {programs.map((program, index) => (
              <motion.button
                key={program.id}
                onClick={() => handleProgramSelect(index)}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${
                  activeIndex === index
                    ? 'bg-white text-orange-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {program.name}
              </motion.button>
            ))}
          </div>
          {/* Indicator Bar */}
          <motion.div
            className="w-full max-w-4xl h-0.5 bg-orange-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Course List Panel */}
        <AnimatePresence mode="wait">
          {activeProgram && (
            <motion.div
              key={activeProgram.id}
              initial={{
                opacity: 0,
                x: activeIndex > prevIndex ? 50 : activeIndex < prevIndex ? -50 : 0,
                y: 20
              }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{
                opacity: 0,
                x: activeIndex > prevIndex ? -50 : activeIndex < prevIndex ? 50 : 0,
                y: -20
              }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-4xl mx-auto px-4"
            >
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{activeProgram.name} Courses</h2>
                <p className="text-gray-600">Choose the course that matches your aspirations</p>
              </motion.div>

              <motion.div
                className="space-y-3"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {activeProgram.courses.map((course, index) => {
                  const accentColors = [
                    'from-blue-400 to-blue-600',
                    'from-green-400 to-green-600',
                    'from-purple-400 to-purple-600',
                    'from-pink-400 to-pink-600',
                    'from-indigo-400 to-indigo-600',
                  ];
                  const accentColor = accentColors[index % accentColors.length];

                  return (
                    <motion.div
                      key={course.id}
                      className="group relative bg-gradient-to-r from-white to-gray-50 border border-gray-100 rounded-lg p-5 cursor-pointer overflow-hidden"
                      variants={cardVariants}
                      onClick={() => handleCourseSelect(course)}
                      whileHover={{
                        y: -2,
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center">
                        {/* Left Accent */}
                        <div className={`w-1 h-12 bg-gradient-to-b ${accentColor} rounded-full mr-4 group-hover:h-16 transition-all duration-300`}></div>

                        {/* Main Content */}
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors mb-1">
                            {course.name}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed mb-3">{course.description}</p>

                          {/* Meta Row */}
                          <div className="flex items-center space-x-6 text-xs text-gray-500 group-hover:text-gray-700 transition-colors">
                            <div className="flex items-center">
                              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {course.duration}
                            </div>
                            <div className="flex items-center">
                              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                              </svg>
                              {course.fee}
                            </div>
                          </div>
                        </div>

                        {/* Right Arrow */}
                        <motion.div
                          className="ml-4 text-gray-400 group-hover:text-orange-500"
                          initial={{ x: 0 }}
                          whileHover={{ x: 6 }}
                          transition={{ duration: 0.2 }}
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.div>
                      </div>

                      {/* Hover Background Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-orange-50/0 to-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                      />
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CourseSelection;