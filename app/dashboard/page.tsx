"use client"

import { useState } from "react"
import Link from "next/link"
import { BarChart3, Briefcase, Filter, PieChart, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getTopIdeas, getRecentIdeas, getIndustryDistribution } from "@/lib/dashboard-data"

export default function DashboardPage() {
  const [timeRange, setTimeRange] = useState("all")
  const topIdeas = getTopIdeas(timeRange)
  const recentIdeas = getRecentIdeas()
  const industryData = getIndustryDistribution()

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Briefcase className="h-6 w-6" />
            <span className="text-xl font-bold">IdeaRank</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/evaluate" className="text-sm font-medium hover:underline underline-offset-4">
              Evaluate
            </Link>
            <Link href="/dashboard" className="text-sm font-medium hover:underline underline-offset-4 font-bold">
              Dashboard
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter">Business Ideas Dashboard</h1>
                <p className="text-slate-700">Explore and analyze business ideas submitted through our platform</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <Filter className="h-4 w-4" /> Filters
                </Button>
                <Select defaultValue="all" onValueChange={setTimeRange}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select time range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Time</SelectItem>
                    <SelectItem value="month">Past Month</SelectItem>
                    <SelectItem value="week">Past Week</SelectItem>
                    <SelectItem value="day">Past 24 Hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Ideas</CardTitle>
                  <BarChart3 className="h-4 w-4 text-slate-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,248</div>
                  <p className="text-xs text-slate-500">+12% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Average Score</CardTitle>
                  <TrendingUp className="h-4 w-4 text-slate-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">72.4</div>
                  <p className="text-xs text-slate-500">+2.1 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Top Industry</CardTitle>
                  <PieChart className="h-4 w-4 text-slate-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Technology</div>
                  <p className="text-xs text-slate-500">32% of all submissions</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Highest Score</CardTitle>
                  <TrendingUp className="h-4 w-4 text-slate-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">96</div>
                  <p className="text-xs text-slate-500">AI-powered healthcare platform</p>
                </CardContent>
              </Card>
            </div>
            <Tabs defaultValue="top">
              <TabsList>
                <TabsTrigger value="top">Top Ideas</TabsTrigger>
                <TabsTrigger value="recent">Recent Submissions</TabsTrigger>
                <TabsTrigger value="industry">Industry Distribution</TabsTrigger>
              </TabsList>
              <TabsContent value="top" className="space-y-4 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Top Rated Business Ideas</CardTitle>
                    <CardDescription>
                      The highest-scoring business ideas based on our evaluation criteria
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      {topIdeas.map((idea, index) => (
                        <div key={index} className="flex flex-col space-y-3">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold">{idea.title}</h3>
                            <div className="flex items-center gap-2">
                              <div className="text-sm font-medium">{idea.score}/100</div>
                              <div
                                className={`h-2 w-2 rounded-full ${
                                  idea.score >= 80 ? "bg-emerald-500" : idea.score >= 60 ? "bg-amber-500" : "bg-red-500"
                                }`}
                              />
                            </div>
                          </div>
                          <p className="text-sm text-slate-500">{idea.description}</p>
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <span className="rounded-full bg-slate-100 px-2 py-1 text-xs">{idea.industry}</span>
                              <span className="text-slate-500">{idea.date}</span>
                            </div>
                            <Button variant="ghost" size="sm" asChild>
                              <Link href="#">View Details</Link>
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="recent" className="space-y-4 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Submissions</CardTitle>
                    <CardDescription>The latest business ideas submitted to our platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      {recentIdeas.map((idea, index) => (
                        <div key={index} className="flex flex-col space-y-3">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold">{idea.title}</h3>
                            <div className="flex items-center gap-2">
                              <div className="text-sm font-medium">{idea.score}/100</div>
                              <div
                                className={`h-2 w-2 rounded-full ${
                                  idea.score >= 80 ? "bg-emerald-500" : idea.score >= 60 ? "bg-amber-500" : "bg-red-500"
                                }`}
                              />
                            </div>
                          </div>
                          <p className="text-sm text-slate-500">{idea.description}</p>
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <span className="rounded-full bg-slate-100 px-2 py-1 text-xs">{idea.industry}</span>
                              <span className="text-slate-500">{idea.date}</span>
                            </div>
                            <Button variant="ghost" size="sm" asChild>
                              <Link href="#">View Details</Link>
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="industry" className="space-y-4 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Industry Distribution</CardTitle>
                    <CardDescription>Breakdown of business ideas by industry</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {industryData.map((industry, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">{industry.name}</h3>
                            <span className="text-sm font-medium">{industry.percentage}%</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-slate-100">
                            <div
                              className="h-full rounded-full bg-slate-700"
                              style={{ width: `${industry.percentage}%` }}
                            />
                          </div>
                          <p className="text-xs text-slate-500">{industry.count} ideas submitted</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <footer className="border-t bg-slate-50">
        <div className="container py-6 px-4 md:px-6">
          <p className="text-center text-sm text-slate-500">© 2023 IdeaRank. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
