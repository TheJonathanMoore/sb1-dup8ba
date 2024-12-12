"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    homeSize: "",
    service: "",
    timeline: "",
    location: ""
  })

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 sm:p-6">
      <Card className="max-w-7xl mx-auto border border-gray-200 shadow-lg bg-white">
        <CardContent className="p-4">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row flex-grow gap-4">
              <Select onValueChange={(value) => handleSelectChange("homeSize", value)}>
                <SelectTrigger id="homeSize" className="w-full sm:w-[200px]">
                  <SelectValue placeholder="Select home size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1000-1500">1,000-1,500 sq ft</SelectItem>
                  <SelectItem value="1500-2500">1,500-2,500 sq ft</SelectItem>
                  <SelectItem value="2500-3500">2,500-3,500 sq ft</SelectItem>
                  <SelectItem value="3500+">3,500+ sq ft</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={(value) => handleSelectChange("service", value)}>
                <SelectTrigger id="service" className="w-full sm:w-[200px]">
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="repair">Repair</SelectItem>
                  <SelectItem value="replacement">Roof Replacement</SelectItem>
                  <SelectItem value="assessment">Assessment</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={(value) => handleSelectChange("timeline", value)}>
                <SelectTrigger id="timeline" className="w-full sm:w-[200px]">
                <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Within 1 month</SelectItem>
                  <SelectItem value="3">Within 3 months</SelectItem>
                  <SelectItem value="6+">6+ months</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={(value) => handleSelectChange("location", value)}>
                <SelectTrigger id="location" className="w-full sm:w-[200px]">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="urban">Urban</SelectItem>
                  <SelectItem value="suburban">Suburban</SelectItem>
                  <SelectItem value="rural">Rural</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full sm:w-[200px]">
              Get Your Video Report
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}