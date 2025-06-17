import { Rocket, Gauge, MessageSquare, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StartupLanding() {
  return (
    <div className="container text-black bg-lime-50 mx-auto px-20 py-16 max-w-full">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        We Fuel Startup Hyper-Growth
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* 100% Owned Code Card */}
        <div className="rounded-lg p-6 bg-pink-200">
          <div className="bg-pink-500 w-6 h-12 rounded-full flex items-center justify-center mb-4">
            <Rocket className="h-6 w-6 " />
          </div>
          <h3 className="text-xl font-bold mb-2">100% Owned Code</h3>
          <p className="mb-4">
            Launch Your Software Empire — No Royalties, No Licensing, Just
            Profit.&quot; White-label software built for YOUR brand. Own 100% of
            the IP, codebase, and revenue. No hidden fees or &quot;Powered
            By&quot; footers
          </p>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-pink-500 rounded-sm flex items-center justify-center mr-2">
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="text-sm">Only 10 slots left for Q4</span>
          </div>
        </div>

        {/* Growth-Backed Guarantee Card */}
        <div className="rounded-lg p-6 bg-cyan-100">
          <div className="bg-cyan-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <Gauge className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2">Growth-Backed Guarantee</h3>
          <p className="mb-4">
            Scale to $1M ARR or We Work for Free.&quot; We don&apos;t just code
            — we embed proven growth hacks into your tech. Fail to scale? Get a
            100% refund + free crisis sprints
          </p>
          <div className="flex items-center">
            <div className="text-rose-500 mr-2">📌</div>
            <span className="text-sm">
              Guarantee applies to first 50 clients
            </span>
          </div>
        </div>

        {/* Daily Innovation Injection Card */}
        <div className="rounded-lg p-6 bg-purple-200">
          <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <MessageSquare className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2">Daily Innovation Injection</h3>
          <p className="mb-4">
            New Features, Zero Effort — Your Software Evolves While You
            Sleep.&quot; AI-driven updates, security patches, and prebuilt
            integrations auto- pushed to your platform. Stay cutting-edge
            without lifting a finger
          </p>
          <div className="flex items-center">
            <div className="text-purple-700 mr-2">🚀</div>
            <span className="text-sm">Latest AI modules added today</span>
          </div>
        </div>

        {/* Code in 30 Days Card */}
        <div className="rounded-lg p-6 bg-emerald-100">
          <div className="bg-emerald-400 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <Car className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2">
            Code in 30 Days, Not 30 Months
          </h3>
          <p className="mb-4">
            ZERO Upfront Pay, Only When You Hit the Road&quot; Launch MVP-ready
            web/apps in 1 week. We front the dev cost — you pay after scaling.
            Founder-friendly, not VC-controlled
          </p>
          <div className="flex items-center">
            <div className="text-emerald-500 mr-2">💠</div>
            <span className="text-sm">Limited to 20 startups</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-md text-lg font-medium">
          Crush Competitors Now
        </Button>
      </div>
    </div>
  );
}
