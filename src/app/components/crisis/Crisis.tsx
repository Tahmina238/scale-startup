import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Crisis() {
  return (
    <div className="bg-blue-700 h-auto flex items-center">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative rounded bottom-39">
              <Image
                src="https://i.ibb.co/CK5gxqMs/code3.webp"
                alt="Online registration and payment system interfaces showing laptop and mobile devices"
                width={400}
                height={200}
                className="rounded-lg shadow-lg"
                priority
              />
            </div>

            <div className="relative top-6 right-40 rounded bottom-58">
              <Image
                src="https://i.ibb.co/v6hkV8vh/crisis2.webp"
                alt="Online registration and payment system interfaces showing laptop and mobile devices"
                width={300}
                height={200}
                className="rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Crisis-to-Cash Engineering
            </h1>

            <p className="text-lg lg:text-xl leading-relaxed opacity-90">
              our Scaling SWAT Team: Code Fixes + Pivot Strategies in 20
              Minutes.* Our 20+ engineers become your 24/7 crisis crew. Server
              crashed? Feature flop? Consider it handled.
            </p>

            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg transition-all duration-200 hover:shadow-xl"
              size="lg"
            >
              🎯 Hire Our Squad
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
