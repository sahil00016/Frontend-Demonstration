import { motion } from 'framer-motion';
import FloatingIcon from './FloatingIcon';
import AnimatedHeading from './AnimatedHeading';
import CTAButton from './CTAButton';
import CardDeck from './CardDeck';
import { useEnrollment } from '../contexts/EnrollmentContext';

const HeroSection: React.FC = () => {
  const { openModal } = useEnrollment();
  const rocketIcon = (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-orange-500"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );

  const cards = [
    {
      title: 'Study Abroad',
      subtitle: 'Transform your future with world-class education opportunities across top global universities.',
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-orange-500"
        >
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
    },
    {
      title: 'Career Launchpad',
      subtitle: 'Jumpstart your professional journey with industry-leading programs and expert mentorship.',
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-orange-500"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
    },
    {
      title: 'Professional Courses',
      subtitle: 'Master in-demand skills with comprehensive courses designed by industry experts.',
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-orange-500"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-neutral-50 to-stone-50 py-20 px-4 md:py-32 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative rounded-[3rem] bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50 p-8 md:p-12 lg:p-16 shadow-inner shadow-slate-200/50 shadow-lg shadow-slate-200/20">
          {/* Decorative dotted pattern */}
          <div className="absolute top-6 right-6 w-24 h-24 bg-[radial-gradient(circle_at_2px_2px,rgba(0,0,0,0.03)_1px,transparent_0)] bg-[length:8px_8px] opacity-60 pointer-events-none"></div>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Left Panel */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              <FloatingIcon icon={rocketIcon} className="mb-4" />

              <div className="space-y-4">
                <AnimatedHeading
                  text="Exclusively Curated Programs"
                  delay={0.1}
                  className="block text-4xl font-bold text-slate-900 md:text-5xl lg:text-6xl"
                />
                <AnimatedHeading
                  text="India's #1"
                  delay={0.2}
                  className="block text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent md:text-5xl lg:text-6xl"
                />
                <AnimatedHeading
                  text="Career Accelerator"
                  delay={0.3}
                  className="block text-4xl font-bold text-slate-900 md:text-5xl lg:text-6xl"
                />
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-lg text-lg leading-relaxed text-gray-600 md:text-xl"
              >
                Elevate your career trajectory with our meticulously designed programs that combine
                cutting-edge curriculum, expert mentorship, and real-world application.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <CTAButton text="Start Your Journey" onClick={openModal} />
              </motion.div>
            </motion.div>

            {/* Right Panel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center lg:justify-end lg:mt-16"
            >
              <CardDeck cards={cards} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
