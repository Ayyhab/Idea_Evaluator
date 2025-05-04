interface BusinessIdeaData {
  name: string
  email: string
  ideaTitle: string
  ideaDescription: string
  industry: string
  targetMarket: string
  businessModel: string
  stage: string
  competitionLevel: string
  marketSize: string
  targetCustomers: string
  investmentRequired: string
  timeToMarket: string
  technicalComplexity: string
  uniqueSellingPoint: string
  challenges: string
  goals: string
}

interface EvaluationResult {
  originality: number
  feasibility: number
  marketPotential: number
  uniqueness: number
  overallScore: number
  strengths: string[]
  weaknesses: string[]
  recommendations: string[]
  similarIdeas: {
    name: string
    description: string
    similarity: number
    url: string
  }[]
  isUnique: boolean
}

export function evaluateBusinessIdea(data: BusinessIdeaData): EvaluationResult {
  // This is a simplified evaluation function for demonstration purposes
  // In a real application, this would involve actual AI agents and more complex analysis

  // Calculate scores based on the input data
  const originality = calculateOriginality(data)
  const feasibility = calculateFeasibility(data)
  const marketPotential = calculateMarketPotential(data)
  const uniqueness = calculateUniqueness(data)

  // Overall score (weighted average)
  const overallScore = Math.round(originality * 0.25 + feasibility * 0.25 + marketPotential * 0.3 + uniqueness * 0.2)

  // Generate strengths, weaknesses, and recommendations
  const strengths = generateStrengths(data, { originality, feasibility, marketPotential, uniqueness })
  const weaknesses = generateWeaknesses(data, { originality, feasibility, marketPotential, uniqueness })
  const recommendations = generateRecommendations(data, { originality, feasibility, marketPotential, uniqueness })

  // Check for similar ideas
  const similarIdeas = findSimilarIdeas(data)
  const isUnique = similarIdeas.length === 0 || similarIdeas[0].similarity < 70

  return {
    originality,
    feasibility,
    marketPotential,
    uniqueness,
    overallScore,
    strengths,
    weaknesses,
    recommendations,
    similarIdeas,
    isUnique,
  }
}

function calculateOriginality(data: BusinessIdeaData): number {
  // In a real application, this would use NLP and other AI techniques to analyze the idea
  let score = 65 // Base score

  // Adjust based on industry
  if (data.industry === "technology" || data.industry === "healthcare") {
    score += 10
  }

  // Adjust based on uniqueness of selling point (length as a simple proxy)
  if (data.uniqueSellingPoint && data.uniqueSellingPoint.length > 100) {
    score += 15
  } else if (data.uniqueSellingPoint && data.uniqueSellingPoint.length > 50) {
    score += 5
  }

  // Random variation to simulate AI analysis
  score += Math.floor(Math.random() * 10) - 5

  // Ensure score is within 0-100 range
  return Math.max(0, Math.min(100, score))
}

function calculateFeasibility(data: BusinessIdeaData): number {
  let score = 70 // Base score

  // Adjust based on technical complexity
  if (data.technicalComplexity === "low") {
    score += 15
  } else if (data.technicalComplexity === "high") {
    score -= 15
  }

  // Adjust based on investment required
  if (data.investmentRequired === "under10k" || data.investmentRequired === "10k-50k") {
    score += 10
  } else if (data.investmentRequired === "over1m") {
    score -= 10
  }

  // Adjust based on time to market
  if (data.timeToMarket === "under3months") {
    score += 10
  } else if (data.timeToMarket === "over2years") {
    score -= 10
  }

  // Random variation to simulate AI analysis
  score += Math.floor(Math.random() * 10) - 5

  // Ensure score is within 0-100 range
  return Math.max(0, Math.min(100, score))
}

function calculateMarketPotential(data: BusinessIdeaData): number {
  let score = 60 // Base score

  // Adjust based on market size
  if (data.marketSize === "large" || data.marketSize === "xlarge") {
    score += 15
  } else if (data.marketSize === "small") {
    score -= 10
  }

  // Adjust based on competition level
  if (data.competitionLevel === "low") {
    score += 15
  } else if (data.competitionLevel === "high") {
    score -= 10
  }

  // Adjust based on business model
  if (data.businessModel === "saas" || data.businessModel === "subscription") {
    score += 10
  }

  // Random variation to simulate AI analysis
  score += Math.floor(Math.random() * 10) - 5

  // Ensure score is within 0-100 range
  return Math.max(0, Math.min(100, score))
}

