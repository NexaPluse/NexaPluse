import { MdOutlineDesignServices } from "react-icons/md";
import { MdOutlineDeveloperMode, MdOutlineManageHistory } from "react-icons/md";
import { GrOptimize } from "react-icons/gr";

// Define type aliases for the icons
type IconType =
  | typeof MdOutlineDesignServices
  | typeof MdOutlineDeveloperMode
  | typeof MdOutlineManageHistory
  | typeof GrOptimize;

// Define an interface for the aboutData objects
interface AboutItem {
  icon: IconType;
  header: string;
  details: string;
}

// Create your data array
export const aboutData: AboutItem[] = [
  {
    icon: MdOutlineDesignServices,
    header: "Design",
    details:
      "  Our design philosophy goes beyond aesthetics – it's about creating seamless, intuitive, and innovative user experiences that elevate your technology solutions to new heights.",
  },
  {
    icon: MdOutlineDeveloperMode,
    header: "Development",
    details:
      "   our Development Hub. Harness the power of groundbreaking technologies and unparalleled expertise as we bring your ideas to life with precision and efficiency.",
  },
  {
    icon: MdOutlineManageHistory,
    header: "Manage",
    details:
      "Our strategic and efficient management approach ensures the seamless orchestration of projects, and timelines, empowering you to navigate the digital landscape",
  },
  {
    icon: GrOptimize,
    header: "Optimize",
    details:
      " We meticulously fine-tune your tech solutions for speed, responsiveness, and seamless functionality, ensuring optimal performance across platforms.",
  },
];
