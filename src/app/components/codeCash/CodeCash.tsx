import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CodeCash() {
  return (
    <div className="relative h-auto py-20  bg-gray-50 overflow-hidden">
      {/* Pink curved background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full transform translate-x-32 -translate-y-32 opacity-90"></div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left column - Text content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Code + Cash Acceleration
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              We Fund Your Dev Costs — Pay 0 Until You Hit Production
              Founder-friendly terms. No licenses. No equity grabs. Just a
              signed NDA and your napkin sketch
            </p>

            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-base font-medium"
              size="lg"
            >
              ⚡ Start Risk-Free
            </Button>
          </div>

          {/* Right column - Laptop image */}
          <div className="relative">
            <div className="relative rounded z-10">
              <Image
                src="https://i.ibb.co/CK5gxqMs/code3.webp"
                alt="Laptop showing Online Register interface"
                width={600}
                height={400}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
