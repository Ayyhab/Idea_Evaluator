import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { evaluateBusinessIdea } from "./evaluation"

// This file demonstrates how the AI agents would be implemented in a real application
// For the demo, we're using mock data in evaluation.ts instead

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

// Originality Agent - Analyzes the idea for innovation and creativity
export async function originalityAgent(data: BusinessIdeaData) {
  const prompt = `
    You are an AI agent specialized in evaluating the originality and innovation of business ideas.
    
    Analyze the following business idea:
    
    Title: ${data.ideaTitle}
    Description: ${data.ideaDescription}
    Industry: ${data.industry}
    Unique Selling Point: ${data.uniqueSellingPoint}
    
    Provide an originality score from 0-100 and explain your reasoning.
    Include strengths related to originality and suggestions for improving originality.
    Format your response as JSON with the following structure:
    {
      "score": number,
      "reasoning": "string",
      "strengths": ["string"],
      "improvements": ["string"]
    }
  `

  try {
    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt,
    })

    return JSON.parse(text)
  } catch (error) {
    console.error("Error in originality agent:", error)
    return {
      score: 65,
      reasoning: "Unable to perform full analysis. Using default evaluation based on available data.",
      strengths: ["Concept appears to have some innovative elements"],
      improvements: ["Consider further differentiation from existing solutions"],
    }
  }
}

// Feasibility Agent - Evaluates technical, operational, and financial viability
export async function feasibilityAgent(data: BusinessIdeaData) {
  const prompt = `
    You are an AI agent specialized in evaluating the feasibility of business ideas.
    
    Analyze the following business idea:
    
    Title: ${data.ideaTitle}
    Description: ${data.ideaDescription}
    Technical Complexity: ${data.technicalComplexity}
    Investment Required: ${data.investmentRequired}
    Time to Market: ${data.timeToMarket}
    Current Stage: ${data.stage}
    
    Provide a feasibility score from 0-100 and explain your reasoning.
    Include strengths related to feasibility and suggestions for improving feasibility.
    Format your response as JSON with the following structure:
    {
      "score": number,
      "reasoning": "string",
      "strengths": ["string"],
      "improvements": ["string"]
    }
  `

  try {
    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt,
    })

    return JSON.parse(text)
  } catch (error) {
    console.error("Error in feasibility agent:", error)
    return {
      score: 70,
      reasoning: "Unable to perform full analysis. Using default evaluation based on available data.",
      strengths: ["Implementation appears achievable with outlined resources"],
      improvements: ["Consider more detailed implementation planning"],
    }
  }
}

// Market Agent - Assesses market size, competition, and growth potential
export async function marketAgent(data: BusinessIdeaData) {
  const prompt = `
    You are an AI agent specialized in evaluating the market potential of business ideas.
    
    Analyze the following business idea:
    
    Title: ${data.ideaTitle}
    Description: ${data.ideaDescription}
    Industry: ${data.industry}
    Target Market: ${data.targetMarket}
    Market Size: ${data.marketSize}
    Competition Level: ${data.competitionLevel}
    Target Customers: ${data.targetCustomers}
    Business Model: ${data.businessModel}
    
    Provide a market potential score from 0-100 and explain your reasoning.
    Include strengths related to market potential and suggestions for improving market potential.
    Format your response as JSON with the following structure:
    {
      "score": number,
      "reasoning": "string",
      "strengths": ["string"],
      "improvements": ["string"]
    }
  `

  try {
    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt,
    })

    return JSON.parse(text)
  } catch (error) {
    console.error("Error in market agent:", error)
    return {
      score: 60,
      reasoning: "Unable to perform full analysis. Using default evaluation based on available data.",
      strengths: ["Target market appears to have growth potential"],
      improvements: ["Consider more detailed market research"],
    }
  }
}