function calculateUniqueness(data: BusinessIdeaData): number {
  // In a real application, this would compare against a database of existing businesses
  let score = 75 // Base score

  // Adjust based on competition level as a proxy
  if (data.competitionLevel === "low") {
    score += 15
  } else if (data.competitionLevel === "high") {
    score -= 15
  }

  // Adjust based on uniqueness of selling point (length as a simple proxy)
  if (data.uniqueSellingPoint && data.uniqueSellingPoint.length > 100) {
    score += 10
  }

  // Random variation to simulate AI analysis
  score += Math.floor(Math.random() * 15) - 5

  // Ensure score is within 0-100 range
  return Math.max(0, Math.min(100, score))
}

function generateStrengths(
  data: BusinessIdeaData,
  scores: { originality: number; feasibility: number; marketPotential: number; uniqueness: number },
): string[] {
  const strengths: string[] = []

  if (scores.originality >= 70) {
    strengths.push(`Highly innovative concept that brings fresh thinking to the ${data.industry} industry.`)
  }

  if (scores.feasibility >= 70) {
    strengths.push(`The implementation plan is realistic and achievable with the resources and timeline outlined.`)
  }

  if (scores.marketPotential >= 70) {
    strengths.push(`Strong market potential with significant growth opportunities in the ${data.marketSize} market.`)
  }

  if (scores.uniqueness >= 70) {
    strengths.push(`The concept offers unique value that differentiates it from existing solutions in the market.`)
  }

  if (data.competitionLevel === "low") {
    strengths.push(`Limited competition provides an opportunity to establish market leadership.`)
  }

  if (data.businessModel === "subscription" || data.businessModel === "saas") {
    strengths.push(
      `The ${data.businessModel} business model offers potential for recurring revenue and customer retention.`,
    )
  }

  // Ensure we have at least 3 strengths
  if (strengths.length < 3) {
    strengths.push(`The business concept addresses a clear market need.`)
    strengths.push(`The idea has potential for scalability and growth.`)
    strengths.push(`The concept is aligned with current trends in the ${data.industry} industry.`)
  }

  return strengths.slice(0, 5) // Return up to 5 strengths
}

function generateWeaknesses(
  data: BusinessIdeaData,
  scores: { originality: number; feasibility: number; marketPotential: number; uniqueness: number },
): string[] {
  const weaknesses: string[] = []

  if (scores.originality < 60) {
    weaknesses.push(`The concept lacks innovation and may struggle to differentiate itself in the market.`)
  }

  if (scores.feasibility < 60) {
    weaknesses.push(`Implementation challenges could delay market entry and increase costs beyond projections.`)
  }

  if (scores.marketPotential < 60) {
    weaknesses.push(`Limited market potential may restrict growth opportunities and return on investment.`)
  }

  if (scores.uniqueness < 60) {
    weaknesses.push(
      `The idea shares significant similarities with existing solutions, making differentiation difficult.`,
    )
  }

  if (data.competitionLevel === "high") {
    weaknesses.push(`High competition will require significant marketing investment to gain market share.`)
  }

  if (data.technicalComplexity === "high") {
    weaknesses.push(`The technical complexity presents development challenges that may impact timeline and budget.`)
  }

  if (data.timeToMarket === "1-2years" || data.timeToMarket === "over2years") {
    weaknesses.push(`Extended time-to-market increases risk of competitive entries and market changes.`)
  }

  // Ensure we have at least 3 weaknesses
  if (weaknesses.length < 3) {
    weaknesses.push(`Further market research may be needed to validate customer demand.`)
    weaknesses.push(`The business model may need refinement to maximize revenue potential.`)
    weaknesses.push(`The competitive landscape analysis could benefit from more depth.`)
  }

  return weaknesses.slice(0, 5) // Return up to 5 weaknesses
}

