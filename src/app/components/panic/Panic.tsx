"use client";

import { useState } from "react";
import { Plus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Panic() {
  const [expandedItem, setExpandedItem] = useState(1);

  const faqItems = [
    {
      id: 1,
      question: "Can You Build My Vision in 7 Days or Just Talk?",
      answer:
        "We Launch MVPs in 7 Days Using Pre-Built AI/Telematics Modules — You Own 100% of the Code. No Royalties, Ever.",
    },
    {
      id: 2,
      question: "How Do I Skip the BS and Get a $1M Roadmap?",
      answer: "",
    },
    {
      id: 3,
      question: "Will You Abandon Me After Launch Like Others?",
      answer: "",
    },
    {
      id: 4,
      question: "What's Your Secret Sauce to Crush Competitors?",
      answer: "",
    },
    {
      id: 5,
      question: "Can You Beat My Nightmare Dev Timeline?",
      answer: "",
    },
  ];

  const benefits = [
    "Your Scaling SWAT Team On Speed Dial:",
    "Server crashes, feature fails, scaling meltdowns — solved before your coffee cools",
    "Instant access to growth hacks, pivot strategies, and investor-ready metrics",
    "2X user growth in 90 days or we rebuild your stack for free. the way.",
  ];

  return (
    <div className=" h-auto  bg-gray-50 p-6">
      <div className="max-w-8xl ml-40 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - FAQ */}
          <div className="space-y-4">
            {faqItems.map((item) => (
              <div
                key={item.id}
                className={`rounded-lg transition-all duration-300 ${
                  expandedItem === item.id
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-900 hover:bg-gray-50"
                }`}
              >
                <button
                  onClick={() =>
                    setExpandedItem(expandedItem === item.id ? 0 : item.id)
                  }
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-lg font-bold min-w-[3rem]">
                      {item.id.toString().padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold leading-tight">
                        {item.question}
                      </h3>
                      {expandedItem === item.id && item.answer && (
                        <p className="mt-3 text-sm opacity-90 leading-relaxed">
                          {item.answer}
                        </p>
                      )}
                    </div>
                  </div>
                  <Plus
                    className={`w-6 h-6 transition-transform duration-300 ${
                      expandedItem === item.id ? "rotate-45" : ""
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>

          {/* Right side - Profile and benefits */}
          <div className="space-y-8">
            {/* Profile image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-42 h-42 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 p-1">
                  <div className="w-full h-full  rounded-full bg-white p-1">
                    <Image
                      src="https://i.ibb.co/JWN4dL7k/female.webp"
                      alt="Profile"
                      width={120}
                      height={120}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Heading */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Code Red? Scaling Panic?
                <br />
                We&apos;ve Got Your Back
              </h1>
            </div>

            {/* Benefits list */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold"
              >
                Claim the Vault
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
