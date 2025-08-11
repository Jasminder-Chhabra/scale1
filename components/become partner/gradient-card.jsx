import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const GradientCard = ({text, para , img}) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // Handle mouse movement for 3D effect
  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();

      // Calculate mouse position relative to card center
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      setMousePosition({ x, y });

      // Calculate rotation (limited range for subtle effect)
      const rotateX = -(y / rect.height) * 5; // Max 5 degrees rotation
      const rotateY = (x / rect.width) * 5; // Max 5 degrees rotation

      setRotation({ x: rotateX, y: rotateY });
    }
  };

  // Reset rotation when not hovering
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div className="md:w-full  mt-8  flex items-center justify-center">
      {/* Card container with realistic 3D effect */}
      <motion.div
        ref={cardRef}
        className="relative rounded-[20px] overflow-hidden"
        style={{
          width: "360px",
          height: "450px",
          transformStyle: "preserve-3d",
          backgroundColor: "#0e131f",
        }}
        initial={{ y: 0 }}
        animate={{
          y: isHovered ? -5 : 0,
          rotateX: rotation.x,
          rotateY: rotation.y,
          perspective: 1000,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}>
        {/* Subtle glass reflection overlay */}
        <motion.div
          className="absolute inset-0 z-35 pointer-events-none glass-card "
          style={{
            background: "#1A1D24",
            backdropFilter: "blur(2px)",
          }}
          animate={{
            opacity: isHovered ? 0.7 : 0.5,
            rotateX: -rotation.x * 0.2,
            rotateY: -rotation.y * 0.2,
            z: 1,
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut"
          }} />

        {/* Dark background with black gradient like in the image */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(180deg, #000000 0%, #000000 70%)",
          }}
          animate={{
            z: -1
          }} />

      
      
 

   

        {/* Card content */}
        <motion.div
          className="relative flex flex-col h-full p-8 z-40"
          animate={{
            z: 2
          }}>
          {/* Icon circle with shadow - making it dark like in the image */}
          <motion.div
            className="w-full h-[400px] rounded-xl flex items-center justify-center mb-6"
            style={{
          
              position: "relative",
              overflow: "hidden"
            }}
            initial={{ filter: "blur(3px)", opacity: 0.7 }}
            animate={{
              filter: "blur(0px)",
              opacity: 1,
              
              z: isHovered ? 10 : 5,
              y: isHovered ? -2 : 0,
              rotateX: isHovered ? -rotation.x * 0.5 : 0,
              rotateY: isHovered ? -rotation.y * 0.5 : 0
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut"
            }}>
          <div className="flex items-center justify-center w-full h-full relative z-10">
              <img src={img} className=""/>
            </div>

           
          </motion.div>

          {/* Content positioning to match the image */}
          <motion.div
            className="mb-auto"
            animate={{
              z: isHovered ? 5 : 2,
              rotateX: isHovered ? -rotation.x * 0.3 : 0,
              rotateY: isHovered ? -rotation.y * 0.3 : 0
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut"
            }}>
            <motion.h3
              className="text-2xl font-medium text-white mb-3"
              style={{
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
              }}
              initial={{ filter: "blur(3px)", opacity: 0.7 }}
              animate={{
                textShadow: isHovered ? "0 2px 4px rgba(0,0,0,0.2)" : "none",
                filter: "blur(0px)",
                opacity: 1,
                transition: { duration: 1.2, delay: 0.2 }
              }}>
             {text}
            </motion.h3>

            <motion.p
              className="text-md  mb-6 text-gray-100"
              style={{
                lineHeight: 1.5,
                fontWeight: 350,
              }}
              initial={{ filter: "blur(3px)", opacity: 0.7 }}
              animate={{
                textShadow: isHovered ? "0 1px 2px rgba(0,0,0,0.1)" : "none",
                filter: "blur(0px)",
                opacity: 0.85,
                transition: { duration: 1.2, delay: 0.4 }
              }}>
             {para}
            </motion.p>

            {/* Learn More with arrow - matching the image */}
          
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};