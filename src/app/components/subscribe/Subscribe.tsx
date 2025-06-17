"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Subscribe() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Handle newsletter subscription logic here
  };

  return (
    <div className="w-full h-auto  mx-auto">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 p-8 md:p-12">
        <div className="flex flex-col lg:flex-row items-center pl-22 gap-8 lg:gap-12">
          {/* Left side - Illustration */}
          <div className="flex-shrink-0">
            <div className="relative w-74 h-58 md:w-80 md:h-60">
              <Image
                src="https://i.ibb.co/MYdzJGZ/subscribe.webp"
                alt="Box with home appliances including washing machine, refrigerator, and microwave"
                fill
                className="object-contain "
                priority
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Subscribe to Newsletters
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-8 leading-relaxed">
              Stay updated with the latest trends, exclusive deals, and special
              offers by subscribing to our newsletters. Be the first to <br />
              know about new arrivals and exciting updates!
            </p>

            {/* Email form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/90 backdrop-blur-sm border-0 text-gray-900 placeholder:text-gray-500 h-12 px-4 rounded-lg focus:bg-white transition-colors"
                required
              />
              <Button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold h-12 px-8 rounded-lg transition-colors shadow-lg"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
