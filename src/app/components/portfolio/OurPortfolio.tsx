import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function OurPortfolio() {
  const portfolioItems = [
    {
      title: "Mobile Apps Design",
      category: "Creative Design",
      image: "https://i.ibb.co/9mN2kL1k/Mobile.webp",
    },
    {
      title: "Landing Page",
      category: "Creative Design",
      image: "https://i.ibb.co/mFMxNPVP/iPadPro.webp",
      //   image: "/placeholder.svg?height=200&width=280",
    },
    {
      title: "Company Dashboard",
      category: "Creative Design",
      image: "https://i.ibb.co/Mk7f1PSd/iPad.webp",
    },
    {
      title: "VocalizePro Website",
      category: "Website Design",
      image: "https://i.ibb.co/1JRYkDDZ/iMac2.webp",
    },
    {
      title: "Bootcamp Website Design",
      category: "Creative Design",
      image: "https://i.ibb.co/99XFHH9X/Studio.webp",
    },
    {
      title: "E-commerce Landing Page",
      category: "Creative Design",
      image: "https://i.ibb.co/27PNhz6Y/iMac.webp",
    },
    {
      title: "Illustration Design",
      category: "Creative Design",
      image: "https://i.ibb.co/nqk58Tt0/Hand.webp",
    },
    {
      title: "Dashboard Design",
      category: "Creative Design",
      image: "https://i.ibb.co/PvLvh3Wb/iPadPro2.webp",
    },
  ];

  const categories = [
    "All",
    "Web App Development",
    "Mobile App Development",
    "Desktop Development",
    "SEO",
    "CloudOps Consultancy",
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute top-32 right-0 w-64 h-64 bg-yellow-200 rounded-full opacity-60 translate-x-32"></div>

      <div className="container mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="mb-12">
          <Badge className="bg-yellow-400 text-black hover:bg-yellow-500 mb-6">
            Our Project
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Discover Our Portfolio
          </h1>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Button
                  key={category}
                  variant={index === 0 ? "default" : "ghost"}
                  className={`${
                    index === 0
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  } rounded-full px-4 py-2 text-sm font-medium`}
                >
                  {category}
                </Button>
              ))}
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">
              See More
            </Button>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-purple-100 rounded-2xl p-6 mb-4 transition-transform group-hover:scale-105">
                <div className="aspect-square flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={300}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-gray-900 text-lg">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
