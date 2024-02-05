import { aboutData } from "@/utils/About";
import React from "react";
import { motion } from "framer-motion";
import { transition1 } from "@/Transitions";
import { fadeIn } from "@/Variants";

export default function AboutUs() {
  return (
    <motion.section
      className="bg-secondary scroll-m-20 mt-24 w-full"
      id="about-us"
    >
      <div className="container">
        <motion.div className="flex flex-col gap-2 space-y-4 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-4 py-8">
          {aboutData.map((about, index) => {
            return (
              <motion.div
                initial="hidden"
                whileInView={"show"}
                variants={fadeIn("up", "tween", index * 0.2, 0.4)}
                whileHover={{ scale: 1.05 }}
                transition={transition1}
                key={index}
                className="flex flex-col transition-all duration-300   text-center px-6 cursor-pointer hover:bg-[#42a4ee] rounded-lg  ease-out hover:shadow-2xl "
              >
                <div className=" py-3 px-2 space-y-4 ">
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      margin: "0 auto",
                    }}
                  >
                    <svg width="100%" height="100%" viewBox="0 0 24 24">
                      {React.createElement(about.icon, {
                        style: { fill: "#fff", stroke: "#fff" },
                      })}
                    </svg>
                  </div>

                  <h2 className="font-heading text-[30px] text-white ">
                    {about.header}
                  </h2>
                  <p className="text-[14px] text-white font-normal ">
                    {about.details}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
