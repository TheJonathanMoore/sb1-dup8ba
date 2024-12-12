"use client";

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { StarIcon, PhoneIcon, VideoIcon, ShieldCheckIcon, BrainCircuitIcon, ChevronDownIcon } from "lucide-react"

const faqs = [
  {
    question: "How long does a video inspection typically take?",
    answer: "Our comprehensive video inspections usually take about 30-45 minutes, depending on the size and complexity of your roof."
  },
  {
    question: "Will I receive a copy of the video report?",
    answer: "Yes, absolutely! After the inspection, we'll provide you with a digital copy of your personalized video report, which you can review at your convenience."
  },
  {
    question: "What if the video inspection reveals issues with my roof?",
    answer: "If our inspection uncovers any problems, we'll clearly explain them in the video and provide recommendations for repairs or maintenance. We can then discuss your options and help you make an informed decision."
  },
  {
    question: "How soon can I schedule a video inspection?",
    answer: "We typically can schedule video inspections within 3-5 business days. In urgent situations, we may be able to accommodate faster appointments."
  },
  {
    question: "Is there any obligation to use your services after the video inspection?",
    answer: "Not at all. Our video inspection service is designed to provide you with valuable information about your roof's condition. While we're happy to help with any necessary work, there's no obligation to use our services beyond the inspection."
  }
]

