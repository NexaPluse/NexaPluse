import serviceImg from "../../assets/images/service.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "@/Variants";

export default function Services() {
  return (
    <motion.section
      className="container scroll-m-20  mt-24 mb-20"
      id="services"
    >
      <div className="flex flex-col space-y-6 lg:flex-row justify-evenly mx-auto space-x-6 lg:space-x-12 items-center">
        <motion.div
          variants={fadeIn("right", "tween", 0.6, 1.0)}
          initial="hidden"
          whileInView={"show"}
          exit={"show"}
        >
          <div className=" max-w-[700px] lg:w-[550px] mx-auto ">
            <img src={serviceImg} alt="Image here" className="rounded-xl" />
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.6, 1.0)}
          initial="hidden"
          whileInView={"show"}
          exit={"show"}
          className="flex flex-col space-y-4 mx-auto "
        >
          <h1 className=" font-heading text-primary font-bold text-[24px] md:text-[38px] lg:text-4xl">
            {" "}
            Our Services
          </h1>
          <p className="text-[14px] md:text-[16px] lg:text-[22px] text-foreground">
            At Nexapluse, We offer a wide range of IT service aimed at improving
            companies and individual’s business
          </p>
          <div className="grid grid-cols-2 space-x-3 lg:gap-x-8 px-2 md:px-0 ">
            <ul className="list-disc space-y-3  text-foreground font-normal text-[12px] md:text-[16px]  ">
              <li>Website Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX</li>
              <li>Graphics Design</li>
              <li>Branding</li>
            </ul>
            <ul className="list-disc space-y-3  text-foreground font-normal text-[12px] md:text-[16px] ">
              <li>SEO Optimization</li>
              <li>IT Training</li>
              <li>Content Writing</li>
              <li>Digital Marketing</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
