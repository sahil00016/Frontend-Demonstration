import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface UserDetails {
  fullName: string;
  email: string;
  countryCode: string;
  mobile: string;
  service: string;
}

export interface Course {
  id: string;
  name: string;
  description: string;
  duration: string;
  fee: string;
}

export interface Program {
  id: string;
  name: string;
  courses: Course[];
}

export const programs: Program[] = [
  {
    id: 'study-abroad',
    name: 'Study Abroad',
    courses: [
      {
        id: 'ms-cs-usa',
        name: 'MS in Computer Science (USA)',
        description: 'Comprehensive program for computer science masters in top US universities. Gain expertise in algorithms, software engineering, and cutting-edge technologies.',
        duration: '2 years',
        fee: '$50,000',
      },
      {
        id: 'ms-data-science',
        name: 'MS in Data Science',
        description: 'Master data analysis, machine learning, and statistical modeling. Prepare for roles in data science and analytics.',
        duration: '2 years',
        fee: '$45,000',
      },
      {
        id: 'mba-abroad',
        name: 'MBA Abroad',
        description: 'Global business education with international exposure. Develop leadership skills and business acumen for global careers.',
        duration: '2 years',
        fee: '$60,000',
      },
      {
        id: 'ms-ai',
        name: 'MS in Artificial Intelligence',
        description: 'Advanced AI curriculum covering machine learning, neural networks, and AI applications in various industries.',
        duration: '2 years',
        fee: '$55,000',
      },
      {
        id: 'ms-business-analytics',
        name: 'MS in Business Analytics',
        description: 'Learn to leverage data for business decisions. Focus on analytics tools, visualization, and strategic insights.',
        duration: '2 years',
        fee: '$48,000',
      },
    ],
  },
  {
    id: 'career-launchpad',
    name: 'Career Launchpad',
    courses: [
      {
        id: 'full-stack-dev',
        name: 'Full Stack Web Development',
        description: 'Become a full stack developer. Learn frontend and backend technologies, databases, and deployment.',
        duration: '6 months',
        fee: '$8,000',
      },
      {
        id: 'data-analytics-bi',
        name: 'Data Analytics & Business Intelligence',
        description: 'Master data visualization, BI tools, and analytical techniques for business intelligence roles.',
        duration: '4 months',
        fee: '$6,000',
      },
      {
        id: 'product-management',
        name: 'Product Management',
        description: 'Learn product strategy, roadmapping, and management. Prepare for PM roles in tech companies.',
        duration: '5 months',
        fee: '$7,000',
      },
      {
        id: 'ui-ux-design',
        name: 'UI/UX Design',
        description: 'Design user-centered interfaces and experiences. Master design tools and user research methods.',
        duration: '4 months',
        fee: '$5,500',
      },
      {
        id: 'digital-marketing',
        name: 'Digital Marketing & Growth',
        description: 'Comprehensive digital marketing course covering SEO, social media, PPC, and growth hacking.',
        duration: '3 months',
        fee: '$4,500',
      },
    ],
  },
  {
    id: 'professional-courses',
    name: 'Professional Courses',
    courses: [
      {
        id: 'python-pro',
        name: 'Python for Professionals',
        description: 'Advanced Python programming for professionals. Focus on automation, data processing, and professional applications.',
        duration: '2 months',
        fee: '$2,500',
      },
      {
        id: 'excel-powerbi',
        name: 'Advanced Excel & Power BI',
        description: 'Master Excel advanced features and Power BI for data visualization and business intelligence.',
        duration: '1.5 months',
        fee: '$2,000',
      },
      {
        id: 'sql-database',
        name: 'SQL & Database Management',
        description: 'Learn SQL querying, database design, and management. Essential for data roles.',
        duration: '2 months',
        fee: '$2,200',
      },
      {
        id: 'ml-foundations',
        name: 'Machine Learning Foundations',
        description: 'Introduction to machine learning concepts, algorithms, and practical implementation.',
        duration: '3 months',
        fee: '$3,500',
      },
      {
        id: 'cloud-computing',
        name: 'Cloud Computing Basics',
        description: 'Fundamentals of cloud computing, AWS/Azure basics, and cloud architecture.',
        duration: '2 months',
        fee: '$2,800',
      },
    ],
  },
];

interface EnrollmentContextType {
  isOpen: boolean;
  currentStep: number;
  userDetails: UserDetails | null;
  activeProgram: Program | null;
  selectedCourse: Course | null;
  openModal: () => void;
  closeModal: () => void;
  setStep: (step: number) => void;
  setUserDetails: (details: UserDetails) => void;
  setActiveProgram: (program: Program) => void;
  setSelectedCourse: (course: Course) => void;
}

const EnrollmentContext = createContext<EnrollmentContextType | undefined>(undefined);

export const useEnrollment = () => {
  const context = useContext(EnrollmentContext);
  if (!context) {
    throw new Error('useEnrollment must be used within EnrollmentProvider');
  }
  return context;
};

interface EnrollmentProviderProps {
  children: ReactNode;
}

export const EnrollmentProvider: React.FC<EnrollmentProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [userDetails, setUserDetailsState] = useState<UserDetails | null>(null);
  const [activeProgram, setActiveProgramState] = useState<Program | null>(null);
  const [selectedCourse, setSelectedCourseState] = useState<Course | null>(null);

  const openModal = () => {
    setIsOpen(true);
    setCurrentStep(1);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentStep(1);
    setUserDetailsState(null);
    setActiveProgramState(null);
    setSelectedCourseState(null);
  };

  const setStep = (step: number) => {
    setCurrentStep(step);
  };

  const setUserDetails = (details: UserDetails) => {
    setUserDetailsState(details);
  };

  const setActiveProgram = (program: Program) => {
    setActiveProgramState(program);
  };

  const setSelectedCourse = (course: Course) => {
    setSelectedCourseState(course);
  };

  return (
    <EnrollmentContext.Provider
      value={{
        isOpen,
        currentStep,
        userDetails,
        activeProgram,
        selectedCourse,
        openModal,
        closeModal,
        setStep,
        setUserDetails,
        setActiveProgram,
        setSelectedCourse,
      }}
    >
      {children}
    </EnrollmentContext.Provider>
  );
};