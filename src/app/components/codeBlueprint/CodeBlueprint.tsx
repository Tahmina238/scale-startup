import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CodeBlueprint() {
  return (
    <div className="h-auto bg-gradient-to-br from-pink-100 via-purple-50 to-blue-50 px-4 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            ScaleStartups Path to Domination
          </h1>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Code Blueprint in 20 Minutes
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Skip the 6-Month Wait — Steal Our Pre-Built Tech Stack & Launch
              Your MVP in 7 Days.* 100% owned codebase. Zero equity. We handle
              servers, AI modules, and crisis scaling — you keep the profits.
            </p>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              🚀 Get Starter Kit
            </Button>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-2 gap-4">
            {/* Workspace Image */}
            <div className="relative">
              <Image
                src="https://i.ibb.co/dJ2HY3BW/codeblue.webp"
                alt="Workspace with laptop, calendar and coffee on wooden desk"
                width={280}
                height={300}
                className="rounded-lg shadow-lg object-cover w-full h-[300px]"
              />
            </div>

            {/* Business Handshake Image */}
            <div className="relative">
              <Image
                src="https://i.ibb.co/7J0qTBnc/codeblue2.webp"
                alt="Two businessmen in suits shaking hands in office"
                width={280}
                height={300}
                className="rounded-lg shadow-lg object-cover w-full h-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
