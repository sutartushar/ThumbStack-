import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Zap } from "lucide-react"

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-lime-300 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">APURA</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-900 hover:text-gray-700 text-sm font-medium">
              Products
            </Link>
            <Link href="#" className="text-gray-900 hover:text-gray-700 text-sm font-medium">
              Real-time
            </Link>
            <Link href="#" className="text-gray-900 hover:text-gray-700 text-sm font-medium">
              Our mission
            </Link>
            <Link href="#" className="text-gray-900 hover:text-gray-700 text-sm font-medium">
              For devs
            </Link>
            <Link href="#" className="text-gray-900 hover:text-gray-700 text-sm font-medium">
              Contact us
            </Link>
          </nav>
        </div>
      </header>

      {/* Roadmap Content */}
      <main className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Our Road to Creating Data Ownership and Security
            </h1>
          </div>

          {/* Roadmap Stages */}
          <div className="space-y-8">
            {/* Stage 1 - Cloud Infrastructure */}
            <div className="flex items-center justify-between p-8 bg-white border border-gray-200 rounded-2xl">
              <div className="flex items-center space-x-8">
                <div className="text-gray-600 font-medium">Stage 1</div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Cloud infrastructure</h2>
                </div>
              </div>
              <Button variant="outline" className="bg-white hover:bg-gray-50 text-gray-900 border-gray-300">
                Book a demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Stage 2 - Collaboration (Active) */}
            <div className="p-8 bg-lime-300 rounded-2xl">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-8">
                  <div className="text-gray-900 font-medium">Stage 2</div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Collaboration</h2>
                    <Badge variant="secondary" className="bg-gray-900 text-white hover:bg-gray-800">
                      In Pilot
                    </Badge>
                  </div>
                </div>
                <Button className="bg-white hover:bg-gray-50 text-gray-900">
                  Try it
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <p className="text-gray-800 text-sm">EU alternative to Google/Workspace Teams, Meet a.o.</p>
            </div>

            {/* Stage 3 - Communication */}
            <div className="flex items-center justify-between p-8 bg-gray-50 rounded-2xl opacity-60">
              <div className="flex items-center space-x-8">
                <div className="text-gray-400 font-medium">Stage 3</div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-500 mb-2">Communication</h2>
                  <p className="text-gray-500 text-sm max-w-md">
                    Apura IaaS is our service allowing customers to develop applications on our secured data ownership
                    focused platform.
                  </p>
                </div>
              </div>
              <Badge variant="outline" className="bg-transparent border-gray-400 text-gray-500">
                Coming soon
              </Badge>
            </div>

            {/* Divider Line */}
            <div className="w-full h-px bg-gray-200"></div>

            {/* Stage 4 - Connectivity */}
            <div className="flex items-center justify-between p-8 bg-gray-50 rounded-2xl opacity-60">
              <div className="flex items-center space-x-8">
                <div className="text-gray-400 font-medium">Stage 4</div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-500 mb-2">Connectivity</h2>
                  <p className="text-gray-500 text-sm">EU alternative to LinkedIn, Instagram</p>
                </div>
              </div>
              <Badge variant="outline" className="bg-transparent border-gray-400 text-gray-500">
                Coming soon
              </Badge>
            </div>

            {/* Divider Line */}
            <div className="w-full h-px bg-gray-200"></div>

            {/* Stage 5 - Entertainment */}
            <div className="flex items-center justify-between p-8 bg-gray-50 rounded-2xl opacity-60">
              <div className="flex items-center space-x-8">
                <div className="text-gray-400 font-medium">Stage 5</div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-500 mb-2">Entertainment</h2>
                  <p className="text-gray-500 text-sm">EU alternative to Youtube, TikTok</p>
                </div>
              </div>
              <Badge variant="outline" className="bg-transparent border-gray-400 text-gray-500">
                Coming soon
              </Badge>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 px-6 py-12 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-4">APURA</div>
              <p className="text-gray-600 text-sm">European data sovereignty and privacy protection platform.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Products</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Cloud Platform
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Infrastructure
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Security Tools
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    GDPR Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
            <p>&copy; 2024 APURA. All rights reserved. Built for European data sovereignty.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
