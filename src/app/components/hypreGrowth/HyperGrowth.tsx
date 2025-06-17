import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Users, Zap } from "lucide-react";
import Image from "next/image";

export default function HyperGrowth() {
  return (
    <div className="h-auto bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Decorative geometric shape in top right */}
      <div className="absolute top-8 right-8 w-24 h-24 opacity-30">
        <div className="w-full h-full bg-blue-400 rounded-full relative">
          <div className="absolute inset-2 bg-blue-300 rounded-full">
            <div className="absolute inset-2 bg-blue-200 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <div className="space-y-8">
            <Badge
              variant="secondary"
              className="bg-yellow-400 text-black hover:bg-yellow-500 font-medium px-4 py-2"
            >
              Professional Solution
            </Badge>

            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                ScaleStartups&apos; Hyper-Growth Arsenal
              </h1>

              <p className="text-lg text-blue-100 leading-relaxed max-w-lg">
                Embed VC-Grade Financial Firepower — Auto-Sync Payments, Equity
                Rounds, and Revenue in Real Time
              </p>
            </div>

            {/* Team image */}
            <div className="relative">
              <div className="w-110 h-64 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="w-full h-full bg-gradient-to-br from-orange-200 via-blue-100 to-green-100 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <Users className="w-16 h-16 mx-auto mb-2 opacity-50" />
                    <Image
                      src="https://i.ibb.co/Z6tc0yVt/hypergrowth.webp"
                      className="img-fluid rounded-top"
                      fill
                      alt="hypergrowth"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side feature cards */}
          <div className="space-y-6">
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      Scale Engineering Squad
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Your In-House Tech Team Without the $2M Burn Rate. We
                      code, you own 100%. 24/7 crisis support + growth hacks
                      baked into your stack. Launch 3X faster, scale without
                      panic.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      Telematics Power Modules
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Out-Innovate Giants with Pre-Built AI Chat, CRM &
                      Analytics. Plug our battle-tested modules into your app.
                      Launch enterprise features in 48 hours — no dev cycles, no
                      equity loss
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Code className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      Equity-Free Code Vault
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Own Your Empire — Zero Royalties, Forever. 100% owned
                      SaaS/CRM platforms. We build, you scale. Pay 0 until you
                      hit 1M ARR
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