// Uniqueness Detection Agent - Checks for similar existing solutions
export async function uniquenessAgent(data: BusinessIdeaData) {
  const prompt = `
    You are an AI agent specialized in detecting the uniqueness of business ideas by comparing them to existing solutions.
    
    Analyze the following business idea:
    
    Title: ${data.ideaTitle}
    Description: ${data.ideaDescription}
    Industry: ${data.industry}
    Unique Selling Point: ${data.uniqueSellingPoint}
    
    Provide a uniqueness score from 0-100 and explain your reasoning.
    Also determine if there are any similar existing solutions in the market.
    Format your response as JSON with the following structure:
    {
      "score": number,
      "reasoning": "string",
      "isUnique": boolean,
      "similarSolutions": [
        {
          "name": "string",
          "description": "string",
          "similarity": number,
          "url": "string"
        }
      ]
    }
  `

  try {
    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt,
    })

    return JSON.parse(text)
  } catch (error) {
    console.error("Error in uniqueness agent:", error)
    return {
      score: 75,
      reasoning: "Unable to perform full analysis. Using default evaluation based on available data.",
      isUnique: true,
      similarSolutions: [],
    }
  }
}

// Recommendation Agent - Combines all agent outputs to provide final recommendations
export async function recommendationAgent(
  originalityResults: any,
  feasibilityResults: any,
  marketResults: any,
  uniquenessResults: any,
  data: BusinessIdeaData,
) {
  const prompt = `
    You are an AI agent specialized in providing strategic recommendations for business ideas.
    
    You have received analysis from multiple specialized agents:
    
    Originality Analysis:
    ${JSON.stringify(originalityResults)}
    
    Feasibility Analysis:
    ${JSON.stringify(feasibilityResults)}
    
    Market Potential Analysis:
    ${JSON.stringify(marketResults)}
    
    Uniqueness Analysis:
    ${JSON.stringify(uniquenessResults)}
    
    Business Idea:
    ${JSON.stringify(data)}
    
    Based on all this information, provide:
    1. An overall score from 0-100
    2. A list of key strengths
    3. A list of key weaknesses
    4. A list of strategic recommendations
    
    Format your response as JSON with the following structure:
    {
      "overallScore": number,
      "strengths": ["string"],
      "weaknesses": ["string"],
      "recommendations": ["string"]
    }
  `

  try {
    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt,
    })

    return JSON.parse(text)
  } catch (error) {
    console.error("Error in recommendation agent:", error)
    return {
      overallScore: 70,
      strengths: [
        "The concept shows innovation in the target industry",
        "Implementation appears feasible with the outlined resources",
        "The target market shows growth potential",
      ],
      weaknesses: [
        "Some similar solutions exist in the market",
        "Market research could be more comprehensive",
        "Implementation timeline may be optimistic",
      ],
      recommendations: [
        "Conduct more detailed market research to validate demand",
        "Develop a more detailed implementation plan",
        "Focus on strengthening unique value proposition",
        "Consider creating an MVP to test key assumptions",
      ],
    }
  }
}

// Main function to coordinate all agents
export async function evaluateWithAI(data: BusinessIdeaData) {
  try {
    // Run all agents in parallel
    const [originalityResults, feasibilityResults, marketResults, uniquenessResults] = await Promise.all([
      originalityAgent(data),
      feasibilityAgent(data),
      marketAgent(data),
      uniquenessAgent(data),
    ])

    // Combine results with recommendation agent
    const finalRecommendations = await recommendationAgent(
      originalityResults,
      feasibilityResults,
      marketResults,
      uniquenessResults,
      data,
    )

    // Return comprehensive results
    return {
      originality: originalityResults.score,
      feasibility: feasibilityResults.score,
      marketPotential: marketResults.score,
      uniqueness: uniquenessResults.score,
      overallScore: finalRecommendations.overallScore,
      strengths: finalRecommendations.strengths,
      weaknesses: finalRecommendations.weaknesses,
      recommendations: finalRecommendations.recommendations,
      similarIdeas: uniquenessResults.similarSolutions || [],
      isUnique: uniquenessResults.isUnique,
    }
  } catch (error) {
    console.error("Error in AI evaluation:", error)
    // Fallback to mock evaluation if AI fails
    return evaluateBusinessIdea(data)
  }
}
