import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ApuraLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-lime-300 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">APURA</div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-900 hover:text-gray-700 text-sm font-medium">
              Products
            </Link>
            <Link href="#" className="text-gray-900 hover:text-gray-700 text-sm font-medium">
              Real-time
            </Link>
            <Link href="/roadmap" className="text-gray-900 hover:text-gray-700 text-sm font-medium">
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

      {/* Hero Section */}
      <section className="bg-lime-300 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            By Europeans, for Europeans
          </h1>
          <p className="text-lg text-gray-800 mb-16 max-w-2xl mx-auto">
            Privacy and security that europeans need, demand and expect. Without giving other nations control over our
            data.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20">
            <div className="text-left">
              <h3 className="font-semibold text-gray-900 mb-2">No interference</h3>
              <p className="text-sm text-gray-700">No third-party interference</p>
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-gray-900 mb-2">1st cloud platform</h3>
              <p className="text-sm text-gray-700">To allow data control and sovereignty</p>
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-gray-900 mb-2">1st cloud infrastructure</h3>
              <p className="text-sm text-gray-700">To provide transparency over your data sharing</p>
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-gray-900 mb-2">Dynamic infrastructure</h3>
              <p className="text-sm text-gray-700">Cloud, hybrid, or on-prem from day one</p>
            </div>
          </div>
        </div>
      </section>

      {/* Email Signup Section */}
      <section className="bg-white px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <h2 className="text-2xl font-semibold text-gray-900">Join the future of data sovereignty</h2>
            <div className="flex gap-4 w-full md:w-auto">
              <Input type="email" placeholder="Enter your email" className="flex-1 md:w-80" />
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8">Join</Button>
            </div>
          </div>
          <div className="w-full h-px bg-gray-200 mt-12"></div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Our products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Apura IaaS Card */}
            <div className="bg-lime-300 rounded-2xl p-8 relative">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Run safely.</h3>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Apura IaaS.</h4>
              <p className="text-gray-800 text-sm mb-8 leading-relaxed">
                Apura IaaS is our service allowing customers to develop applications on our secured data ownership
                focused platform.
              </p>
              <div className="space-y-3">
                <Button variant="outline" className="w-full bg-white hover:bg-gray-50 text-gray-900 border-gray-300">
                  Read more →
                </Button>
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">Book a demo</Button>
              </div>
            </div>

            {/* Apura Workspace Card */}
            <div className="bg-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Work privately.</h3>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Apura Workspace.</h4>
              <p className="text-gray-700 text-sm mb-8 leading-relaxed">
                Apura Workspace is our alternative for Google workspace or Microsoft Teams. Giving the tools to
                effectively communicate with your organization without compromising on security and privacy.
              </p>
              <Button variant="outline" className="w-full bg-white hover:bg-gray-50 text-gray-900 border-gray-400">
                Read more →
              </Button>
            </div>

            {/* Apura Socials Card */}
            <div className="bg-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Share confidently.</h3>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Apura Socials.</h4>
              <p className="text-gray-700 text-sm mb-8 leading-relaxed">
                Is our introduction of social media applications that are essential to us these days.
              </p>
              <Button variant="outline" className="w-full bg-white hover:bg-gray-50 text-gray-900 border-gray-400">
                Read more →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section with Map */}
      <section className="bg-gray-900 px-6 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lime-300 text-sm font-medium mb-4">About us</p>
              <h2 className="text-4xl md:text-5xl font-bold text-lime-300 mb-8 leading-tight">
                By Europeans,
                <br />
                for Europeans
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-12">
                Our vision is to empower governments, organizations and individuals with control and independence in the
                online realm.
              </p>
              <Button
                variant="outline"
                className="bg-transparent border-lime-300 text-lime-300 hover:bg-lime-300 hover:text-gray-900"
              >
                Read more about us →
              </Button>
            </div>
            <div className="relative">
              {/* Europe Map with Stars in Circle */}
              <div className="relative w-full h-96 flex items-center justify-center">
                <svg viewBox="0 0 400 300" className="w-full h-full opacity-30">
                  {/* Simplified Europe outline */}
                  <path
                    d="M50 150 Q80 120 120 130 Q160 125 200 140 Q240 135 280 150 Q320 160 350 180 Q340 200 320 220 Q280 240 240 235 Q200 230 160 225 Q120 220 80 210 Q60 190 50 150"
                    fill="#374151"
                    stroke="#4B5563"
                    strokeWidth="1"
                  />
                </svg>
                {/* Stars arranged in a circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    {/* 12 stars arranged in a circle */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                      <div className="w-4 h-4 text-white">★</div>
                    </div>
                    <div className="absolute top-4 right-4 transform translate-x-1 -translate-y-1">
                      <div className="w-4 h-4 text-white">★</div>
                    </div>
                    <div className="absolute top-1/2 right-0 transform translate-x-2 -translate-y-1/2">
                      <div className="w-4 h-4 text-white">★</div>
                    </div>
                    <div className="absolute bottom-4 right-4 transform translate-x-1 translate-y-1">
                      <div className="w-4 h-4 text-white">★</div>
                    </div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
                      <div className="w-4 h-4 text-white">★</div>
                    </div>
                    <div className="absolute bottom-4 left-4 transform -translate-x-1 translate-y-1">
                      <div className="w-4 h-4 text-white">★</div>
                    </div>
                    <div className="absolute top-1/2 left-0 transform -translate-x-2 -translate-y-1/2">
                      <div className="w-4 h-4 text-white">★</div>
                    </div>
                    <div className="absolute top-4 left-4 transform -translate-x-1 -translate-y-1">
                      <div className="w-4 h-4 text-white">★</div>
                    </div>
                    <div className="absolute top-8 right-8 transform translate-x-0.5 -translate-y-0.5">
                      <div className="w-4 h-4 text-white">★</div>
                    </div>
                    <div className="absolute bottom-8 right-8 transform translate-x-0.5 translate-y-0.5">
                      <div className="w-4 h-4 text-white">★</div>
                    </div>
                    <div className="absolute bottom-8 left-8 transform -translate-x-0.5 translate-y-0.5">
                      <div className="w-4 h-4 text-white">★</div>
                    </div>
                    <div className="absolute top-8 left-8 transform -translate-x-0.5 -translate-y-0.5">
                      <div className="w-4 h-4 text-white">★</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Our Road to Creating Data Ownership and Security
            </h2>
          </div>

          {/* Roadmap Stages */}
          <div className="space-y-8">
            {/* Stage 1 - Cloud Infrastructure */}
            <div className="flex items-center justify-between p-8 bg-white border border-gray-200 rounded-2xl">
              <div className="flex items-center space-x-8">
                <div className="text-gray-600 font-medium">Stage 1</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Cloud infrastructure</h3>
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Collaboration</h3>
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
                  <h3 className="text-2xl font-bold text-gray-500 mb-2">Communication</h3>
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
                  <h3 className="text-2xl font-bold text-gray-500 mb-2">Connectivity</h3>
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
                  <h3 className="text-2xl font-bold text-gray-500 mb-2">Entertainment</h3>
                  <p className="text-gray-500 text-sm">EU alternative to Youtube, TikTok</p>
                </div>
              </div>
              <Badge variant="outline" className="bg-transparent border-gray-400 text-gray-500">
                Coming soon
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* New Footer */}
      <footer>
        {/* Support Section */}
        <section className="bg-gray-100 px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Become a supporter and help us on our Journey</h2>
            <Button variant="outline" className="bg-white hover:bg-gray-50 text-gray-900 border-gray-300">
              Read more about how to →
            </Button>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-lime-300 px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscribe to our Newsletter</h2>
                <p className="text-gray-800">
                  If you want to follow our progress on developing what Europeans want and need, done by Europeans.
                </p>
              </div>
              <div className="flex gap-4">
                <Input type="email" placeholder="Enter your email" className="flex-1 bg-white border-gray-300" />
                <Button className="bg-white hover:bg-gray-50 text-gray-900 whitespace-nowrap">
                  Subscribe to our newsletter
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Footer */}
        <section className="bg-gray-900 text-white px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-xl font-bold mb-8">APURA CLOUD</div>
                  <div>
                    <h3 className="font-semibold mb-4 text-gray-300">Products</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>
                        <Link href="#" className="hover:text-white transition-colors">
                          Apura IaaS
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:text-white transition-colors">
                          Apura Workspace
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:text-white transition-colors">
                          Apura Socials
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4 text-gray-300">Roadmap</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>
                      <Link href="#" className="hover:text-white transition-colors">
                        Stage 1
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-white transition-colors">
                        Stage 2
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-white transition-colors">
                        Stage 3
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-white transition-colors">
                        Stage 4
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-white transition-colors">
                        Stage 5
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-4 text-gray-300">Company</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>
                      <Link href="#" className="hover:text-white transition-colors">
                        Help us on our journey
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-white transition-colors">
                        Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-white transition-colors">
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Stars Circle */}
              <div className="flex items-center justify-center">
                <div className="relative w-48 h-48">
                  {/* 12 stars arranged in a circle */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                    <div className="w-4 h-4 text-white">★</div>
                  </div>
                  <div className="absolute top-4 right-4 transform translate-x-1 -translate-y-1">
                    <div className="w-4 h-4 text-white">★</div>
                  </div>
                  <div className="absolute top-1/2 right-0 transform translate-x-2 -translate-y-1/2">
                    <div className="w-4 h-4 text-white">★</div>
                  </div>
                  <div className="absolute bottom-4 right-4 transform translate-x-1 translate-y-1">
                    <div className="w-4 h-4 text-white">★</div>
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
                    <div className="w-4 h-4 text-white">★</div>
                  </div>
                  <div className="absolute bottom-4 left-4 transform -translate-x-1 translate-y-1">
                    <div className="w-4 h-4 text-white">★</div>
                  </div>
                  <div className="absolute top-1/2 left-0 transform -translate-x-2 -translate-y-1/2">
                    <div className="w-4 h-4 text-white">★</div>
                  </div>
                  <div className="absolute top-4 left-4 transform -translate-x-1 -translate-y-1">
                    <div className="w-4 h-4 text-white">★</div>
                  </div>
                  <div className="absolute top-8 right-8 transform translate-x-0.5 -translate-y-0.5">
                    <div className="w-4 h-4 text-white">★</div>
                  </div>
                  <div className="absolute bottom-8 right-8 transform translate-x-0.5 translate-y-0.5">
                    <div className="w-4 h-4 text-white">★</div>
                  </div>
                  <div className="absolute bottom-8 left-8 transform -translate-x-0.5 translate-y-0.5">
                    <div className="w-4 h-4 text-white">★</div>
                  </div>
                  <div className="absolute top-8 left-8 transform -translate-x-0.5 -translate-y-0.5">
                    <div className="w-4 h-4 text-white">★</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-800">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="flex space-x-2">
                  <div className="w-6 h-6 bg-lime-300 rounded-full"></div>
                  <div className="w-6 h-6 bg-lime-300 rounded-full"></div>
                  <div className="w-6 h-6 bg-lime-300 rounded-full"></div>
                  <div className="w-6 h-6 bg-lime-300 rounded-full"></div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">© 2024 Apura Cloud. All rights reserved.</p>
            </div>
          </div>
        </section>
      </footer>
    </div>
  )
}
