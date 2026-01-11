import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useEnrollment, programs } from '../contexts/EnrollmentContext';
import ProgressIndicator from './ProgressIndicator';

const EnrollmentConfirmation: React.FC = () => {
  const { userDetails, selectedCourse, setStep } = useEnrollment();
  const [isProcessing, setIsProcessing] = useState(false);

  if (!userDetails || !selectedCourse) return null;

  const handleProceedToPayment = async () => {
    setIsProcessing(true);
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsProcessing(false);
    setStep(5);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-neutral-50 to-stone-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Progress Indicator */}
        <ProgressIndicator
          steps={[
            { number: 1, label: 'Details' },
            { number: 2, label: 'Programs & Courses' },
            { number: 3, label: 'Details' },
            { number: 4, label: 'Enrollment' },
            { number: 5, label: 'Payment' },
          ]}
          currentStep={4}
        />

        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Confirm Your Enrollment</h1>
            <p className="text-gray-600">Please review your details before proceeding to payment</p>
          </motion.div>

          <motion.div
            className="space-y-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Details</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Full Name</p>
                  <p className="font-medium text-gray-900">{userDetails.fullName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-gray-900">{userDetails.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Mobile</p>
                  <p className="font-medium text-gray-900">{userDetails.countryCode} {userDetails.mobile}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Program</p>
                  <p className="font-medium text-gray-900">{programs.find(p => p.id === userDetails.service)?.name || userDetails.service}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Selected Course</h3>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-gray-900">{selectedCourse.name}</p>
                  <p className="text-sm text-gray-600 mt-1">{selectedCourse.description}</p>
                  <p className="text-sm text-gray-500 mt-2">Duration: {selectedCourse.duration}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-orange-600">{selectedCourse.fee}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.button
              onClick={handleProceedToPayment}
              disabled={isProcessing}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-8 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: isProcessing ? 1 : 1.02 }}
              whileTap={{ scale: isProcessing ? 1 : 0.98 }}
            >
              {isProcessing ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </div>
              ) : (
                'Proceed to Payment'
              )}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnrollmentConfirmation;