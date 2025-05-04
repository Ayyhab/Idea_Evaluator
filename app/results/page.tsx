"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Download,
  Share2,
  Lightbulb,
  Target,
  Briefcase,
  Brain,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { evaluateBusinessIdea } from "@/lib/evaluation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

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

export default function ResultsPage() {
  const router = useRouter()
  const [businessData, setBusinessData] = useState<BusinessIdeaData | null>(null)
  const [evaluationResult, setEvaluationResult] = useState<EvaluationResult | null>(null)

  useEffect(() => {
    // Retrieve the business idea data from localStorage
    const storedData = localStorage.getItem("businessIdeaData")
    if (storedData) {
      const parsedData = JSON.parse(storedData) as BusinessIdeaData
      setBusinessData(parsedData)

      // Generate evaluation results
      const result = evaluateBusinessIdea(parsedData)
      setEvaluationResult(result)
    } else {
      // If no data is found, redirect to the evaluation form
      router.push("/evaluate")
    }
  }, [router])

  if (!businessData || !evaluationResult) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Loading results...</h1>
          <p className="text-slate-700">Please wait while we prepare your evaluation.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Lightbulb className="h-6 w-6 text-indigo-600" />
            <span className="text-xl font-bold">A. Siddiqui & M. Hamza</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/evaluate" className="text-sm font-medium hover:underline underline-offset-4">
              Evaluate
            </Link>
            <Link href="/dashboard" className="text-sm font-medium hover:underline underline-offset-4">
              Dashboard
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="flex items-center justify-between">
              <Button variant="ghost" size="sm" className="gap-1" asChild>
                <Link href="/evaluate">
                  <ArrowLeft className="h-4 w-4" /> Back to Form
                </Link>
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <Share2 className="h-4 w-4" /> Share
                </Button>
                <Button variant="outline" size="sm" className="gap-1">
                  <Download className="h-4 w-4" /> Download PDF
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">AI Evaluation Results</h1>
              <p className="text-slate-700">
                Our AI agents have analyzed your business idea:{" "}
                <span className="font-medium">{businessData.ideaTitle}</span>
              </p>
            </div>

            {/* Overall Score Card */}
            <Card className="border-indigo-100 shadow-md">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-2xl">Overall Score: {evaluationResult.overallScore}/100</CardTitle>
                  {evaluationResult.isUnique ? (
                    <Badge className="bg-green-600">
                      <CheckCircle2 className="h-3 w-3 mr-1" /> Unique Concept
                    </Badge>
                  ) : (
                    <Badge variant="destructive">
                      <AlertTriangle className="h-3 w-3 mr-1" /> Similar Ideas Exist
                    </Badge>
                  )}
                </div>
                <CardDescription>
                  {evaluationResult.overallScore >= 80
                    ? "Excellent potential. This idea shows strong promise across all evaluation criteria."
                    : evaluationResult.overallScore >= 60
                      ? "Good potential. This idea has several strengths but could benefit from some improvements."
                      : "Moderate potential. This idea needs significant refinement before proceeding."}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Lightbulb className="h-5 w-5 text-indigo-600" />
                        <div>
                          <h3 className="font-medium">Originality</h3>
                          <p className="text-xs text-slate-500">Innovation and creative approach</p>
                        </div>
                      </div>
                      <span className="font-bold">{evaluationResult.originality}/100</span>
                    </div>
                    <Progress value={evaluationResult.originality} className="h-2" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-emerald-600" />
                        <div>
                          <h3 className="font-medium">Feasibility</h3>
                          <p className="text-xs text-slate-500">Implementation difficulty, resource requirements</p>
                        </div>
                      </div>
                      <span className="font-bold">{evaluationResult.feasibility}/100</span>
                    </div>
                    <Progress
                      value={evaluationResult.feasibility}
                      className="h-2 bg-gray-100"
                      indicatorClassName="bg-emerald-600"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-amber-600" />
                        <div>
                          <h3 className="font-medium">Market Potential</h3>
                          <p className="text-xs text-slate-500">Demand, market size, and growth prospects</p>
                        </div>
                      </div>
                      <span className="font-bold">{evaluationResult.marketPotential}/100</span>
                    </div>
                    <Progress
                      value={evaluationResult.marketPotential}
                      className="h-2 bg-gray-100"
                      indicatorClassName="bg-amber-600"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Brain className="h-5 w-5 text-blue-600" />
                        <div>
                          <h3 className="font-medium">Uniqueness</h3>
                          <p className="text-xs text-slate-500">Differentiation from existing solutions</p>
                        </div>
                      </div>
                      <span className="font-bold">{evaluationResult.uniqueness}/100</span>
                    </div>
                    <Progress
                      value={evaluationResult.uniqueness}
                      className="h-2 bg-gray-100"
                      indicatorClassName="bg-blue-600"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Analysis Tabs */}
            <Tabs defaultValue="analysis" className="space-y-4">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="analysis">Analysis</TabsTrigger>
                <TabsTrigger value="strengths">Strengths & Weaknesses</TabsTrigger>
                <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
                <TabsTrigger value="similar">Similar Ideas</TabsTrigger>
              </TabsList>

              {/* Analysis Tab */}
              <TabsContent value="analysis" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Detailed Analysis</CardTitle>
                    <CardDescription>
                      Our AI agents have analyzed your business idea across multiple dimensions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="originality">
                        <AccordionTrigger>
                          <div className="flex items-center gap-2">
                            <Lightbulb className="h-5 w-5 text-indigo-600" />
                            <span>Originality Analysis</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4 pt-4">
                            <p className="text-slate-700">
                              Your idea demonstrates{" "}
                              {evaluationResult.originality >= 80
                                ? "exceptional"
                                : evaluationResult.originality >= 60
                                  ? "good"
                                  : "moderate"}{" "}
                              originality with a score of {evaluationResult.originality}/100. The concept{" "}
                              {evaluationResult.originality >= 70
                                ? "introduces innovative elements that differentiate it from existing solutions"
                                : "has some novel aspects but shares similarities with existing offerings"}
                              .
                            </p>
                            <p className="text-slate-700">
                              The {businessData.industry} industry currently{" "}
                              {evaluationResult.originality >= 70
                                ? "lacks solutions that address this specific need in the way you've proposed"
                                : "has several solutions addressing similar needs, but your approach offers some unique elements"}
                              .
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="feasibility">
                        <AccordionTrigger>
                          <div className="flex items-center gap-2">
                            <Target className="h-5 w-5 text-emerald-600" />
                            <span>Feasibility Analysis</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4 pt-4">
                            <p className="text-slate-700">
                              With a feasibility score of {evaluationResult.feasibility}/100, your idea is{" "}
                              {evaluationResult.feasibility >= 80
                                ? "highly implementable"
                                : evaluationResult.feasibility >= 60
                                  ? "reasonably feasible"
                                  : "challenging to implement"}{" "}
                              given the resources and timeline you've outlined.
                            </p>
                            <p className="text-slate-700">
                              The technical complexity is rated as {businessData.technicalComplexity}, which{" "}
                              {businessData.technicalComplexity === "low"
                                ? "should allow for relatively straightforward development"
                                : businessData.technicalComplexity === "medium"
                                  ? "presents moderate development challenges"
                                  : "may require specialized expertise and extended development time"}
                              .
                            </p>
                            <p className="text-slate-700">
                              Your estimated investment of {businessData.investmentRequired} is{" "}
                              {evaluationResult.feasibility >= 70 ? "appropriate" : "potentially insufficient"} for the
                              scope of this project, and the timeline of {businessData.timeToMarket} is{" "}
                              {evaluationResult.feasibility >= 70 ? "realistic" : "ambitious"}.
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="market">
                        <AccordionTrigger>
                          <div className="flex items-center gap-2">
                            <Briefcase className="h-5 w-5 text-amber-600" />
                            <span>Market Potential Analysis</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4 pt-4">
                            <p className="text-slate-700">
                              Your idea shows{" "}
                              {evaluationResult.marketPotential >= 80
                                ? "strong"
                                : evaluationResult.marketPotential >= 60
                                  ? "promising"
                                  : "limited"}{" "}
                              market potential with a score of {evaluationResult.marketPotential}/100. The{" "}
                              {businessData.marketSize} market size you're targeting offers{" "}
                              {evaluationResult.marketPotential >= 70
                                ? "significant opportunity for growth"
                                : "some opportunity, though with limitations"}
                              .
                            </p>
                            <p className="text-slate-700">
                              The competition level is {businessData.competitionLevel}, which{" "}
                              {businessData.competitionLevel === "low"
                                ? "presents an opportunity to establish market leadership"
                                : businessData.competitionLevel === "medium"
                                  ? "will require clear differentiation to capture market share"
                                  : "means you'll need a strong competitive advantage to succeed"}
                              .
                            </p>
                            <p className="text-slate-700">
                              Your {businessData.businessModel} business model is{" "}
                              {evaluationResult.marketPotential >= 70 ? "well-suited" : "somewhat aligned"} with current
                              market trends in the {businessData.industry} industry.
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="uniqueness">
                        <AccordionTrigger>
                          <div className="flex items-center gap-2">
                            <Brain className="h-5 w-5 text-blue-600" />
                            <span>Uniqueness Assessment</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4 pt-4">
                            <p className="text-slate-700">
                              Our uniqueness detection agent has determined that your idea is{" "}
                              {evaluationResult.isUnique
                                ? "unique with limited direct competition"
                                : "similar to some existing solutions in the market"}
                              , with a uniqueness score of {evaluationResult.uniqueness}/100.
                            </p>
                            {evaluationResult.isUnique ? (
                              <p className="text-slate-700">
                                While there are some adjacent solutions in the market, your specific approach of{" "}
                                {businessData.uniqueSellingPoint} provides a distinct advantage that isn't currently
                                being offered.
                              </p>
                            ) : (
                              <p className="text-slate-700">
                                We've identified several similar solutions in the market (see "Similar Ideas" tab), but
                                your unique selling point of {businessData.uniqueSellingPoint} still offers some
                                differentiation.
                              </p>
                            )}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Strengths & Weaknesses Tab */}
              <TabsContent value="strengths" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-emerald-600 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5" />
                        Strengths
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {evaluationResult.strengths.map((strength, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-emerald-600 mt-1">•</span>
                            <span>{strength}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-red-600 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5" />
                        Weaknesses
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {evaluationResult.weaknesses.map((weakness, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-red-600 mt-1">•</span>
                            <span>{weakness}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Recommendations Tab */}
              <TabsContent value="recommendations" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Strategic Recommendations</CardTitle>
                    <CardDescription>
                      Based on our AI analysis, here are key recommendations to improve your business idea
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {evaluationResult.recommendations.map((recommendation, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-medium text-indigo-600">
                            {index + 1}
                          </div>
                          <p className="text-slate-700">{recommendation}</p>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700" asChild>
                      <Link href="/evaluate">Refine Your Idea</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              {/* Similar Ideas Tab */}
              <TabsContent value="similar" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Similar Ideas in the Market</CardTitle>
                    <CardDescription>
                      Our AI has identified these existing solutions that share similarities with your concept
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {evaluationResult.similarIdeas.length > 0 ? (
                      <div className="space-y-6">
                        {evaluationResult.similarIdeas.map((idea, index) => (
                          <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-medium">{idea.name}</h3>
                              <Badge variant={idea.similarity > 70 ? "destructive" : "outline"}>
                                {idea.similarity}% Similar
                              </Badge>
                            </div>
                            <p className="text-sm text-slate-700 mb-2">{idea.description}</p>
                            <Link
                              href={idea.url}
                              target="_blank"
                              className="text-sm text-indigo-600 hover:underline flex items-center gap-1"
                            >
                              Visit website <ArrowRight className="h-3 w-3" />
                            </Link>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <CheckCircle2 className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                        <h3 className="text-lg font-medium mb-2">No Similar Ideas Found</h3>
                        <p className="text-slate-700">
                          Our AI agents couldn't find any significant similarities between your idea and existing
                          solutions in the market. This suggests your concept is relatively unique!
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Next Steps */}
            <Card className="bg-indigo-50 border-indigo-100">
              <CardHeader>
                <CardTitle>Next Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-slate-700">
                    Based on your evaluation results, here are some suggested next steps:
                  </p>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="bg-white p-4 rounded-lg border border-indigo-100 shadow-sm">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-sm">
                          1
                        </div>
                        Refine Your Concept
                      </h3>
                      <p className="text-sm text-slate-700">
                        Use our recommendations to strengthen your business idea and address identified weaknesses.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-indigo-100 shadow-sm">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-sm">
                          2
                        </div>
                        Conduct Market Research
                      </h3>
                      <p className="text-sm text-slate-700">
                        Validate our AI findings with real-world market research and potential customer interviews.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-indigo-100 shadow-sm">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-sm">
                          3
                        </div>
                        Create a Prototype
                      </h3>
                      <p className="text-sm text-slate-700">
                        Develop a minimum viable product (MVP) to test your concept with real users.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex flex-col sm:flex-row gap-2 w-full">
                  <Button className="bg-indigo-600 hover:bg-indigo-700 sm:flex-1" asChild>
                    <Link href="/evaluate">Evaluate Another Idea</Link>
                  </Button>
                  <Button variant="outline" className="sm:flex-1" asChild>
                    <Link href="/dashboard">View Dashboard</Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <footer className="border-t bg-white">
        <div className="container py-6 px-4 md:px-6">
          <p className="text-center text-sm text-slate-500">© 2023 A. Siddiqui & M. Hamza. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
