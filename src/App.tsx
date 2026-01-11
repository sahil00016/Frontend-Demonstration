import HeroSection from './components/HeroSection';
import EnrollmentModal from './components/EnrollmentModal';
import CourseSelection from './components/CourseSelection';
import CourseDetail from './components/CourseDetail';
import EnrollmentConfirmation from './components/EnrollmentConfirmation';
import MockPaymentGateway from './components/MockPaymentGateway';
import { EnrollmentProvider, useEnrollment } from './contexts/EnrollmentContext';

const AppContent: React.FC = () => {
  const { isOpen, currentStep } = useEnrollment();

  return (
    <div className="min-h-screen">
      <HeroSection />
      {isOpen && currentStep === 1 && <EnrollmentModal />}
      {currentStep === 2 && <CourseSelection />}
      {currentStep === 3 && <CourseDetail />}
      {currentStep === 4 && <EnrollmentConfirmation />}
      {currentStep === 5 && <MockPaymentGateway />}
    </div>
  );
};

function App() {
  return (
    <EnrollmentProvider>
      <AppContent />
    </EnrollmentProvider>
  );
}

export default App;
