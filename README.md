# 🚀 LauchedGlobal - Career Accelerator Enrollment Platform

A premium, fully animated enrollment platform for career development programs. Built with modern React, TypeScript, and Framer Motion for a seamless user experience.

![Project Preview](https://via.placeholder.com/800x400/gradient?text=LauchedGlobal+Enrollment+Platform)



DEPLOYEMNT LINK : https://frontend-demonstration.vercel.app/


## ✨ Features

### 🎯 Core Functionality
- **Multi-Step Enrollment Flow**: Complete enrollment process from user details to payment
- **Program Selection**: Choose from Study Abroad, Career Launchpad, and Professional Courses
- **Course Catalog**: Rich course listings with detailed information and pricing
- **Mock Payment Gateway**: Realistic payment simulation with UPI support
- **Progress Tracking**: Interactive progress indicators throughout the flow

### 🎨 Premium UI/UX
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Responsive Design**: Optimized for desktop and mobile devices
- **Gradient Backgrounds**: Beautiful color schemes with depth
- **Interactive Elements**: Hover effects, click animations, and state transitions
- **Professional Styling**: Clean, modern design with Tailwind CSS

### 🔧 Technical Features
- **TypeScript**: Full type safety and better developer experience
- **Context API**: Efficient state management across components
- **Component Architecture**: Modular, reusable React components
- **Performance Optimized**: Fast builds with Vite and optimized animations

## 🛠️ Tech Stack

### Frontend Framework
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript for better code quality
- **Vite** - Lightning-fast build tool and development server

### Styling & Animation
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Framer Motion** - Production-ready motion library for React
- **PostCSS** - CSS processing and optimization

### Development Tools
- **ESLint** - Code linting and formatting
- **Vite** - Fast development and building
- **npm** - Package management

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── HeroSection.tsx   # Landing page with animated cards
│   ├── EnrollmentModal.tsx # User details form
│   ├── CourseSelection.tsx # Program and course selection
│   ├── CourseDetail.tsx   # Individual course information
│   ├── EnrollmentConfirmation.tsx # Enrollment summary
│   ├── MockPaymentGateway.tsx # Payment simulation
│   ├── ProgressIndicator.tsx # Step navigation
│   ├── AnimatedCard.tsx  # Card animations
│   ├── AnimatedHeading.tsx # Text animations
│   ├── CTAButton.tsx     # Call-to-action buttons
│   ├── CardDeck.tsx      # Card stacking component
│   ├── CardStack.tsx     # Card positioning
│   ├── DeckIndicators.tsx # Navigation dots
│   ├── FloatingIcon.tsx  # Animated icons
│   └── InteractiveCard.tsx # Interactive card elements
├── contexts/             # React Context for state management
│   └── EnrollmentContext.tsx # Global enrollment state
├── App.tsx               # Main application component
├── main.tsx              # Application entry point
└── index.css             # Global styles and Tailwind imports
```

## 🎯 UI Components Overview

### Core Flow Components

#### 1. HeroSection
- **Purpose**: Landing page with program overview
- **Features**: Animated card deck, gradient background, CTA integration
- **Animations**: Card stacking, hover lifts, smooth transitions

#### 2. EnrollmentModal (Step 1)
- **Purpose**: Collect user contact information
- **Features**: Form validation, country code selection, service selection
- **Validation**: Email format, required fields, mobile number

#### 3. CourseSelection (Step 2)
- **Purpose**: Program and course selection interface
- **Features**: Horizontal tab selector, course list with rich details
- **Animations**: Panel transitions, card hover effects, accent bars

#### 4. CourseDetail (Step 3)
- **Purpose**: Detailed course information display
- **Features**: Course description, duration, pricing, enrollment CTA
- **Animations**: Content fade-in, interactive elements

#### 5. EnrollmentConfirmation (Step 4)
- **Purpose**: Review enrollment details before payment
- **Features**: User info summary, course details, proceed to payment
- **Animations**: Processing states, smooth transitions

#### 6. MockPaymentGateway (Step 5)
- **Purpose**: Simulated payment processing
- **Features**: UPI input validation, loading states, success screen
- **Animations**: Scale animations, confetti effects, success transitions

### Supporting Components

#### ProgressIndicator
- **Purpose**: Visual progress tracking across enrollment steps
- **Features**: Clickable steps, current step highlighting
- **Animations**: Hover effects, smooth state transitions

#### Animated Components
- **AnimatedHeading**: Staggered text reveals with hover effects
- **AnimatedCard**: Card entrance animations with depth
- **CTAButton**: Gradient sweep animations on interaction
- **FloatingIcon**: Subtle floating animations for visual interest

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/launchedglobal.git
   cd launchedglobal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 🎮 Usage Guide

### Enrollment Flow
1. **Start**: Click "Get Started" on the hero section
2. **Details**: Fill in personal information and select service
3. **Programs**: Choose from available career programs
4. **Courses**: Select specific course from the chosen program
5. **Details**: Review course information and confirm
6. **Confirmation**: Verify enrollment details
7. **Payment**: Use mock UPI ID "success@razorpay" for demo payment
8. **Success**: View enrollment confirmation with generated ID

### Mock Payment
- **UPI ID**: `success@razorpay` (accepts only this for demo)
- **Processing**: 2-second simulation delay
- **Success**: Animated confirmation with enrollment ID

## 🎨 Design System

### Color Palette
- **Primary**: Orange gradients (#FF6B35 to #F7931E)
- **Accent**: Blue, Green, Purple, Pink, Indigo for course cards
- **Background**: Slate to Stone gradients for depth
- **Text**: Gray scale for readability

### Typography
- **Headings**: Bold, large fonts for hierarchy
- **Body**: Clean, readable text with proper contrast
- **Mono**: For enrollment IDs and technical details

### Animation Principles
- **Duration**: 0.4-0.6s for major transitions
- **Easing**: Custom cubic-bezier for premium feel
- **Stagger**: 0.1s delays for sequential animations
- **Scale**: Subtle 1.02x hover effects
- **Motion**: Smooth, calm, professional movements

## 🔧 Development

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Code Style
- **TypeScript**: Strict mode enabled
- **ESLint**: Airbnb config with React rules
- **Imports**: Absolute imports from src/
- **Components**: Functional components with hooks

### State Management
- **Context API**: For global enrollment state
- **Local State**: useState for component-specific state
- **No External Libraries**: Pure React state management

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px - Single column, stacked layout
- **Tablet**: 768px - 1024px - Adjusted spacing
- **Desktop**: > 1024px - Full layout with animations

### Mobile Optimizations
- Touch-friendly buttons and interactions
- Optimized text sizes and spacing
- Smooth scrolling and animations
- Responsive card layouts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Framer Motion** for incredible animation capabilities
- **Tailwind CSS** for rapid, consistent styling
- **Vite** for blazing fast development experience
- **React** ecosystem for robust frontend development

---

**Built with ❤️ for career advancement and seamless user experiences**
src/
├── components/
│   ├── AnimatedHeading.tsx    # Individual heading line with hover effects
│   ├── CTAButton.tsx          # Button with gradient sweep animation
│   ├── CardStack.tsx          # Container for stacked cards
│   ├── FloatingIcon.tsx       # Rocket icon with floating animation
│   ├── HeroSection.tsx        # Main hero section component
│   └── InteractiveCard.tsx    # Individual card with hover interactions
├── App.tsx                    # Root component
├── main.tsx                   # Entry point
└── index.css                  # Global styles


Screenshots:
<img width="1788" height="879" alt="image" src="https://github.com/user-attachments/assets/9dfe84d5-0693-4d36-9852-7fc6b12b113f" />
<img width="1781" height="873" alt="image" src="https://github.com/user-attachments/assets/996849fc-dfe1-46ff-9333-6e714dea0d8f" />
<img width="1773" height="875" alt="image" src="https://github.com/user-attachments/assets/69449005-bcd4-43c7-a8c4-284aeb3d6fc0" />
<img width="1714" height="880" alt="image" src="https://github.com/user-attachments/assets/9057e502-9614-44fd-af16-b19825a4aac6" />
<img width="1574" height="882" alt="image" src="https://github.com/user-attachments/assets/982fe399-17bc-4046-b2a0-91e98618cd38" />
<img width="1414" height="877" alt="image" src="https://github.com/user-attachments/assets/e48982c3-4ccf-47c7-8d80-b295e2d048df" />
<img width="1418" height="871" alt="image" src="https://github.com/user-attachments/assets/bc8c655e-86e0-46ad-bb12-db6419cd16dd" />




```



## Animation Details

- **Floating Icon**: Smooth vertical float animation (3s infinite loop)
- **Heading Lines**: Independent hover animations with scale, glow, and letter-spacing changes
- **CTA Button**: Gradient sweep on hover, scale and shadow effects
- **Stacked Cards**: Depth-based scaling, blur, and z-index management with smooth hover transitions
