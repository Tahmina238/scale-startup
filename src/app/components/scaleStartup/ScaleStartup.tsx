import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function ScaleStartup() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Hero Section */}
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Hero Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <Image
                src="https://i.ibb.co/fV3Pysfw/Screenshot-2025-06-13-224514.png"
                alt="Smiling woman holding phone and package"
                width={600}
                height={600}
                className="rounded-2xl object-cover w-full"
                priority
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Why ScaleStartups?
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Your Technical Co-Founder for Hyper-Growth: Code, Customers, and
                Scale on Autopilot
              </p>
            </div>

            {/* Feature Sections */}
            <div className="space-y-6">
              {/* Bulletproof Code */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  Bulletproof Code, Zero Downtime
                </h3>
                <p className="text-gray-600">
                  Enterprise-grade software with 99.99% uptime SLA. Launch fast,
                  scale endlessly, and leave technical debt to amateurs
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">
                    Used by 3 startups acquired for $100M+
                  </span>
                </div>
              </div>

              {/* Code + Growth */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  Code + Growth in One Stack
                </h3>
                <p className="text-gray-600">
                  We build your software and fill your pipeline. Embed proven
                  lead gen hacks, AI analytics, and conversion engines
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-gray-700">
                    Guaranteed 500 leads/month or we work free
                  </span>
                </div>
              </div>

              {/* Scale Without Crash */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  Scale Without the Crash
                </h3>
                <p className="text-gray-600">
                  Infrastructure that grows as you do. Pay only for active
                  users—no overprovisioning, no surprise bills
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-gray-700">Slash ops costs by 70%</span>
                </div>
              </div>

              {/* MVP to $100M */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  From MVP to $100M Traction
                </h3>
                <p className="text-gray-600">
                  12 years of scaling secrets from 237+ startups. Your success
                  becomes our next case study.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">
                    Featured in TechCrunch, YC, Forbes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Innovative Design Card */}
          <Card className="bg-gradient-to-br from-purple-100 to-blue-100 border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Innovative Design
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Innovative design focuses on creating new, creative, and
                practical solutions that enhance functionality and appeal,
                setting products apart from the competition.
              </p>
              <button className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors">
                See More
                <ArrowRight className="w-4 h-4" />
              </button>
            </CardContent>
          </Card>

          {/* Advanced Technology Card */}
          <Card className="bg-gradient-to-br from-blue-100 to-purple-100 border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Advanced Technology
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Advanced technology refers to cutting-edge tools and innovations
                that improve efficiency, performance, and user experience in
                products or services.
              </p>
              <button className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors">
                See More
                <ArrowRight className="w-4 h-4" />
              </button>
            </CardContent>
          </Card>

          {/* Exceptional Quality Card */}
          <Card className="bg-gradient-to-br from-purple-100 to-indigo-100 border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Exceptional Quality
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Exceptional quality means products are made to the highest
                standards, offering superior performance, durability, and
                reliability.
              </p>
              <button className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors">
                See More
                <ArrowRight className="w-4 h-4" />
              </button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Button */}
      <div className="container mx-auto px-4 pb-16">
        <div className="text-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg"
          >
            Code + Cash Now
          </Button>
        </div>
      </div>
    </div>
  );
}
