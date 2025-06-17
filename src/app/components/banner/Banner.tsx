import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Zap, Crown } from "lucide-react";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="h-full text-black bg-[#d0c9c9] overflow-hidden relative">
      <div className="container mx-auto px-4 py-6 md:py-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Image collage */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px]">
              {/* Blue circle with main image */}
              <div className="absolute top-0 left-0 w-[150px] h-[200px] rounded-full border-4 border-blue-500 overflow-hidden">
                <Image
                  src="https://i.ibb.co/KzQwCBst/Screenshot-2025-06-13-222540.png"
                  alt="E-commerce concept"
                  width={750}
                  height={850}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Red circle with e-commerce image */}
              <div className="absolute top-[100px] left-[100px] w-[250px] h-[350px] rounded-full border-4 border-red-500 overflow-hidden">
                <Image
                  src="https://i.ibb.co/FC3KKhf/pic2.webp"
                  alt="E-commerce concept"
                  width={750}
                  height={800}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Bottom left small circle */}
              <div className="absolute bottom-0 left-[10px]  w-[150px] h-[200px]  rounded-full border-4 border-blue-500 overflow-hidden">
                <Image
                  src="https://i.ibb.co/Kjs0RZBp/pic4.webp"
                  alt="E-commerce concept"
                  width={350}
                  height={350}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Bottom right small circle */}
              <div className="absolute bottom-0 right-[270px]  w-[150px] h-[200px]  rounded-full border-4 border-blue-500 overflow-hidden">
                <Image
                  src="https://i.ibb.co/DDyQvrzY/pic3.webp"
                  alt="E-commerce concept"
                  width={900}
                  height={350}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Blue badge with arrow */}
              <div className="absolute top-[50px] right-0 w-[120px] h-[120px] rounded-full bg-blue-500 flex items-center justify-center text-white">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-white animate-spin-slow"></div>
                  <div className="text-2xl">→</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <Badge
              variant="outline"
              className="bg-amber-100 text-amber-800 hover:bg-amber-100 border-amber-200 px-4 py-1 rounded-full text-sm font-medium"
            >
              About Company
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              From Struggling Business
              <br />
              to $10M+ Revenue
            </h1>

            <p className=" text-lg">
              ScaleStartups isn&apos;t just a vendor – we&apos;re your growth
              engineering team. While others build stores, we architect revenue
              machines. For 60 years, we&apos;ve helped enterprises and scrappy
              startups:
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <span>8.7X average revenue growth in 6 months</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <span>Slash cart abandonment by 67% with battle-tested UX</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <span>
                  Cut operational chaos with AI-driven order & inventory systems
                </span>
              </div>
            </div>

            <div className="pt-6 space-y-8">
              <div className="flex gap-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl  font-bold">
                    The 20-Second Support Lifeline
                  </h3>
                  <p>
                    Your emergency is our priority. Get code fixes, strategy
                    pivots, or crisis management from our 20+ experts in under
                    20 seconds
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Crown className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl text-black font-bold">
                    Your &apos;Unfair&apos; Growth Advantage
                  </h3>
                  <p className="text-black">
                    We don&apos;t just code – we embed our 12 years of scaling
                    secrets into your tech stack. Steal playbooks from $100M+
                    brands.
                  </p>
                </div>
              </div>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 h-auto rounded-md mt-4">
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                  fill="currentColor"
                />
              </svg>
              Steal Our Codebase
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative blue blob */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-300 rounded-full filter blur-3xl opacity-50 -z-10"></div>
    </div>
  );
}
