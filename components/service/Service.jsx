import { Gravity, MatterBody } from "@/components/ui/gravity";
import { motion } from "framer-motion";
function Preview() {
  return (
    <div className="w-full h-full min-h-[500px] flex flex-col relative  mt-20">
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="text-center mb-10"
>
  <h2 className="text-[56px]  text-white relative inline-block after:content-[''] after:block after:h-[2px] after:bg-indigo-500 after:w-1/2 after:mx-auto after:mt-2">
   What we Build
  </h2>
  <p className="mt-6 text-gray-100 text-[22px] leading-9 max-w-6xl md:px-28 text-center mx-auto">
  We are a passionate team at Scale US, dedicated to
harnessing the power ✨ of creativity through innovative
technology solutions.
  </p>
</motion.div>
      <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full">
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="30%"
          y="10%"
        >
          <div className="text-base md:text-xl bg-[#0015ff] text-white rounded-full hover:cursor-pointer px-6 py-3">
            Website Development
          </div>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="30%"
          y="30%"
        >
          <div className="text-base md:text-xl bg-[#7A16DE] text-white rounded-full hover:cursor-grab px-6 py-3 ">
            Mobile Application
          </div>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="40%"
          y="20%"
          angle={10}
        >
          <div className="text-base md:text-xl bg-[#1f464d]  text-white rounded-full hover:cursor-grab px-6 py-3 ">
            UI and UX
          </div>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="75%"
          y="10%"
        >
          <div className="text-base md:text-xl bg-[#ff5941]  text-white [#E794DA] rounded-full hover:cursor-grab px-6 py-3 ">
            Seo and Brand Marketing
          </div>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="80%"
          y="20%"
        >
          <div className="text-base md:text-xl bg-pink-800  text-white rounded-full hover:cursor-grab px-6 py-3 ">
            Hybrid App Development
          </div>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="50%"
          y="10%"
        >
          <div className="text-base md:text-xl bg-yellow-800  text-white rounded-full hover:cursor-grab px-6 py-3 ">
            App Mantainance and Support
          </div>
        </MatterBody>
      
        
      </Gravity>
    </div>
  );
}

export { Preview };
