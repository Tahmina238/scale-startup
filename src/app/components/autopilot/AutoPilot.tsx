import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Autopilot() {
  return (
    <div className="h-auto py-2 bg-white">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Profit Autopilot Mode
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Get Live Market Intel: AI-Powered Leaks on Competitors Moves, VC
              Trends & Exploitable Gaps.* Weekly playbooks to out-innovate,
              out-price, and out-scale rivals. Your empire grows while you
              sleep.
            </p>

            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-colors duration-200"
              size="lg"
            >
              Steal Our Secrets
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative bg-blue-600 rounded-3xl left-87 h-90 w-60 lg:p-10"></div>

            <div className="absolute rounded-3xl left-30 w-110 h-70 top-8  lg:p-12">
              <Image
                src="https://i.ibb.co/c9gsfQb/autopilot.webp"
                alt="Business professionals analyzing charts and data on a workspace table"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg object-cover w-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
