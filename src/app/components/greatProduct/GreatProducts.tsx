import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Users, Grid3X3, Star } from "lucide-react";

export default function GreatProducts() {
  const stats = [
    { value: "46%", label: "Active Clients", icon: Users },
    { value: "28", label: "Project Done", icon: Grid3X3 },
    { value: "9", label: "Team Advisor", icon: Users },
    { value: "31", label: "Glorious Years", icon: Star },
  ];

  const technologies = [
    { name: "JAVASCRIPT", color: "bg-yellow-500", icon: "🟨" },
    { name: "PYTHON", color: "bg-yellow-500", icon: "🐍" },
    { name: "NODE.JS", color: "bg-green-500", icon: "⬢" },
    { name: "REACT.JS", color: "bg-blue-500", icon: "⚛️" },
    { name: "MONGODB", color: "bg-green-600", icon: "🍃" },
    { name: "REDIS", color: "bg-red-500", icon: "◆" },
    { name: "POSTGRESQL", color: "bg-blue-600", icon: "🐘" },
    { name: "DOCKER", color: "bg-blue-400", icon: "🐳" },
    { name: "AWS", color: "bg-orange-500", icon: "☁️" },
    { name: "JENKINS", color: "bg-blue-500", icon: "🔧" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white p-8">
      {/* Stats Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="flex flex-col items-center">
                <IconComponent className="w-8 h-8 mb-2 opacity-80" />
                <div className="text-3xl md:text-4xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        {/* Left Side - Logo and Image */}
        <div className="space-y-8">
          {/* Logo */}
          <div className="w-20 h-20 bg-blue-500/30 rounded-full flex items-center justify-center">
            <div className="w-12 h-12 bg-blue-400/50 rounded-full flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Badge and Title */}
          <div className="space-y-2 text-center max-auto">
            <Badge
              variant="secondary"
              className="bg-yellow-500 text-black hover:bg-yellow-400"
            >
              Tech Stack
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Technology We Use to Build
              <br />
              Great Products
            </h1>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Team Image */}
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="https://i.ibb.co/b5gnpyzP/Screenshot-2025-06-14-123629.png"
                alt="Team meeting with four professionals discussing around a laptop"
                width={500}
                height={350}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Right Side - Technology Stack */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-blue-600/40 backdrop-blur-sm border border-blue-400/20 rounded-full px-4 py-3 text-center hover:bg-blue-500/40 transition-colors"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-lg">{tech.icon}</span>
                      <span className="text-sm font-semibold">{tech.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
