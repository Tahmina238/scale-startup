"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";

export default function Component() {
  const testimonials = [
    {
      title: "White label solution for business scaling.mp4",
      overlayText: "clunky",
      videoSrc:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      title: "How Scale Startup Transformed My Coaching Business.mp4",
      overlayText: "into reality",
      videoSrc:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
    {
      title: "Tired of Tech Chaos How I 40d My Coaching Revenue in 35 Days.mp4",
      overlayText: "are you struggling",
      videoSrc:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },
  ];

  return (
    <div className="bg-amber-100 w-full">
      <div className=" container w-full max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          What Our Clients Have to Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative overflow-hidden bg-black rounded-lg"
            >
              {/* Video Header */}
              <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-gray-400"></div>
                  </div>
                  <span className="text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">
                    {testimonial.title}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                >
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>

              {/* Video Content via iframe */}
              <div className="relative aspect-[3/4] bg-gray-50">
                <iframe
                  src={testimonial.videoSrc}
                  className="w-full h-full object-cover"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={testimonial.title}
                ></iframe>

                {/* Overlay Text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-white text-4xl font-bold drop-shadow-lg">
                    {testimonial.overlayText}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