export default function HomePage() {
  const [formData, setFormData] = useState({
    homeSize: "",
    service: "",
    timeline: "",
    location: ""
  })

  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const roofProjects = [
    { image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", size: "Small", sqft: "1,000-1,500 sq ft", cost: "$8,000" },
    { image: "https://images.unsplash.com/photo-1722491945538-3bc843767169?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", size: "Medium", sqft: "1,500-2,500 sq ft", cost: "$12,000" },
    { image: "https://images.unsplash.com/photo-1588557132645-ff567110cafd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", size: "Large", sqft: "2,500-3,500 sq ft", cost: "$18,000" },
  ]

  const educationalVideos = [
    { title: "How to Pick the Right Contractor", src: "/placeholder.mp4" },
    { title: "Your Roofing System", src: "/placeholder.mp4" },
    { title: "Our Proven System", src: "/placeholder.mp4" },
  ]

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center">
          <div className="flex items-center">
            <PhoneIcon className="w-4 h-4 mr-2" />
            <span className="text-sm sm:text-base">Call us today: (801) 123-4567</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-md relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <Image src="https://myroofutah.com/wp-content/themes/myroof-child/img/logo.webp" alt="MyRoof Logo" width={156} height={62} className="h-12 sm:h-[62px] w-auto" />
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Desktop navigation */}
            <nav className="hidden md:flex flex-grow justify-center">
              <ul className="flex space-x-8">
                <li><a href="#" className="text-gray-600 hover:text-primary">Services</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Projects</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Education</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Contact</a></li>
              </ul>
            </nav>

            <div className="hidden md:block">
              <Button variant="outline">Get Your Video Report</Button>
            </div>
          </div>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4">
              <ul className="flex flex-col space-y-4">
                <li><a href="#" className="text-gray-600 hover:text-primary block">Services</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary block">Projects</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary block">Education</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary block">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary block">Contact</a></li>
                <li><Button variant="outline" className="w-full">Get Your Video Report</Button></li>
              </ul>
            </nav>
          )}
        </div>
      </header>

      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-12 mb-32">
        <section className="mb-16 sm:mb-24">
          <div className="flex flex-col md:flex-row items-start justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">See Your Roof Through Expert Eyes</h1>
              <p className="text-lg sm:text-xl mb-8">Experience our unique video inspection service. Get a comprehensive, narrated walkthrough of your roof's condition, empowering you to make informed decisions about your home.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex items-center justify-center">
                  <VideoIcon className="mr-2 h-5 w-5" />
                  Schedule Video Inspection
                </Button>
                <Button size="lg" variant="outline" className="flex items-center justify-center">
                  <BrainCircuitIcon className="mr-2 h-5 w-5" />
                  Learn More
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-4 sm:p-8">
                  <div className="flex items-center mb-6">
                    <Image src="https://lh3.googleusercontent.com/a-/ALV-UjWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX=s40-c-c0x00000000-cc-rp-mo-br100" alt="Alyssa Gibson" width={80} height={80} className="rounded-full mr-4 w-16 h-16 sm:w-20 sm:h-20" />
                    <div>
                      <h3 className="font-semibold text-lg sm:text-xl mb-1">Alyssa Gibson</h3>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-yellow-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                    We had a windstorm that tore off some soffit. Josh came out and did a thorough inspection of the area. <strong>He took videos and explained what needed to be done.</strong> He also explained how we could fix it and didn't push to have them do it. Josh was very professional.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Our Roofing Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {roofProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48 sm:h-64">
                  <Image
                    src={project.image}
                    alt={`${project.size} home`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2">{project.size} Home</h3>
                  <p className="text-lg sm:text-xl mb-2">{project.sqft}</p>
                  <p className="text-xl sm:text-2xl font-bold text-primary">Roof Cost: {project.cost}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Educational Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {educationalVideos.map((video, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-video relative">
                  <video
                    src={video.src}
                    controls
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-4">
                  <h3 className="text-lg sm:text-xl font-semibold">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 sm:mb-20 bg-gray-50 py-8 sm:py-16 rounded-lg">
          <div className="max-w-6xl mx-auto px-4 sm:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">Why Choose MyRoof</h2>
            <p className="text-lg sm:text-xl text-center text-gray-600 mb-8 sm:mb-12">Experience unparalleled transparency with our personalized roof inspection videos.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-primary mb-4">
                  <VideoIcon className="w-10 h-10 sm:w-12 sm:h-12" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Full Video Reports</h3>
                <p className="text-gray-600">We provide a comprehensive video walkthrough of your roof, narrated by our expert technician Josh.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-primary mb-4">
                  <BrainCircuitIcon className="w-10 h-10 sm:w-12 sm:h-12" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Educational Approach</h3>
                <p className="text-gray-600">Our detailed videos turn a complex process into clear, understandable information, empowering you to make informed decisions.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-primary mb-4">
                  <ShieldCheckIcon className="w-10 h-10 sm:w-12 sm:h-12" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Transparency</h3>
                <p className="text-gray-600">See your roof through expert eyes. Our commitment to honesty and customer care is evident in every video report we provide.</p>
              </div>
            </div>
            <div className="mt-8 sm:mt-12 text-center">
              <blockquote className="italic text-base sm:text-lg text-gray-700 mb-4">
                "The video walkthrough was eye-opening! I felt confident in making decisions about my roof."
              </blockquote>
              <p className="font-semibold">- Sarah T., Satisfied Customer</p>
            </div>
            <div className="mt-8 sm:mt-12 text-center">
              <Button size="lg">Request Your Free Video Report</Button>
            </div>
          </div>
        </section>

        <section className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className="flex justify-between items-center w-full p-4 text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-sm sm:text-base">{faq.question}</span>
                  <ChevronDownIcon
                    className={`w-5 h-5 transition-transform ${
                      openFaq === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="p-4 pt-0">
                    <p className="text-gray-600 text-sm sm:text-base">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 sm:mb-20 bg-gray-50 py-8 sm:py-16 rounded-lg">
          <div className="max-w-6xl mx-auto px-4 sm:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Contact Information</h3>
                <p className="mb-2 text-sm sm:text-base"><strong>Phone:</strong> (801) 123-4567</p>
                <p className="mb-2 text-sm sm:text-base"><strong>Email:</strong> info@myroof.com</p>
                <p className="mb-2 text-sm sm:text-base"><strong>Address:</strong> 123 Roofing St, Salt Lake City, UT 84101</p>
                <p className="mb-6 text-sm sm:text-base"><strong>Hours:</strong> Monday-Friday: 8am-6pm, Saturday: 9am-3pm</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-primary hover:text-primary-dark">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-primary hover:text-primary-dark">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-primary hover:text-primary-dark">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Send Us a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"></textarea>
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}