import { Building2Icon, MailIcon, PhoneIcon } from "lucide-react";
import { PricingForm } from "./pricing-form";
import { motion } from "framer-motion";
import { fadeIn } from "@/Variants";
import { transition1 } from "@/Transitions";

export default function Consultation() {
  return (
    <motion.section
      className="w-full scroll-m-20 mt-12 md:mt-24"
      id="consultation"
    >
      <div className="bg-secondary">
        <div className="container flex flex-col justify-center gap-6 items-center py-14">
          <h2 className="text-3xl lg:text-4xl text-white font-heading">
            Pricing
          </h2>
          <motion.div
            className="w-full flex justify-center"
            variants={fadeIn("up", "tween", 0.6, 1.0)}
            initial="hidden"
            whileInView={"show"}
            exit={"show"}
          >
            <PricingForm />
          </motion.div>
        </div>
      </div>
      <motion.div className="container py-32 flex flex-col gap-10 lg:gap-20">
        <h2 className="text-3xl lg:text-4xl text-primary font-heading">
          Contact Us
        </h2>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 justify-center max-lg:items-center">
          {consultations.map((consultation, index) => (
            <motion.div
              initial="hidden"
              whileInView={"show"}
              variants={fadeIn("up", "tween", index * 0.2, 0.4)}
              whileHover={{ scale: 1.05 }}
              transition={transition1}
              key={index}
              className="flex flex-col gap-4 items-center p-8 rounded-xl hover:shadow-box dark:hover:shadow-boxDark w-full md:w-[300px] md:h-[300px] text-lg md:text-xl text-center text-primary"
            >
              {consultation.icon}
              <p>{consultation.text}</p>
              <p>{consultation.href}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}

const consultations = [
  {
    icon: <PhoneIcon className="h-12 w-12 md:w-20 md:h-20" />,
    text: "Call us on",
    href: "+2349012345678",
  },
  {
    icon: <MailIcon className="h-12 w-12 md:w-20 md:h-20" />,
    text: "Send us an Email",
    href: "info@nexapluse.com",
  },
  {
    icon: <Building2Icon className="h-12 w-12 md:w-20 md:h-20" />,
    text: "Opening Hours",
    href: "8:00 am - 5:00 pm Mondays - Friday",
  },
];
