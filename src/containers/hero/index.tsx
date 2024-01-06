import heroImg from "../../assets/images/hero-img.png";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="container" id="hero">
      <div className="flex flex-row justify-evenly max-h-[600px] items-center ">
        <div className="flex flex-col  space-y-4 md:space-y-8 px-0   lg:px-4 text-center sm:text-start ">
          <h1 className="font-heading text-foreground text-[24px] md:text-[38px] lg:text-[50px]">
            Upgrade your business with{" "}
            <span className="text-primary font-bold text-[24px] md:text-[38px] lg:text-[50px]">
              Technology
            </span>
          </h1>
          <h4 className="text-[14px] md:text-[18px] lg:text-[22px] text-foreground">
            We design, build and support elegance websites to Upgrade businesses
          </h4>
          <div className="flex sm:hidden max-w-[400px] w-[300px] mx-auto ">
            <img src={heroImg} alt="Image here" />
          </div>
          <div className="mt-8 mx-auto sm:mx-0">
            <a href="#pricing">
              <Button>
                <h5 className="text-[12px] md:text-[16px]"> Get Started</h5>
              </Button>
            </a>
          </div>
        </div>
        <div className="hidden sm:flex max-w-[1000px] w-[500px] md:w-[700px] lg:w-[900px]">
          <img src={heroImg} alt="Image here" />
        </div>
      </div>
    </section>
  );
}
