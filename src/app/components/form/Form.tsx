// "use client";

// import type React from "react";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Label } from "@radix-ui/react-menubar";
// import { RadioGroup } from "@radix-ui/react-dropdown-menu";

// export default function Form() {
//   const [formData, setFormData] = useState({
//     name: "",
//     mobile: "",
//     email: "",
//     message: "",
//     preferredTime: "",
//     isBusinessOwner: "",
//     wantRevenueGrowth: "",
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <Card className="border border-gray-200 shadow-sm">
//         <CardHeader className="pb-4">
//           <CardTitle className="text-2xl font-bold text-gray-900">
//             Book a FREE Business Consultation
//           </CardTitle>
//           <p className="text-sm text-gray-600 mt-2">
//             Please fill out the form below to schedule a 15-minute career{" "}
//             <span className="text-blue-600 underline">auditing session</span>
//           </p>
//         </CardHeader>
//         <CardContent className="space-y-6">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Name and Mobile Row */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <Label
//                   htmlFor="name"
//                   className="text-sm font-medium text-gray-900"
//                 >
//                   Name <span className="text-red-500">*</span>
//                 </Label>
//                 <input
//                   id="name"
//                   type="text"
//                   placeholder="Enter your name"
//                   value={formData.name}
//                   onChange={(e) =>
//                     setFormData({ ...formData, name: e.target.value })
//                   }
//                   className="border-gray-300"
//                   required
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label
//                   htmlFor="mobile"
//                   className="text-sm font-medium text-gray-900"
//                 >
//                   Mobile <span className="text-red-500">*</span>
//                 </Label>
//                 <input
//                   id="mobile"
//                   type="tel"
//                   placeholder="Enter your mobile number"
//                   value={formData.mobile}
//                   onChange={(e) =>
//                     setFormData({ ...formData, mobile: e.target.value })
//                   }
//                   className="border-gray-300"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Email */}
//             <div className="space-y-2">
//               <Label
//                 htmlFor="email"
//                 className="text-sm font-medium text-gray-900"
//               >
//                 Email <span className="text-red-500">*</span>
//               </Label>
//               <input
//                 id="email"
//                 type="email"
//                 placeholder="Enter your email address"
//                 value={formData.email}
//                 onChange={(e) =>
//                   setFormData({ ...formData, email: e.target.value })
//                 }
//                 className="border-gray-300"
//                 required
//               />
//             </div>

//             {/* Message */}
//             <div className="space-y-2">
//               <Label
//                 htmlFor="message"
//                 className="text-sm font-medium text-gray-900"
//               >
//                 Message
//               </Label>
//               <textarea
//                 id="message"
//                 placeholder="Write your message here"
//                 value={formData.message}
//                 onChange={(e) =>
//                   setFormData({ ...formData, message: e.target.value })
//                 }
//                 className="border-gray-300 min-h-[100px] resize-none"
//                 rows={4}
//               />
//             </div>

//             {/* Preferred Time */}
//             <div className="space-y-2">
//               <Label
//                 htmlFor="preferredTime"
//                 className="text-sm font-medium text-gray-900"
//               >
//                 What is the best time for a 15-minute career auditing session?{" "}
//                 <span className="text-red-500">*</span>
//               </Label>
//               <div className="relative">
//                 <input
//                   id="preferredTime"
//                   type="datetime-local"
//                   value={formData.preferredTime}
//                   onChange={(e) =>
//                     setFormData({ ...formData, preferredTime: e.target.value })
//                   }
//                   className="border-gray-300"
//                   required
//                 />
//               </div>
//               <p className="text-xs text-gray-500 mt-1">
//                 Select your preferred date and time for the meeting.
//               </p>
//             </div>

//             {/* Radio Button Questions */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Business Owner Question */}
//               <div className="space-y-3">
//                 <Label className="text-sm font-medium text-gray-900">
//                   Are you a business owner?{" "}
//                   <span className="text-red-500">*</span>
//                 </Label>
//                 <RadioGroup
//                   value={formData.isBusinessOwner}
//                   onValueChange={(value) =>
//                     setFormData({ ...formData, isBusinessOwner: value })
//                   }
//                   className="space-y-2"
//                 >
//                   <div className="flex items-center space-x-2">
//                     <RadioGroupItem value="yes" id="business-yes" />
//                     <Label
//                       htmlFor="business-yes"
//                       className="text-sm text-gray-700"
//                     >
//                       Yes
//                     </Label>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <RadioGroupItem value="no" id="business-no" />
//                     <Label
//                       htmlFor="business-no"
//                       className="text-sm text-gray-700"
//                     >
//                       No
//                     </Label>
//                   </div>
//                 </RadioGroup>
//               </div>

//               {/* Revenue Growth Question */}
//               <div className="space-y-3">
//                 <Label className="text-sm font-medium text-gray-900">
//                   Do you want revenue growth?{" "}
//                   <span className="text-red-500">*</span>
//                 </Label>
//                 <RadioGroup
//                   value={formData.wantRevenueGrowth}
//                   onValueChange={(value) =>
//                     setFormData({ ...formData, wantRevenueGrowth: value })
//                   }
//                   className="space-y-2"
//                 >
//                   <div className="flex items-center space-x-2">
//                     <RadioGroupItem value="yes" id="revenue-yes" />
//                     <Label
//                       htmlFor="revenue-yes"
//                       className="text-sm text-gray-700"
//                     >
//                       Yes
//                     </Label>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <RadioGroupItem value="no" id="revenue-no" />
//                     <Label
//                       htmlFor="revenue-no"
//                       className="text-sm text-gray-700"
//                     >
//                       No
//                     </Label>
//                   </div>
//                 </RadioGroup>
//               </div>
//             </div>

//             {/* Submit Button */}
//             <div className="flex justify-center pt-4">
//               <Button
//                 type="submit"
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-md font-medium"
//               >
//                 Submit
//               </Button>
//             </div>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
