import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Users, Code, TrendingUp } from "lucide-react";

export default function Dominate() {
  return (
    <div className="relative bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Images */}
          <div className="relative">
            {/* Purple background element */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-purple-200 rounded-full opacity-60"></div>

            {/* Main circular images */}
            <div className="relative">
              {/* Woman at laptop - bottom left */}
              <div className="relative left-37 w-60 h-90  rounded-full border-4 border-orange-500 overflow-hidden">
                <Image
                  src="https://i.ibb.co/wF10ywYd/dominate1.webp"
                  alt="Woman working on laptop"
                  fill
                  className=""
                />
              </div>

              {/* Team meeting - top right, overlapping */}
              <div className="absolute left-20 top-46 w-40 h-60 rounded-full border-4 border-blue-500 overflow-hidden">
                <Image
                  src="https://i.ibb.co/gMTRjhqN/dominate2.webp"
                  alt="Team collaboration"
                  fill
                  className=""
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <Badge
              variant="secondary"
              className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 px-4 py-2 text-sm font-medium"
            >
              Scale. Surge. Dominate.
            </Badge>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                What We Actually Deliver
              </h1>
              <h2 className="text-xl text-gray-700 font-medium">
                Startup-Grade &apos;Unfair Advantages&apos;
              </h2>
            </div>

            {/* Feature list */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <div>
                  <span className="font-semibold text-gray-900">
                    7-Day Launch Protocol
                  </span>
                  <span className="text-gray-700">
                    {" "}
                    &quot;Steal our pre-built AI/telematics modules — launch
                    enterprise-grade apps 3X faster than competitors.&quot;
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <div>
                  <span className="font-semibold text-gray-900">
                    100% IP Ownership
                  </span>
                  <span className="text-gray-700">
                    {" "}
                    &quot;We code, you keep every line. No licenses, no equity
                    grabs, no vendor lock-in.&quot;
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <div>
                  <span className="font-semibold text-gray-900">
                    Code + Customers
                  </span>
                  <span className="text-gray-700">
                    {" "}
                    &quot;We don&apos;t stop at dev. Get 500 pre-qualified leads
                    in your CRM before launch day.&quot;
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <div>
                  <span className="font-semibold text-gray-900">
                    Scale or We Sprint Again
                  </span>
                  <span className="text-gray-700">
                    {" "}
                    &quot;Guaranteed 2X user growth in 90 days — or we rebuild
                    your stack for free.&quot;
                  </span>
                </div>
              </div>
            </div>

            {/* Icons */}
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-gray-600" />
              </div>
            </div>

            {/* CTA Button */}
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium rounded-lg">
              🚀 Unleash Your Tech
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
