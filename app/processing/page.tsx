"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Lightbulb } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function ProcessingPage() {
  const router = useRouter()
  const [progress, setProgress] = useState(0)
  const [currentAgent, setCurrentAgent] = useState("Initializing")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    // Simulate AI processing with progress updates
    const agents = [
      { name: "Initializing", duration: 2000 },
      { name: "Originality Agent", duration: 5000 },
      { name: "Feasibility Agent", duration: 4000 },
      { name: "Market Potential Agent", duration: 4500 },
      { name: "Uniqueness Detection", duration: 3500 },
      { name: "Generating Recommendations", duration: 3000 },
      { name: "Finalizing Results", duration: 2000 },
    ]

    const totalDuration = agents.reduce((sum, agent) => sum + agent.duration, 0)
    let elapsed = 0

    // Process each agent in sequence
    agents.forEach((agent, index) => {
      setTimeout(() => {
        setCurrentAgent(agent.name)
      }, elapsed)

      // Update progress during this agent's work
      const startProgress = (elapsed / totalDuration) * 100
      const endProgress = ((elapsed + agent.duration) / totalDuration) * 100
      const steps = 20 // Update progress 20 times during each agent's work

      for (let i = 0; i <= steps; i++) {
        setTimeout(
          () => {
            const stepProgress = startProgress + (endProgress - startProgress) * (i / steps)
            setProgress(stepProgress)
          },
          elapsed + agent.duration * (i / steps),
        )
      }

      elapsed += agent.duration
    })

    // When all agents are done, redirect to results
    setTimeout(() => {
      setIsComplete(true)
      setTimeout(() => {
        router.push("/results")
      }, 1000)
    }, totalDuration)
  }, [router])

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <header className="border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Lightbulb className="h-6 w-6 text-indigo-600" />
            <span className="text-xl font-bold">A. Siddiqui & M. Hamza</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="container px-4 md:px-6 py-12">
          <div className="mx-auto max-w-md space-y-8 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                {isComplete ? "Analysis Complete!" : "Analyzing Your Business Idea"}
              </h1>
              <p className="text-slate-700 md:text-lg">
                {isComplete
                  ? "Redirecting you to your results..."
                  : "Our specialized AI agents are working together to evaluate your business concept"}
              </p>
            </div>

            <div className="relative h-40 w-40 mx-auto">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-32 w-32 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Lightbulb className="h-12 w-12 text-indigo-600" />
                </div>
              </div>
              <svg className="animate-spin h-40 w-40 absolute inset-0" viewBox="0 0 100 100">
                <circle
                  className="opacity-20"
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle
                  className="text-indigo-600"
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray="283"
                  strokeDashoffset={283 - (283 * progress) / 100}
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
              <p className="text-sm text-slate-500">
                Current process: <span className="font-medium">{currentAgent}</span>
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <div className="bg-white p-4 rounded-lg border border-indigo-100 shadow-sm">
                <h3 className="font-medium text-sm mb-2">How Our AI Agents Work Together</h3>
                <p className="text-sm text-slate-700">
                  Unlike standard chatbots, our platform uses multiple specialized AI agents that analyze different
                  aspects of your business idea simultaneously, then collaborate to provide comprehensive insights.
                </p>
              </div>
            </div>

            {isComplete && (
              <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
                <Link href="/results">View Your Results</Link>
              </Button>
            )}
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
