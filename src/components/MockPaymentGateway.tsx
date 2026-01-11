import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEnrollment } from '../contexts/EnrollmentContext';
import ProgressIndicator from './ProgressIndicator';

const MockPaymentGateway: React.FC = () => {
  const { selectedCourse, userDetails } = useEnrollment();
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success'>('idle');
  const [upiId, setUpiId] = useState('');
  const [error, setError] = useState('');

  if (!selectedCourse || !userDetails) return null;

  const handlePayment = async () => {
    if (upiId !== 'success@razorpay') {
      setError('Invalid UPI ID (demo mode)');
      return;
    }

    setError('');
    setPaymentStatus('processing');

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    setPaymentStatus('success');
  };

  const generateEnrollmentId = () => {
    return 'ENR' + Math.random().toString(36).substr(2, 9).toUpperCase();
  };

  if (paymentStatus === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-neutral-50 to-stone-50 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <ProgressIndicator
            steps={[
              { number: 1, label: 'Details' },
              { number: 2, label: 'Programs & Courses' },
              { number: 3, label: 'Details' },
              { number: 4, label: 'Enrollment' },
              { number: 5, label: 'Payment' },
            ]}
            currentStep={5}
          />

          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
            >
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>

            <motion.h1
              className="text-3xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Payment Successful!
            </motion.h1>

            <motion.p
              className="text-lg text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Your enrollment for <span className="font-semibold text-orange-600">{selectedCourse.name}</span> has been confirmed.
            </motion.p>

            <motion.div
              className="bg-gray-50 rounded-xl p-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="text-sm text-gray-500 mb-2">Enrollment ID</div>
              <div className="text-lg font-mono font-semibold text-gray-900">{generateEnrollmentId()}</div>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <p className="text-gray-600">
                A confirmation email has been sent to <span className="font-medium">{userDetails.email}</span>
              </p>
              <motion.button
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-8 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Course Dashboard
              </motion.button>
            </motion.div>

            {/* Subtle confetti effect */}
            <AnimatePresence>
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-orange-400 rounded-full"
                  initial={{
                    opacity: 0,
                    x: Math.random() * 400 - 200,
                    y: Math.random() * 400 - 200,
                    scale: 0,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    rotate: Math.random() * 360,
                  }}
                  transition={{
                    duration: 2,
                    delay: Math.random() * 0.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-neutral-50 to-stone-50 py-12 px-4">
      <div className="max-w-md mx-auto">
        <ProgressIndicator
          steps={[
            { number: 1, label: 'Details' },
            { number: 2, label: 'Programs & Courses' },
            { number: 3, label: 'Details' },
            { number: 4, label: 'Enrollment' },
            { number: 5, label: 'Payment' },
          ]}
          currentStep={5}
        />

        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Secure Payment</h1>
            <p className="text-gray-600">Complete your enrollment for {selectedCourse.name}</p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-900">Course</span>
                <span className="text-sm text-gray-600">{selectedCourse.name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-900">Amount</span>
                <span className="text-lg font-bold text-orange-600">{selectedCourse.fee}</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h3>
              <div className="space-y-3">
                <div className="flex items-center p-4 border-2 border-orange-200 bg-orange-50 rounded-lg">
                  <div className="w-4 h-4 bg-orange-500 rounded-full mr-3"></div>
                  <span className="font-medium text-gray-900">UPI</span>
                </div>
                <div className="flex items-center p-4 border border-gray-200 rounded-lg opacity-50 cursor-not-allowed">
                  <div className="w-4 h-4 bg-gray-300 rounded-full mr-3"></div>
                  <span className="text-gray-500">Credit/Debit Card</span>
                </div>
                <div className="flex items-center p-4 border border-gray-200 rounded-lg opacity-50 cursor-not-allowed">
                  <div className="w-4 h-4 bg-gray-300 rounded-full mr-3"></div>
                  <span className="text-gray-500">Net Banking</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Enter UPI ID</label>
              <input
                type="text"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${
                  error ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="success@razorpay"
                disabled={paymentStatus === 'processing'}
              />
              <p className="text-xs text-gray-500 mt-1">Use success@razorpay for demo payment</p>
              {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
            </div>

            <motion.button
              onClick={handlePayment}
              disabled={paymentStatus === 'processing' || !upiId.trim()}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-6 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: paymentStatus === 'processing' ? 1 : 1.02 }}
              whileTap={{ scale: paymentStatus === 'processing' ? 1 : 0.98 }}
            >
              {paymentStatus === 'processing' ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Processing payment...</span>
                </div>
              ) : (
                `Pay ${selectedCourse.fee}`
              )}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MockPaymentGateway;