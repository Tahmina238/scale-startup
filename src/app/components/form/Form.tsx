"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
    preferredTime: "",
    businessOwner: "",
    revenueGrowth: "",
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <div className="min-h-screen bg-blue-200 p-4 flex items-center justify-center">
      <Card className="w-full bg-blue-50 max-w-4xl">
        <CardHeader className="pb-4">
          <h1 className="text-2xl font-bold text-black">
            Book a FREE Business Consultation
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Please fill out the{" "}
            <span className="text-blue-600">form below</span> to schedule a
            15-minute{" "}
            <span className="text-blue-600">career auditing session</span>.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Mobile Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <div className="space-y-2 ">
                <Label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-900"
                >
                  Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="h-11 border-black"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="mobile"
                  className="text-sm font-medium text-gray-900"
                >
                  Mobile <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={formData.mobile}
                  onChange={(e) =>
                    setFormData({ ...formData, mobile: e.target.value })
                  }
                  className="h-11 border-black"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-900"
              >
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="h-11 border-black"
                required
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label
                htmlFor="message"
                className="text-sm font-medium text-gray-900"
              >
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Write your message here"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="min-h-[100px] resize-none border-black"
              />
            </div>

            {/* Preferred Time */}
            <div className="space-y-2 ">
              <Label className="text-md font-medium text-gray-900">
                What is the best time for a 15-minute career auditing session?{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.preferredTime}
                onValueChange={(value) =>
                  setFormData({ ...formData, preferredTime: value })
                }
                required
              >
                <SelectTrigger className="h-11">
                  <SelectValue placeholder="Select date and time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning-weekday">
                    Morning (9 AM - 12 PM) - Weekdays
                  </SelectItem>
                  <SelectItem value="afternoon-weekday">
                    Afternoon (1 PM - 5 PM) - Weekdays
                  </SelectItem>
                  <SelectItem value="evening-weekday">
                    Evening (6 PM - 8 PM) - Weekdays
                  </SelectItem>
                  <SelectItem value="weekend-morning">
                    Weekend Morning (9 AM - 12 PM)
                  </SelectItem>
                  <SelectItem value="weekend-afternoon">
                    Weekend Afternoon (1 PM - 5 PM)
                  </SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-blue-600 mt-1">
                Select your preferred date and time for the meeting.
              </p>
            </div>

            {/* Radio Button Groups */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label className="text-md font-medium text-gray-900">
                  Are you a business owner?{" "}
                  <span className="text-red-500">*</span>
                </Label>

                <RadioGroup
                  value={formData.businessOwner}
                  onValueChange={(value) =>
                    setFormData({ ...formData, businessOwner: value })
                  }
                  className="space-y-2 border-black"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="business-yes" />
                    <Label
                      htmlFor="business-yes"
                      className="text-md text-black font-normal"
                    >
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="business-no" />
                    <Label
                      htmlFor="business-no"
                      className="text-sm text-black font-normal"
                    >
                      No
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Label className="text-md font-medium text-gray-900">
                  Do you want revenue growth?{" "}
                  <span className="text-red-500">*</span>
                </Label>

                <RadioGroup
                  value={formData.revenueGrowth}
                  onValueChange={(value) =>
                    setFormData({ ...formData, revenueGrowth: value })
                  }
                  className="space-y-2"
                >
                  <div className="flex  items-center space-x-2">
                    <RadioGroupItem value="yes" id="revenue-yes" />
                    <Label
                      htmlFor="revenue-yes"
                      className="text-md text-black font-normal"
                    >
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="revenue-no" />
                    <Label
                      htmlFor="revenue-no"
                      className="text-md text-black font-normal"
                    >
                      No
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 h-10"
              >
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