function generateRecommendations(
  data: BusinessIdeaData,
  scores: { originality: number; feasibility: number; marketPotential: number; uniqueness: number },
): string[] {
  const recommendations: string[] = []

  if (scores.originality < 70) {
    recommendations.push(
      `Enhance the innovative aspects of your concept to better differentiate it from existing solutions.`,
    )
  }

  if (scores.feasibility < 70) {
    recommendations.push(`Develop a more detailed implementation plan with clear milestones and resource allocation.`)
  }

  if (scores.marketPotential < 70) {
    recommendations.push(`Conduct additional market research to better understand customer needs and validate demand.`)
  }

  if (scores.uniqueness < 70) {
    recommendations.push(`Strengthen your unique value proposition to create clearer differentiation from competitors.`)
  }

  if (data.competitionLevel === "high") {
    recommendations.push(
      `Develop a comprehensive competitive analysis and positioning strategy to stand out in a crowded market.`,
    )
  }

  if (data.technicalComplexity === "high") {
    recommendations.push(
      `Consider breaking down the development into smaller phases to reduce technical risk and accelerate time to market.`,
    )
  }

  // Add general recommendations
  recommendations.push(
    `Create a minimum viable product (MVP) to test key assumptions and gather early customer feedback.`,
  )
  recommendations.push(
    `Develop a detailed financial projection including cash flow, break-even analysis, and funding requirements.`,
  )
  recommendations.push(
    `Establish key performance indicators (KPIs) to measure success and guide iterative improvements.`,
  )

  return recommendations.slice(0, 7) // Return up to 7 recommendations
}

function findSimilarIdeas(
  data: BusinessIdeaData,
): { name: string; description: string; similarity: number; url: string }[] {
  // In a real application, this would use AI to search for similar businesses
  // For demonstration, we'll return mock data based on the industry

  // Randomly determine if we should return similar ideas
  const shouldReturnSimilar = Math.random() > 0.5

  if (!shouldReturnSimilar) {
    return []
  }

  const similarIdeasByIndustry = {
    technology: [
      {
        name: "TechSolution Pro",
        description:
          "A platform that offers similar functionality but with a focus on enterprise clients rather than your target market.",
        similarity: Math.floor(Math.random() * 30) + 50, // 50-80% similarity
        url: "https://example.com/techsolution",
      },
      {
        name: "InnovateTech",
        description:
          "A smaller competitor with a similar concept but less comprehensive features and market penetration.",
        similarity: Math.floor(Math.random() * 20) + 40, // 40-60% similarity
        url: "https://example.com/innovatetech",
      },
    ],
    healthcare: [
      {
        name: "HealthPlus Solutions",
        description:
          "A healthcare platform with overlapping features but targeting a different segment of the healthcare market.",
        similarity: Math.floor(Math.random() * 30) + 50,
        url: "https://example.com/healthplus",
      },
    ],
    finance: [
      {
        name: "FinanceTrack",
        description:
          "A financial services platform with similar core functionality but different monetization approach.",
        similarity: Math.floor(Math.random() * 30) + 50,
        url: "https://example.com/financetrack",
      },
      {
        name: "WealthWise",
        description: "A more established competitor with similar features but focused on high net worth individuals.",
        similarity: Math.floor(Math.random() * 20) + 40,
        url: "https://example.com/wealthwise",
      },
    ],
    education: [
      {
        name: "EduLearn Platform",
        description: "An educational technology solution with similar approach but targeting different age groups.",
        similarity: Math.floor(Math.random() * 30) + 50,
        url: "https://example.com/edulearn",
      },
    ],
    retail: [
      {
        name: "RetailConnect",
        description:
          "A retail solution with overlapping features but focused on larger retailers rather than your target segment.",
        similarity: Math.floor(Math.random() * 30) + 50,
        url: "https://example.com/retailconnect",
      },
    ],
    food: [
      {
        name: "FoodTech Solutions",
        description: "A food industry platform with similar concept but different geographical focus.",
        similarity: Math.floor(Math.random() * 30) + 50,
        url: "https://example.com/foodtech",
      },
    ],
    manufacturing: [
      {
        name: "ManufacturePro",
        description: "A manufacturing solution with similar approach but targeting larger enterprises.",
        similarity: Math.floor(Math.random() * 30) + 50,
        url: "https://example.com/manufacturepro",
      },
    ],
    other: [
      {
        name: "IndustryConnect",
        description: "A general business solution with some overlapping features but less industry specialization.",
        similarity: Math.floor(Math.random() * 30) + 50,
        url: "https://example.com/industryconnect",
      },
    ],
  }

  // Return similar ideas based on industry, or empty array if none found
  return similarIdeasByIndustry[data.industry as keyof typeof similarIdeasByIndustry] || []
}
