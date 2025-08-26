import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Brain, BrainCircuit, BrainCog, BotMessageSquare, 
  FolderOpenDot, ShoppingBag, Sparkles, IdCard,
  Book, Database, HandPlatter, Eclipse, Airplay,
  School, Users, Package, Hospital, Building2,
  Smartphone, Wrench, Bus, Activity,
  Utensils, Truck, Car, ClipboardList,
  HeartPulse, GraduationCap, BarChart3, CreditCard
} from "lucide-react";
import Link from "next/link";

const leftMenuItems = [
  { id: "AI", title: "AI", icon: <Brain strokeWidth={1} /> },
  { id: "No-code", title: "No-code Website", icon: <FolderOpenDot strokeWidth={1} /> },
  { id: "Ecommerce3", title: "Learning Management System", icon: <Book strokeWidth={1} /> },
  { id: "POS", title: "POS", icon: <Database strokeWidth={1} /> },
  { id: "Ecommerce4", title: "CRM & ERP", icon: <School strokeWidth={1} /> },
  { id: "Mobile", title: "Mobile Apps", icon: <Smartphone strokeWidth={1} /> },
  { id: "Food", title: "Food", icon: <Utensils strokeWidth={1} /> },
  { id: "Logistics", title: "Logistics", icon: <Truck strokeWidth={1} /> },
  { id: "Health", title: "HealthCare", icon: <HeartPulse strokeWidth={1} /> },
  { id: "Education", title: "Education", icon: <GraduationCap strokeWidth={1} /> },
];

const rightContent = {
  AI: [
    { icon: <BrainCircuit className="h-10 w-10" strokeWidth={1} />, title: "AI Chatbot", desc: "Conversational AI assistant", link: "/" },
    { icon: <BotMessageSquare className="h-10 w-10" strokeWidth={1} />, title: "All in one AI tool", desc: "Complete AI solution suite", link: "/" },
    { icon: <BrainCog className="h-10 w-10" strokeWidth={1} />, title: "AI Automation", desc: "Automate workflows with AI", link: "/" },
  ],

  "No-code": [
    { icon: <ShoppingBag className="h-10 w-10" strokeWidth={1} />, title: "E-Commerce Store", desc: "Online store builder", link: "/shopping" },
    { icon: <Sparkles className="h-10 w-10" strokeWidth={1} />, title: "Pixel Profile", desc: "Website in minutes", link: "/pixel-profile" },
    { icon: <IdCard className="h-10 w-10" strokeWidth={1} />, title: "Simplytap App", desc: "All-in-one platform", link: "/Simplytap" },
  ],

  Ecommerce3: [
    { icon: <Book className="h-10 w-10" strokeWidth={1} />, title: "LMS Portal", desc: "Learning management app", link: "/LMS-portal" },
  ],

  POS: [
    { icon: <HandPlatter className="h-10 w-10" strokeWidth={1} />, title: "Restaurant POS", desc: "Restaurant billing system", link: "/restaurant-POS" },
    { icon: <ClipboardList className="h-10 w-10"strokeWidth={1} />, title: "Asset Management", desc: "Track business assets", link: "/" },
    { icon: <Eclipse className="h-10 w-10" strokeWidth={1} />, title: "eCommerce POS", desc: "POS for online store", link: "/" },
    { icon: <Airplay className="h-10 w-10" strokeWidth={1} />, title: "Analytics App", desc: "Web analytics dashboard", link: "/analytics" },
  ],

  Ecommerce4: [
    { icon: <Users className="h-10 w-10" strokeWidth={1} />, title: "People Hub", desc: "HR & people management", link: "/" },
    { icon: <School className="h-10 w-10" strokeWidth={1} />, title: "School Management System", desc: "Manage school digitally", link: "/" },
    { icon: <Hospital className="h-10 w-10" strokeWidth={1} />, title: "Hospital Management", desc: "Hospital workflow system", link: "/" },
    { icon: <Building2 className="h-10 w-10" strokeWidth={1} />, title: "Clinic Management", desc: "Clinic operations app", link: "/" },
  ],

  Mobile: [
    { icon: <Users className="h-10 w-10" strokeWidth={1} />, title: "HRMS", desc: "Mobile HR app", link: "/" },
    { icon: <Building2 className="h-10 w-10" strokeWidth={1} />, title: "Clinic Management", desc: "Mobile clinic app", link: "/" },
    { icon: <Wrench className="h-10 w-10" strokeWidth={1} />, title: "Service Delivery", desc: "On-demand service app", link: "/" },
    { icon: <Bus className="h-10 w-10" strokeWidth={1} />, title: "School Bus Tracking", desc: "Real-time bus tracking", link: "/" },
    { icon: <Smartphone className="h-10 w-10" strokeWidth={1} />, title: "Service Provider Apps", desc: "Apps for providers", link: "/" },
  ],

  Food: [
    { icon: <HandPlatter className="h-10 w-10" strokeWidth={1} />, title: "Restaurant POS", desc: "POS for restaurants", link: "/restaurant-POS" },
    { icon: <Utensils className="h-10 w-10" strokeWidth={1} />, title: "Restaurant Delivery App", desc: "Food delivery app", link: "/" },
  ],

  Logistics: [
    { icon: <Truck className="h-10 w-10" strokeWidth={1} />, title: "Truck Bidding System", desc: "Freight bidding system", link: "/" },
    { icon: <Package className="h-10 w-10" strokeWidth={1} />, title: "Parcel Delivery App", desc: "Parcel tracking app", link: "/" },
    { icon: <Bus className="h-10 w-10" strokeWidth={1} />, title: "School Bus Tracking", desc: "Student safety tracking", link: "/" },
    { icon: <Car className="h-10 w-10" strokeWidth={1} />, title: "Cab Booking", desc: "Ride booking app", link: "/" },
    { icon: <Smartphone className="h-10 w-10" strokeWidth={1} />, title: "Service Provider Apps", desc: "On-demand logistics apps", link: "/" },
  ],

  Health: [
    { icon: <Building2 className="h-10 w-10" strokeWidth={1} />, title: "Clinic Management", desc: "Clinic management app", link: "/" },
    { icon: <Hospital className="h-10 w-10" strokeWidth={1} />, title: "Hospital Management", desc: "Hospital system app", link: "/" },
  ],

  Education: [
    { icon: <School className="h-10 w-10" strokeWidth={1} />, title: "School Management System", desc: "Digital school system", link: "/" },
    { icon: <ClipboardList className="h-10 w-10" strokeWidth={1} />, title: "Asset Management", desc: "Track school assets", link: "/" },
    { icon: <CreditCard className="h-10 w-10" strokeWidth={1} />, title: "Fees Management", desc: "School fee system", link: "/" },
    { icon: <Bus className="h-10 w-10" strokeWidth={1} />, title: "School Bus Tracking", desc: "Bus tracking system", link: "/" },
  ],
};

