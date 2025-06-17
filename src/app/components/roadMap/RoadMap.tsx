import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function RoadMap() {
  return (
    <div className="h-auto bg-gradient-to-br  from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-400/20 rounded-full blur-lg"></div>
        <div className="absolute bg-gradient-to-br from-orange-400 to-orange-500 p-6  top-30 shadow-2xl rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br  from-orange-400 to-orange-500 p-6 rounded-3xl shadow-2xl">
              <div className="bg-white p-2  rounded-2xl">
                <Image
                  src="https://i.ibb.co/xtKvT8Bn/roadmap.webp"
                  alt="Business team in meeting room with video conference"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Your $1M Roadmap Call
              </h1>

              <p className="text-lg lg:text-xl text-blue-100 leading-relaxed">
                Free 15-Minute {"Profit Explosion"} Session: We&apos;ll Map Your
                12-Month Path to 7 Figures. Leave with:
              </p>
            </div>

            {/* Benefits list */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-lg text-blue-100">
                  3 competitor weaknesses to exploit
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-lg text-blue-100">
                  A proven tech stack blueprint
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-lg text-blue-100">
                  500 guaranteed leads/month strategy
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                🎯 Claim Free Audit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
