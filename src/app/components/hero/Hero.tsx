import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <main className=" bg-blue-600 text-white">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div className="inline-block"></div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Your Trusted Partner
                <br />
                for Startup Growth
                <br />
                Solutions
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed max-w-lg">
                We offer custom software development, white-labn rapid,
                sustainable growth.{" "}
              </p>
            </div>

            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                Scale 10X Faster
              </div>
            </Button>
          </div>

          <div className="relative mx-auto max-w-md">
            <div className=" w-full rounded-lg overflow-hidden ">
              <iframe
                src="https://player.vimeo.com/video/1065695538?h=2a872c4ae3&autoplay=1"
                allow="autoplay; fullscreen; picture-in-picture"
                className="w-full h-full"
                style={{ aspectRatio: "9/16" }}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Chat Widget */}
        <div className="fixed bottom-6 right-6 z-20">
          <Button
            size="lg"
            className="w-14 h-14 rounded-full bg-orange-500 hover:bg-orange-600 text-white shadow-lg"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </main>
  );
}
