import React from 'react';
import { motion } from 'framer-motion';
import { useEnrollment } from '../contexts/EnrollmentContext';

interface Step {
  number: number;
  label: string;
}

interface ProgressIndicatorProps {
  steps: Step[];
  currentStep: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ steps, currentStep }) => {
  const { setStep } = useEnrollment();

  const handleStepClick = (stepNumber: number) => {
    if (stepNumber < currentStep) {
      setStep(stepNumber);
    }
  };

  return (
    <div className="flex items-center justify-center mb-12">
      <div className="flex items-center space-x-4">
        {steps.map((step, index) => {
          const isCompleted = step.number < currentStep;
          const isCurrent = step.number === currentStep;
          const isClickable = isCompleted;

          return (
            <React.Fragment key={step.number}>
              <motion.div
                className="flex items-center"
                onClick={isClickable ? () => handleStepClick(step.number) : undefined}
                whileHover={isClickable ? { scale: 1.05 } : {}}
                whileTap={isClickable ? { scale: 0.95 } : {}}
              >
                <motion.div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                    isCompleted
                      ? 'bg-green-500 text-white cursor-pointer hover:bg-green-600'
                      : isCurrent
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}
                  animate={isClickable ? { boxShadow: '0 0 0 4px rgba(34, 197, 94, 0.2)' } : {}}
                  whileHover={isClickable ? { boxShadow: '0 0 0 6px rgba(34, 197, 94, 0.3)' } : {}}
                >
                  {isCompleted ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    step.number
                  )}
                </motion.div>
                <span className={`ml-2 text-sm ${isCurrent ? 'font-semibold text-orange-600' : 'text-gray-600'}`}>
                  {step.label}
                </span>
              </motion.div>
              {index < steps.length - 1 && (
                <div className={`w-8 h-0.5 ${step.number < currentStep ? 'bg-green-500' : 'bg-gray-300'}`}></div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressIndicator;