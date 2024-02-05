import projects from "@/assets/images/projects.svg";
import clients from "@/assets/images/clients.svg";
import experience from "@/assets/images/experience.svg";
import { motion } from "framer-motion";
import { fadeIn } from "@/Variants";
import { transition1 } from "@/Transitions";

export default function Achievement() {
  return (
    <motion.section
      className="w-full bg-secondary mt-12 md:mt-24"
      id="achievement"
    >
      <div className="container py-6 md:py-14 flex  gap-4 lg:gap-20 items-center justify-center">
        {achievements.map((a, index) => (
          <motion.div
            initial="hidden"
            whileInView={"show"}
            variants={fadeIn("up", "tween", index * 0.2, 0.4)}
            whileHover={{ scale: 1.05 }}
            transition={transition1}
            key={index}
            className="flex flex-col md:flex-row items-center gap-3"
          >
            <div className="w-[50px] h-[50px] md:w-[150px] md:h-[150px] rounded-full bg-primary flex justify-center items-center">
              <img
                src={a.icon}
                alt="icon"
                className="w-[25px] h-[25px] md:w-[60px] md:h-[60px]"
              />
            </div>
            <div className="flex flex-col items-center text-white">
              <h6 className="font-heading text-lg md:text-3xl">{a.value}</h6>
              <p className="text-sm md:text-md text-center">{a.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
const achievements = [
  { title: "Projects Completed", value: "200+", icon: projects },
  { title: "Clients Worldwide", value: "50+", icon: clients },
  { title: "Experience year", value: "10+", icon: experience },
];
