import {
  MdOutlineDesignServices,
  MdOutlineDeveloperMode,
  MdOutlineManageHistory,
} from "react-icons/md";
import { GrOptimize } from "react-icons/gr";

export default function AboutUs() {
  return (
    <section className="bg-secondary scroll-m-20 mt-24 w-full" id="about-us">
      <div className="container">
        <div className="flex flex-col gap-2 space-y-4 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-4 py-8">
          <div className="flex flex-col transition-all duration-300   text-center px-6 cursor-pointer hover:bg-[#42a4ee] rounded-lg  ease-out hover:shadow-2xl ">
            <div className=" py-3 px-2 space-y-4 ">
              <MdOutlineDesignServices
                size={70}
                className="fill-white text-center mx-auto"
              />
              <h2 className="font-heading text-[30px] text-white ">Design</h2>
              <p className="text-[14px] text-white font-normal ">
                Our design philosophy goes beyond aesthetics – it's about
                creating seamless, intuitive, and innovative user experiences
                that elevate your technology solutions to new heights.
              </p>
            </div>
          </div>
          <div className="flex flex-col transition-all duration-300   text-center px-6 cursor-pointer hover:bg-[#42a4ee] rounded-lg  ease-out hover:shadow-2xl ">
            <div className="py-3 px-2 space-y-4">
              <MdOutlineDeveloperMode
                size={70}
                className="fill-white text-center mx-auto"
              />
              <h2 className="font-heading text-[30px] text-white ">
                Development
              </h2>
              <p className="text-[14px] text-white font-normal ">
                our Development Hub. Harness the power of groundbreaking
                technologies and unparalleled expertise as we bring your ideas
                to life with precision and efficiency.
              </p>
            </div>
          </div>
          <div className="flex flex-col transition-all duration-300  text-center px-6 cursor-pointer hover:bg-[#42a4ee] rounded-lg  ease-out hover:shadow-2xl ">
            <div className="py-3 px-2 space-y-4 ">
              <MdOutlineManageHistory
                size={70}
                className="fill-white text-center mx-auto"
              />
              <h2 className="font-heading text-[30px] text-white ">Manage</h2>
              <p className="text-[14px] text-white font-normal ">
                Our strategic and efficient management approach ensures the
                seamless orchestration of projects, and timelines, empowering
                you to navigate the digital landscape
              </p>
            </div>
          </div>
          <div className="flex flex-col transition-all duration-300   text-center px-6 cursor-pointer hover:bg-[#42a4ee] rounded-lg  ease-out hover:shadow-2xl ">
            <div className="py-3 px-2 space-y-4">
              <GrOptimize
                size={70}
                className="fill-white stroke-white text-center mx-auto"
              />
              <h2 className="font-heading text-[30px] text-white ">Optimize</h2>
              <p className="text-[14px] text-white font-normal ">
                We meticulously fine-tune your tech solutions for speed,
                responsiveness, and seamless functionality, ensuring optimal
                performance across platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
