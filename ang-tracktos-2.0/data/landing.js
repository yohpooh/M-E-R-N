import {
  BarChart3,
  Receipt,
  PieChart,
  CreditCard,
  Globe,
  Zap,
} from "lucide-react";

// Stats Data
export const statsData = [
  {
    value: "0+",
    label: "Active Users",
  },
  {
    value: "₱0B+",
    label: "Transactions Tracked",
  },
  {
    value: "00.0%",
    label: "Uptime",
  },
  {
    value: "0.0/5",
    label: "User Rating",
  },
];

// Features Data
export const featuresData = [
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "Enhanced Insights",
    description:
      "Uncover actionable trends in your spending habits with AI-powered tools.",
  },
  {
    icon: <Receipt className="h-8 w-8 text-blue-600" />,
    title: "AI Receipt Scanner",
    description:
      "Seamlessly extract and organize data from receipts using cutting-edge AI.",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "Smart Budgeting",
    description:
      "Plan and optimize your finances with personalized budget suggestions.",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "Multi-Account Management",
    description:
      "Easily oversee all your accounts and cards from a single dashboard.",
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: "Global Currency Support",
    description:
      "Handle multiple currencies effortlessly with real-time exchange rates.",
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Automated Insights",
    description:
      "Receive tailored financial insights and suggestions automatically.",
  },
];

// How It Works Data
export const howItWorksData = [
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "1. Create Your Account",
    description:
      "Create an account easily to manage finances and track investments.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "2. Track Your Spending",
    description:
      "Monitor expenses, set budgets, and gain insights for smarter financial decisions",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "3. Get Insights",
    description:
      "Gain smart financial advice with AI-powered insights and personalized recommendations to improve money management and investments effectively",
  },
];

// Testimonials Data
export const testimonialsData = [
  {
    name: "Juana Dela Cruz",
    role: "Small Business Owner",
    image: "/002.jpg",
    quote:
      "Ang Tracktos 2.0 has completely changed the way I handle my business finances. Its AI-driven insights have revealed cost-saving opportunities I had never considered before.",
  },
  {
    name: "Juan Dela Cruz",
    role: "Freelancer",
    image: "/001.jpg",
    quote:
      "The receipt scanning feature frees up hours for me every month, allowing me to concentrate on my work rather than spending time on manual data entry and expense tracking.",
  },
  {
    name: "Juan Dela Cruz Sr.",
    role: "Financial Advisor",
    image: "/003.jpg",
    quote:
      "I always suggest Ang Tractos 2.0 to my clients because its multi-currency capabilities and in-depth analytics make it an ideal choice for global investors.",
  },
];
