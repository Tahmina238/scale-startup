import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Rocket,
  Truck,
  DollarSign,
  Headphones,
  Database,
} from "lucide-react";
import Image from "next/image";

export default function ServiceLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white p-6">
      {/* Header */}
      <div className="flex justify-between  items-start mb-8">
        <div className="w-16 h-16 bg-blue-500/30 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-blue-400/50 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
        </div>
        <Button
          variant="secondary"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-6"
        >
          Our Services
        </Button>
      </div>

      {/* Main Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          White-Label Dominance
        </h1>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Launch Your Branded Empire */}
        <Card className="bg-blue-600/40 border-blue-400/30 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="mb-4">
              <Database className="w-8 h-8 text-white mb-4" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              Launch Your Branded Empire
            </h3>
            <p className="text-blue-100 text-sm mb-4">
              Own 100% of enterprise-grade SaaS, CRM, or Edtech platforms — we
              code, you keep the profits
            </p>
            <div className="w-full h-50 bg-gray-800 rounded-lg overflow-hidden">
              <Image
                src="https://i.ibb.co/dwLgbwWC/Screenshot-2025-06-13-222742.png"
                alt="Shopping cart interface"
                width={280}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
          </CardContent>
        </Card>

        {/* Hyper-Grade Custom Dev */}
        <Card className="bg-blue-600/40 border-blue-400/30 backdrop-blur-sm lg:col-start-2 lg:row-start-1">
          <CardContent className="p-6">
            <div className="mb-4">
              <Code className="w-8 h-8 text-white mb-4" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              Hyper-Grade Custom Dev
            </h3>
            <p className="text-blue-100 text-sm mb-4">
              10M ARR Bespoke Digital products for explosive growth, we
              won&apos;t quit until you hit $100K revenue.
            </p>
            <div className="w-full h-50 bg-gray-800 rounded-lg overflow-hidden">
              <Image
                src="https://i.ibb.co/FbjD3C03/s2.webp"
                alt="Laptop coding"
                width={280}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
          </CardContent>
        </Card>

        {/* Startup Growth Engine */}
        <Card className="bg-blue-600/40 border-blue-400/30 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="mb-4">
              <Rocket className="w-8 h-8 text-white mb-4" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              Startup Growth Engine
            </h3>
            <p className="text-blue-100 text-sm mb-4">
              We build your tech AND fill your pipeline. Guaranteed 500
              leads/month or we work free.
            </p>
            <div className="w-full h-50 bg-gray-800 rounded-lg overflow-hidden">
              <Image
                src="https://i.ibb.co/kVwJKc2Z/s3.webp"
                alt="Mobile technology visualization"
                width={280}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
          </CardContent>
        </Card>

        {/* Telematics Powerhouse */}
        <Card className="bg-blue-600/40 border-blue-400/30 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="mb-4">
              <Truck className="w-8 h-8 text-white mb-4" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              Telematics Powerhouse
            </h3>
            <p className="text-blue-100 text-sm mb-4">
              Embed our battle-tested chat, scheduling & analytics modules — no
              6-month dev cycles.
            </p>
            <div className="w-full h-50 bg-gray-800 rounded-lg overflow-hidden">
              <Image
                src="https://i.ibb.co/ZpFdZTbP/s4.webp"
                alt="Person working on laptop"
                width={280}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
          </CardContent>
        </Card>

        {/* Equity-Free Scale Stack */}
        <Card className="bg-blue-600/40 border-blue-400/30 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="mb-4">
              <DollarSign className="w-8 h-8 text-white mb-4" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              Equity-Free Scale Stack
            </h3>
            <p className="text-blue-100 text-sm mb-4">
              Enterprise Infrastructure that grows with you. No licenses, no
              equity grabs, no BS.
            </p>
            <div className="w-full h-50 bg-gray-800 rounded-lg overflow-hidden">
              <Image
                src="https://i.ibb.co/5XhK1c9s/s5.webp"
                alt="E-commerce shopping interface"
                width={280}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
          </CardContent>
        </Card>

        {/* Unlimited Scale Support */}
        <Card className="bg-blue-600/40 border-blue-400/30 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="mb-4">
              <Headphones className="w-8 h-8 text-white mb-4" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              Unlimited Scale Support
            </h3>
            <p className="text-blue-100 text-sm mb-4">
              Code emergencies? Scaling panics? Our 20+ experts fix it in 20
              seconds flat.
            </p>
            <div className="w-full h-50 bg-gray-800 rounded-lg overflow-hidden">
              <Image
                src="https://i.ibb.co/nN3rqrG5/s6.webp"
                alt="Business technology visualization"
                width={280}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom CTA */}
      <div className="text-center">
        <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-full">
          Own 100% Equity
        </Button>
      </div>
    </div>
  );
}
