import React from 'react';
import { motion } from 'framer-motion';
import { useEnrollment } from '../contexts/EnrollmentContext';
import ProgressIndicator from './ProgressIndicator';

const CourseDetail: React.FC = () => {
  const { selectedCourse, setStep } = useEnrollment();

  if (!selectedCourse) return null;

  const handleEnroll = () => {
    setStep(4);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-neutral-50 to-stone-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Progress Indicator */}
        <ProgressIndicator
          steps={[
            { number: 1, label: 'Details' },
            { number: 2, label: 'Programs & Courses' },
            { number: 3, label: 'Details' },
            { number: 4, label: 'Enrollment' },
            { number: 5, label: 'Payment' },
          ]}
          currentStep={3}
        />

        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{selectedCourse.name}</h1>
            <p className="text-lg text-gray-600 mb-8">{selectedCourse.description}</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Course Overview</h3>
              <p className="text-gray-600 leading-relaxed">
                This comprehensive program is designed to provide you with cutting-edge skills and knowledge
                in your chosen field. Our expert instructors and industry partners ensure you receive
                practical, real-world training that prepares you for immediate success in your career.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Learning Outcomes</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Master advanced concepts and techniques</li>
                <li>• Gain hands-on experience with real projects</li>
                <li>• Build a professional portfolio</li>
                <li>• Network with industry experts</li>
                <li>• Earn recognized certification</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-50 rounded-xl p-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-semibold text-gray-900">{selectedCourse.duration}</p>
                </div>
              </div>

              <div className="flex items-center">
                <svg className="w-6 h-6 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                <div>
                  <p className="text-sm text-gray-500">Fee</p>
                  <p className="font-semibold text-gray-900">{selectedCourse.fee}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              onClick={handleEnroll}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-8 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enroll Now
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CourseDetail;