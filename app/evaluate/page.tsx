"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, Lightbulb } from "lucide-react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EvaluatePage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Basic Info
    name: "",
    email: "",
    ideaTitle: "",
    ideaDescription: "",

    // Business Details
    industry: "",
    targetMarket: "",
    businessModel: "",
    stage: "",

    // Market & Competition
    competitionLevel: "medium",
    marketSize: "",
    targetCustomers: "",

    // Implementation
    investmentRequired: "",
    timeToMarket: "",
    technicalComplexity: "medium",

    // Additional Info
    uniqueSellingPoint: "",
    challenges: "",
    goals: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { 
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1)
    window.scrollTo(0, 0)
  }

  const handlePrevStep = () => {
    setCurrentStep((prev) => prev - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Store the form data in localStorage
    localStorage.setItem("businessIdeaData", JSON.stringify(formData))

    // Redirect to processing page
    router.push("/processing")
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
            <Link href="/evaluate" className="text-sm font-medium hover:underline underline-offset-4 font-bold">
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
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Evaluate Your Business Idea
              </h1>
              <p className="text-slate-700 md:text-xl">
                Our AI agents will analyze your concept and provide detailed insights
              </p>
            </div>

            {/* Progress Steps */}
            <div className="flex justify-between items-center mb-8">
              {[1, 2, 3, 4, 5].map((step) => (
                <div key={step} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step < currentStep
                        ? "bg-indigo-600 text-white"
                        : step === currentStep
                          ? "bg-indigo-100 border-2 border-indigo-600 text-indigo-600"
                          : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {step < currentStep ? <Check className="h-5 w-5" /> : step}
                  </div>
                  <span className="text-xs mt-1 hidden md:block">
                    {step === 1
                      ? "Basic Info"
                      : step === 2
                        ? "Business Details"
                        : step === 3
                          ? "Market"
                          : step === 4
                            ? "Implementation"
                            : "Review"}
                  </span>
                </div>
              ))}
            </div>

            <Card className="border-indigo-100 shadow-md">
              <CardHeader>
                <CardTitle>
                  {currentStep === 1
                    ? "Basic Information"
                    : currentStep === 2
                      ? "Business Details"
                      : currentStep === 3
                        ? "Market & Competition"
                        : currentStep === 4
                          ? "Implementation Details"
                          : "Review Your Submission"}
                </CardTitle>
                <CardDescription>
                  {currentStep === 1
                    ? "Tell us about yourself and your idea"
                    : currentStep === 2
                      ? "Provide details about your business concept"
                      : currentStep === 3
                        ? "Describe your target market and competition"
                        : currentStep === 4
                          ? "Share how you plan to implement your idea"
                          : "Review all information before submission"}
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-6">
                  {/* Step 1: Basic Information */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            required
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            placeholder="john@example.com"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ideaTitle">Idea Title</Label>
                        <Input
                          id="ideaTitle"
                          name="ideaTitle"
                          placeholder="E.g., AI-Powered Fitness Coach"
                          required
                          value={formData.ideaTitle}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ideaDescription">Idea Description</Label>
                        <Textarea
                          id="ideaDescription"
                          name="ideaDescription"
                          placeholder="Describe your business idea in detail..."
                          required
                          className="min-h-[150px]"
                          value={formData.ideaDescription}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 2: Business Details */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="industry">Industry</Label>
                          <Select
                            onValueChange={(value) => handleSelectChange("industry", value)}
                            value={formData.industry}
                          >
                            <SelectTrigger id="industry">
                              <SelectValue placeholder="Select industry" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="technology">Technology</SelectItem>
                              <SelectItem value="healthcare">Healthcare</SelectItem>
                              <SelectItem value="finance">Finance</SelectItem>
                              <SelectItem value="education">Education</SelectItem>
                              <SelectItem value="retail">Retail</SelectItem>
                              <SelectItem value="food">Food & Beverage</SelectItem>
                              <SelectItem value="manufacturing">Manufacturing</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="targetMarket">Target Market</Label>
                          <Select
                            onValueChange={(value) => handleSelectChange("targetMarket", value)}
                            value={formData.targetMarket}
                          >
                            <SelectTrigger id="targetMarket">
                              <SelectValue placeholder="Select target market" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="b2c">B2C (Business to Consumer)</SelectItem>
                              <SelectItem value="b2b">B2B (Business to Business)</SelectItem>
                              <SelectItem value="b2g">B2G (Business to Government)</SelectItem>
                              <SelectItem value="c2c">C2C (Consumer to Consumer)</SelectItem>
                              <SelectItem value="mixed">Mixed</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="businessModel">Business Model</Label>
                          <Select
                            onValueChange={(value) => handleSelectChange("businessModel", value)}
                            value={formData.businessModel}
                          >
                            <SelectTrigger id="businessModel">
                              <SelectValue placeholder="Select business model" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="subscription">Subscription</SelectItem>
                              <SelectItem value="ecommerce">E-commerce</SelectItem>
                              <SelectItem value="marketplace">Marketplace</SelectItem>
                              <SelectItem value="saas">SaaS</SelectItem>
                              <SelectItem value="freemium">Freemium</SelectItem>
                              <SelectItem value="advertising">Advertising</SelectItem>
                              <SelectItem value="service">Service-based</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="stage">Current Stage</Label>
                          <Select onValueChange={(value) => handleSelectChange("stage", value)} value={formData.stage}>
                            <SelectTrigger id="stage">
                              <SelectValue placeholder="Select current stage" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="idea">Just an idea</SelectItem>
                              <SelectItem value="concept">Concept development</SelectItem>
                              <SelectItem value="prototype">Prototype/MVP</SelectItem>
                              <SelectItem value="launched">Already launched</SelectItem>
                              <SelectItem value="growing">Growing business</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Market & Competition */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label>Competition Level</Label>
                        <RadioGroup
                          defaultValue="medium"
                          className="grid grid-cols-3 gap-4"
                          value={formData.competitionLevel}
                          onValueChange={(value) => handleRadioChange("competitionLevel", value)}
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="low" id="low" />
                            <Label htmlFor="low">Low</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="medium" id="medium" />
                            <Label htmlFor="medium">Medium</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="high" id="high" />
                            <Label htmlFor="high">High</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="marketSize">Market Size</Label>
                        <Select
                          onValueChange={(value) => handleSelectChange("marketSize", value)}
                          value={formData.marketSize}
                        >
                          <SelectTrigger id="marketSize">
                            <SelectValue placeholder="Select market size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">Small (Under $1M)</SelectItem>
                            <SelectItem value="medium">Medium ($1M - $10M)</SelectItem>
                            <SelectItem value="large">Large ($10M - $100M)</SelectItem>
                            <SelectItem value="xlarge">Very Large ($100M+)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="targetCustomers">Target Customers</Label>
                        <Textarea
                          id="targetCustomers"
                          name="targetCustomers"
                          placeholder="Describe your target customers in detail..."
                          className="min-h-[100px]"
                          value={formData.targetCustomers}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 4: Implementation Details */}
                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="investmentRequired">Initial Investment Required</Label>
                          <Select
                            onValueChange={(value) => handleSelectChange("investmentRequired", value)}
                            value={formData.investmentRequired}
                          >
                            <SelectTrigger id="investmentRequired">
                              <SelectValue placeholder="Select investment range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under10k">Under $10,000</SelectItem>
                              <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                              <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                              <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                              <SelectItem value="500k-1m">$500,000 - $1 million</SelectItem>
                              <SelectItem value="over1m">Over $1 million</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="timeToMarket">Expected Time to Market</Label>
                          <Select
                            onValueChange={(value) => handleSelectChange("timeToMarket", value)}
                            value={formData.timeToMarket}
                          >
                            <SelectTrigger id="timeToMarket">
                              <SelectValue placeholder="Select timeframe" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under3months">Under 3 months</SelectItem>
                              <SelectItem value="3-6months">3-6 months</SelectItem>
                              <SelectItem value="6-12months">6-12 months</SelectItem>
                              <SelectItem value="1-2years">1-2 years</SelectItem>
                              <SelectItem value="over2years">Over 2 years</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Technical Complexity</Label>
                        <RadioGroup
                          defaultValue="medium"
                          className="grid grid-cols-3 gap-4"
                          value={formData.technicalComplexity}
                          onValueChange={(value) => handleRadioChange("technicalComplexity", value)}
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="low" id="tech-low" />
                            <Label htmlFor="tech-low">Low</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="medium" id="tech-medium" />
                            <Label htmlFor="tech-medium">Medium</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="high" id="tech-high" />
                            <Label htmlFor="tech-high">High</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="uniqueSellingPoint">Unique Selling Point</Label>
                        <Textarea
                          id="uniqueSellingPoint"
                          name="uniqueSellingPoint"
                          placeholder="What makes your idea unique or different from existing solutions?"
                          className="min-h-[100px]"
                          value={formData.uniqueSellingPoint}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 5: Review */}
                  {currentStep === 5 && (
                    <div className="space-y-6">
                      <Tabs defaultValue="basic" className="w-full">
                        <TabsList className="grid w-full grid-cols-4">
                          <TabsTrigger value="basic">Basic Info</TabsTrigger>
                          <TabsTrigger value="business">Business</TabsTrigger>
                          <TabsTrigger value="market">Market</TabsTrigger>
                          <TabsTrigger value="implementation">Implementation</TabsTrigger>
                        </TabsList>
                        <TabsContent value="basic" className="space-y-4 pt-4">
                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                              <h3 className="font-medium text-sm text-gray-500">Name</h3>
                              <p>{formData.name}</p>
                            </div>
                            <div>
                              <h3 className="font-medium text-sm text-gray-500">Email</h3>
                              <p>{formData.email}</p>
                            </div>
                          </div>
                          <div>
                            <h3 className="font-medium text-sm text-gray-500">Idea Title</h3>
                            <p>{formData.ideaTitle}</p>
                          </div>
                          <div>
                            <h3 className="font-medium text-sm text-gray-500">Idea Description</h3>
                            <p className="whitespace-pre-line">{formData.ideaDescription}</p>
                          </div>
                        </TabsContent>
                        <TabsContent value="business" className="space-y-4 pt-4">
                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                              <h3 className="font-medium text-sm text-gray-500">Industry</h3>
                              <p>{formData.industry}</p>
                            </div>
                            <div>
                              <h3 className="font-medium text-sm text-gray-500">Target Market</h3>
                              <p>{formData.targetMarket}</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                              <h3 className="font-medium text-sm text-gray-500">Business Model</h3>
                              <p>{formData.businessModel}</p>
                            </div>
                            <div>
                              <h3 className="font-medium text-sm text-gray-500">Current Stage</h3>
                              <p>{formData.stage}</p>
                            </div>
                          </div>
                        </TabsContent>
                        <TabsContent value="market" className="space-y-4 pt-4">
                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                              <h3 className="font-medium text-sm text-gray-500">Competition Level</h3>
                              <p>{formData.competitionLevel}</p>
                            </div>
                            <div>
                              <h3 className="font-medium text-sm text-gray-500">Market Size</h3>
                              <p>{formData.marketSize}</p>
                            </div>
                          </div>
                          <div>
                            <h3 className="font-medium text-sm text-gray-500">Target Customers</h3>
                            <p className="whitespace-pre-line">{formData.targetCustomers}</p>
                          </div>
                        </TabsContent>
                        <TabsContent value="implementation" className="space-y-4 pt-4">
                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                              <h3 className="font-medium text-sm text-gray-500">Initial Investment</h3>
                              <p>{formData.investmentRequired}</p>
                            </div>
                            <div>
                              <h3 className="font-medium text-sm text-gray-500">Time to Market</h3>
                              <p>{formData.timeToMarket}</p>
                            </div>
                          </div>
                          <div>
                            <h3 className="font-medium text-sm text-gray-500">Technical Complexity</h3>
                            <p>{formData.technicalComplexity}</p>
                          </div>
                          <div>
                            <h3 className="font-medium text-sm text-gray-500">Unique Selling Point</h3>
                            <p className="whitespace-pre-line">{formData.uniqueSellingPoint}</p>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between">
                  {currentStep > 1 ? (
                    <Button variant="outline" type="button" onClick={handlePrevStep}>
                      Previous
                    </Button>
                  ) : (
                    <Button variant="outline" type="button" asChild>
                      <Link href="/">Cancel</Link>
                    </Button>
                  )}

                  {currentStep < 5 ? (
                    <Button type="button" onClick={handleNextStep} className="bg-indigo-600 hover:bg-indigo-700">
                      Next
                    </Button>
                  ) : (
                    <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700">
                      Submit for Evaluation
                    </Button>
                  )}
                </CardFooter>
              </form>
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
