import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CoreSolutions() {
  return (
    <div className="h-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Core Solutions
          </h1>
        </div>

        {/* Top Row - Two Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* White-Label Software Card */}
          <Card className="bg-blue-600/30 border-blue-400/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                White-Label Software
              </h2>
              <p className="text-blue-100 text-center mb-8 leading-relaxed">
                Launch Your &apos;Own&apos; Software in 30 Days, 100% Your
                Brand.
                <br />
                Skip the 2-year dev cycle. We build, you brand. Own scalable
                SaaS, CRM,
                <br />
                or Edtech tools instantly
              </p>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-3 justify-center">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-blue-500/40 border-blue-300/50 text-white hover:bg-blue-400/50"
                >
                  Prebuilt Templates
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-blue-500/40 border-blue-300/50 text-white hover:bg-blue-400/50"
                >
                  100% White-Label
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-blue-500/40 border-blue-300/50 text-white hover:bg-blue-400/50"
                >
                  In-House Tech Stack
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-blue-500/40 border-blue-300/50 text-white hover:bg-blue-400/50"
                >
                  Scalable Infrastructure
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-blue-500/40 border-blue-300/50 text-white hover:bg-blue-400/50"
                >
                  Claim Your Template
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Custom Software Development Card */}
          <Card className="bg-blue-600/30 border-blue-400/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                Custom Software Development
              </h2>
              <p className="text-blue-100 text-center mb-8 leading-relaxed">
                From MVP to $10M ARR: Code that Scales as Fast as Your Ambition
                <br />
                Bespoke web/mobile/desktop apps built for startups who refuse to
                <br />
                plateau
              </p>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-3 justify-center">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-blue-500/40 border-blue-300/50 text-white hover:bg-blue-400/50"
                >
                  Ownership Guarantee
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-blue-500/40 border-blue-300/50 text-white hover:bg-blue-400/50"
                >
                  Growth-Ready Architecture
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-blue-500/40 border-blue-300/50 text-white hover:bg-blue-400/50"
                >
                  Speed-to-Market
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-blue-500/40 border-blue-300/50 text-white hover:bg-blue-400/50"
                >
                  Unlimited Support
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-blue-500/40 border-blue-300/50 text-white hover:bg-blue-400/50"
                >
                  Start Building
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Row - Full Width Card */}
        <Card className="bg-blue-600/30 border-blue-400/30 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Business Growth Engine
                </h2>
                <p className="text-blue-100 leading-relaxed">
                  We Code. You Sell. We Fill Your Pipeline — or We Don&apos;t
                  Get Paid Your growth team: Lead gen, conversion funnels, and
                  automation baked into your software
                </p>
              </div>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-blue-500/40 border-blue-300/50 text-white hover:bg-blue-400/50"
                >
                  CRM + Lead Gen
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-blue-500/40 border-blue-300/50 text-white hover:bg-blue-400/50"
                >
                  Conversion Playbooks
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-blue-500/40 border-blue-300/50 text-white hover:bg-blue-400/50"
                >
                  AI-Powered Analytics
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-blue-500/40 border-blue-300/50 text-white hover:bg-blue-400/50"
                >
                  Edtech Automation
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-blue-500/40 border-blue-300/50 text-white hover:bg-blue-400/50"
                >
                  Get Guaranteed Leads
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
