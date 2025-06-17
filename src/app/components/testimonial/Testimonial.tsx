"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  Play,
  Volume2,
  Settings,
  Maximize,
} from "lucide-react";
import Image from "next/image";

export default function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      title: "White label solution for business scaling.mp4",
      thumbnail: "/placeholder.svg?height=400&width=300",
      overlayText: "Hey I was struggling",
      duration: "00:28",
    },
    {
      id: 2,
      title: "How Scale Startup Transformed My Coaching Business.mp4",
      thumbnail: "/placeholder.svg?height=400&width=300",
      overlayText: "into reality",
      duration: "00:44",
    },
    {
      id: 3,
      title: "Tired of Tech Chaos How I 4Xd My Coaching Revenue in 35 Days.mp4",
      thumbnail: "/placeholder.svg?height=400&width=300",
      overlayText: "Hey",
      duration: "00:43",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">
        What Our Clients Have to Say
      </h2>

      <div className="relative">
        <div className="flex overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              width: `${testimonials.length * 100}%`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full px-2 md:w-1/3 flex-shrink-0"
              >
                <div className="relative rounded-lg overflow-hidden border border-gray-200 shadow-md">
                  {/* Video Title Bar */}
                  <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2 z-10 flex justify-between items-center">
                    <span className="text-sm truncate max-w-[90%]">
                      {testimonial.title}
                    </span>
                    <button className="p-1 rounded-full hover:bg-gray-700">
                      <MoreVertical size={16} />
                    </button>
                  </div>

                  {/* Video Thumbnail */}
                  <div className="relative aspect-[9/16] bg-gray-900">
                    <Image
                      src={testimonial.thumbnail || ""}
                      width={30}
                      height={40}
                      alt="Video thumbnail"
                      className="w-full h-full object-cover"
                    />

                    {/* Overlay Text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-white text-4xl font-bold drop-shadow-lg">
                        {testimonial.overlayText}
                      </h3>
                    </div>

                    {/* Video Controls */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
                      <div className="flex items-center gap-2">
                        <button className="text-white p-1 hover:bg-white hover:bg-opacity-20 rounded-full">
                          <Play size={20} fill="white" />
                        </button>

                        <div className="flex-1 h-1 bg-gray-600 rounded-full overflow-hidden">
                          <div className="h-full w-1/3 bg-white rounded-full"></div>
                        </div>

                        <span className="text-white text-xs">
                          {testimonial.duration}
                        </span>

                        <button className="text-white p-1 hover:bg-white hover:bg-opacity-20 rounded-full">
                          <Volume2 size={16} />
                        </button>

                        <button className="text-white p-1 hover:bg-white hover:bg-opacity-20 rounded-full">
                          <Settings size={16} />
                        </button>

                        <button className="text-white p-1 hover:bg-white hover:bg-opacity-20 rounded-full">
                          <Maximize size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