const ProductsMenu = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
 <div
className="absolute top-full mt-1 z-50 max-w-[1100px] overflow-hidden p-4 rounded-[20px] border glass-card border-gray-600"

  onMouseLeave={() => setHoveredItem(null)}
>
      <motion.div
        className="rounded-xl flex overflow-hidden z-50"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
      >
        {/* Left Side List */}
        <div className="w-[260px] text-white p-3 space-y-4 ">
          <ul className="space-y-2 flex flex-col">
            {leftMenuItems.map((item) => (
              <li
                key={item.id}
                onMouseEnter={() => setHoveredItem(item.id)}
                className=" px-3 py-2 rounded-lg hover:bg-white/5 transition-colors  duration-200"
                style={{ padding: "10px 0px" }}
              >
                <div className="px-3 flex items-start gap-3 opacity-70 hover:opacity-100">
                  <span className="text-lg">{item.icon}</span>
                <span>{item.title}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content Panel */}
        <AnimatePresence mode="wait">
          {hoveredItem && rightContent[hoveredItem] && (
            <motion.div
              key={hoveredItem}
              className="w-[400px] h-fit p-6 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {rightContent[hoveredItem].map((app, index) => (
               <Link href={app.link}>
             <motion.div
  key={index}
  className="relative overflow-hidden p-4 rounded-[20px] border border-white/30 hover:bg-white/5 hover:backdrop-blur-[26px]  transition-all shadow-xl h-32"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.05 }}
>

                  <div className="text-3xl mb-2">{app.icon}</div>
                  <div className="font-semibold text-gray-200 text-[14px]">
                    {app.title}
                  </div>
                  <div className="text-gray-200 text-[12px]">{app.desc}</div>
                </motion.div>
               </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ProductsMenu;
