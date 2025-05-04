import Link from "next/link"
import { ArrowRight, Brain, Briefcase, Lightbulb, Target } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-6 w-6 text-indigo-600" />
            <span className="text-xl font-bold">A. Siddiqui & M. Hamza</span>
          </div>
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
          <div className="flex items-center gap-4">
            <Link href="/evaluate">
              <Button className="bg-indigo-600 hover:bg-indigo-700">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-indigo-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm text-indigo-600">
                  AI-Powered Analysis
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Transform Your Business Ideas with Advanced AI Evaluation
                </h1>
                <p className="max-w-[600px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform uses multiple specialized AI agents to analyze your business concept across originality,
                  feasibility, and market potential dimensions.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/evaluate">
                    <Button className="gap-1 bg-indigo-600 hover:bg-indigo-700">
                      Evaluate Your Idea <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/dashboard">
                    <Button variant="outline">View Dashboard</Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[500px] aspect-square rounded-xl bg-white p-6 shadow-xl border border-indigo-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4 w-full max-w-[400px]">
                      <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-100">
                        <Lightbulb className="h-8 w-8 text-indigo-600 mb-2" />
                        <h3 className="font-medium">Originality</h3>
                        <div className="mt-2 h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-600 w-[85%]" />
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-100">
                        <Target className="h-8 w-8 text-emerald-500 mb-2" />
                        <h3 className="font-medium">Feasibility</h3>
                        <div className="mt-2 h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 w-[70%]" />
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-100">
                        <Briefcase className="h-8 w-8 text-amber-500 mb-2" />
                        <h3 className="font-medium">Market Potential</h3>
                        <div className="mt-2 h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-amber-500 w-[60%]" />
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-100">
                        <Brain className="h-8 w-8 text-blue-500 mb-2" />
                        <h3 className="font-medium">Uniqueness</h3>
                        <div className="mt-2 h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 w-[90%]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm text-indigo-600">
                  Our AI Agents
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Multiple Specialized AI Agents Working Together
                </h2>
                <p className="max-w-[900px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Unlike standard chatbots, our platform uses a team of specialized AI agents that collaborate to
                  provide comprehensive analysis
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                  <Lightbulb className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold">Originality Agent</h3>
                <p className="text-slate-700">
                  Analyzes your idea against existing businesses and concepts to determine its uniqueness and innovation
                  factor.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                  <Target className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">Feasibility Agent</h3>
                <p className="text-slate-700">
                  Evaluates the technical, operational, and financial viability of your business concept.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                  <Briefcase className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold">Market Agent</h3>
                <p className="text-slate-700">
                  Assesses market size, competition, growth potential, and customer demand for your business idea.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-indigo-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm text-indigo-600">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Evaluate Your Business Idea in 3 Simple Steps
                </h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-4 md:grid-cols-3 md:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm border border-indigo-100">
                  <span className="text-2xl font-bold text-indigo-600">1</span>
                </div>
                <h3 className="text-xl font-bold">Submit Your Idea</h3>
                <p className="text-slate-700">
                  Describe your business concept in our e-commerce-style submission form with all relevant details.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm border border-indigo-100">
                  <span className="text-2xl font-bold text-indigo-600">2</span>
                </div>
                <h3 className="text-xl font-bold">AI Analysis</h3>
                <p className="text-slate-700">
                  Our team of specialized AI agents analyzes your idea across multiple dimensions simultaneously.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm border border-indigo-100">
                  <span className="text-2xl font-bold text-indigo-600">3</span>
                </div>
                <h3 className="text-xl font-bold">Get Detailed Results</h3>
                <p className="text-slate-700">
                  Receive comprehensive rankings, actionable suggestions, and uniqueness assessment for your idea.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm text-indigo-600">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Trusted by Entrepreneurs and Innovators
                </h2>
                <p className="text-slate-700 md:text-xl">
                  See what users are saying about our AI-powered business idea evaluation platform.
                </p>
                <div className="space-y-4">
                  <div className="rounded-lg border bg-white p-4 shadow-sm">
                    <p className="italic text-slate-700">
                      "The AI analysis was incredibly thorough and spotted weaknesses in my business model I hadn't
                      considered. The suggestions helped me pivot and secure funding."
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                        <span className="text-sm font-medium text-indigo-600">JD</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Jessica Davis</p>
                        <p className="text-xs text-slate-500">Founder, EcoTech Solutions</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-white p-4 shadow-sm">
                    <p className="italic text-slate-700">
                      "I was skeptical at first, but the market analysis was spot-on. The platform identified similar
                      products I wasn't aware of and helped me differentiate my offering."
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                        <span className="text-sm font-medium text-indigo-600">MR</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Michael Rodriguez</p>
                        <p className="text-xs text-slate-500">CEO, NovaTech</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[500px] rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="/placeholder.svg?height=600&width=500"
                    alt="Entrepreneurs using the platform"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-indigo-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Evaluate Your Business Idea?
                </h2>
                <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Get comprehensive AI analysis and actionable insights to refine your concept and increase your chances
                  of success.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/evaluate">
                  <Button className="gap-1 bg-white text-indigo-600 hover:bg-gray-100">
                    Start Now <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-white">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12">
          <div className="flex flex-col gap-2 md:gap-4 lg:flex-1">
            <div className="flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-indigo-600" />
              <span className="text-xl font-bold">A. Siddiqui & M. Hamza</span>
            </div>
            <p className="text-sm text-slate-500 md:text-base">
              Transforming business ideas with advanced AI analysis since 2023.
            </p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-slate-500 hover:underline">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-500 hover:underline">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-slate-500 hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-500 hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-slate-500 hover:underline">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-500 hover:underline">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t">
            <h4 className="text-sm font-medium mb-4">Academic Partners</h4>
            <div className="flex flex-wrap gap-6 items-center justify-center md:justify-start">
              <div className="flex flex-col items-center">
                <img src="/images/mit-logo.png" alt="MIT" className="h-12 w-auto object-contain" />
                <span className="text-xs text-slate-500 mt-1">MIT</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/images/harvard-logo.png" alt="Harvard" className="h-16 w-auto object-contain" />
                <span className="text-xs text-slate-500 mt-1">Harvard</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/images/ubc-logo.png" alt="UBC" className="h-12 w-auto object-contain" />
                <span className="text-xs text-slate-500 mt-1">UBC</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/images/waterloo-logo.png" alt="Waterloo" className="h-14 w-auto object-contain" />
                <span className="text-xs text-slate-500 mt-1">Waterloo</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-slate-500 md:text-left">
              © 2023 A. Siddiqui & M. Hamza. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
