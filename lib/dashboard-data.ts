interface BusinessIdea {
  title: string
  description: string
  score: number
  industry: string
  date: string
}

interface IndustryData {
  name: string
  percentage: number
  count: number
}

export function getTopIdeas(timeRange: string): BusinessIdea[] {
  // In a real application, this would fetch data from a database
  // For demonstration, we'll return mock data
  return [
    {
      title: "AI-Powered Healthcare Diagnostics Platform",
      description:
        "A platform that uses artificial intelligence to analyze medical images and assist doctors in diagnosing diseases more accurately and quickly.",
      score: 96,
      industry: "Healthcare",
      date: "May 12, 2023",
    },
    {
      title: "Sustainable Packaging Solutions",
      description:
        "Biodegradable packaging materials made from agricultural waste that decompose completely within 30 days.",
      score: 88,
      industry: "Manufacturing",
      date: "June 3, 2023",
    },
    {
      title: "Peer-to-Peer Skill Exchange Platform",
      description:
        "A marketplace where people can exchange skills and knowledge without monetary transactions, based on a time-banking system.",
      score: 85,
      industry: "Education",
      date: "April 28, 2023",
    },
    {
      title: "Smart Home Energy Management System",
      description:
        "An IoT system that optimizes home energy usage by learning patterns and automatically adjusting settings to reduce consumption and costs.",
      score: 82,
      industry: "Technology",
      date: "May 22, 2023",
    },
    {
      title: "Virtual Reality Fitness Platform",
      description:
        "A VR platform that transforms workouts into immersive gaming experiences, making fitness more engaging and enjoyable.",
      score: 79,
      industry: "Fitness",
      date: "June 15, 2023",
    },
  ]
}

export function getRecentIdeas(): BusinessIdea[] {
  // In a real application, this would fetch data from a database
  // For demonstration, we'll return mock data
  return [
    {
      title: "On-Demand Home Services App",
      description:
        "A platform connecting homeowners with verified service providers for repairs, maintenance, and improvements with real-time tracking.",
      score: 76,
      industry: "Services",
      date: "Today",
    },
    {
      title: "Personalized Nutrition Subscription",
      description:
        "A service that creates customized meal plans and delivers ingredients based on individual health data, preferences, and goals.",
      score: 82,
      industry: "Food",
      date: "Yesterday",
    },
    {
      title: "AR Shopping Assistant",
      description:
        "An augmented reality app that helps shoppers find products in stores, provides information, and offers personalized recommendations.",
      score: 68,
      industry: "Retail",
      date: "2 days ago",
    },
    {
      title: "Microlearning Platform for Professional Skills",
      description:
        "A platform offering bite-sized, focused learning modules for professionals to acquire specific skills in 15-30 minutes per day.",
      score: 74,
      industry: "Education",
      date: "3 days ago",
    },
    {
      title: "Community-Based Renewable Energy Marketplace",
      description:
        "A platform enabling neighborhoods to invest in shared renewable energy projects and distribute benefits among participants.",
      score: 89,
      industry: "Energy",
      date: "4 days ago",
    },
  ]
}

export function getIndustryDistribution(): IndustryData[] {
  // In a real application, this would fetch data from a database
  // For demonstration, we'll return mock data
  return [
    {
      name: "Technology",
      percentage: 32,
      count: 398,
    },
    {
      name: "Healthcare",
      percentage: 18,
      count: 224,
    },
    {
      name: "Education",
      percentage: 14,
      count: 175,
    },
    {
      name: "Finance",
      percentage: 12,
      count: 150,
    },
    {
      name: "Retail",
      percentage: 10,
      count: 125,
    },
    {
      name: "Food & Beverage",
      percentage: 8,
      count: 100,
    },
    {
      name: "Manufacturing",
      percentage: 6,
      count: 76,
    },
  ]
}
