import heroImg from "../../assets/images/hero-img.png";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="container" id="hero">
      <div className="flex flex-row justify-evenly max-h-[600px] items-center ">
        <div className="flex flex-col space-y-8  px-4  ">
          <h1 className="font-heading text-foreground text-[50px]">
            Upgrade your business with{" "}
            <span className="text-primary font-bold text-[50px]">
              Technology
            </span>
          </h1>
          <h4 className="text-[22px] text-foreground">
            We design, build and support elegance websites to Upgrade your
            business
          </h4>
          <div className="mt-8">
            <a href="#pricing">
              <Button>Get Started</Button>
            </a>
          </div>
        </div>
        <div className="max-w-[1000px] w-[900px]">
          <img src={heroImg} alt="Image here" />
        </div>
      </div>
    </section>
  );
}
