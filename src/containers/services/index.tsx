import serviceImg from "../../assets/images/service.jpg";

export default function Services() {
  return (
    <section className="container scroll-m-20  mt-24 mb-20" id="services">
      <div className="flex flex-col space-y-6 lg:flex-row justify-evenly mx-auto space-x-6 lg:space-x-12 items-center">
        <div>
          <div className=" max-w-[700px] lg:w-[550px] mx-auto ">
            <img src={serviceImg} alt="Image here" className="rounded-xl" />
          </div>
        </div>
        <div className="flex flex-col space-y-4 mx-auto ">
          <h1 className=" font-heading text-primary font-bold text-[24px] md:text-[38px] lg:text-[50px]">
            {" "}
            Our Services
          </h1>
          <p className="text-[14px] md:text-[16px] lg:text-[22px] text-foreground">
            At Nexapluse, We offer a wide range of IT service aimed at improving
            companies and individual’s business
          </p>
          <div className="grid grid-cols-2 space-x-3 lg:gap-x-8 px-2 md:px-0 ">
            <ul className="list-none space-y-3  text-foreground font-normal text-[12px] md:text-[16px]  ">
              <li className="flex items-center">
                {" "}
                <span className="w-3 h-3 mr-4 rounded-full bg-primary" />
                Website Development
              </li>
              <li className="flex items-center">
                {" "}
                <span className="w-3 h-3 mr-4 rounded-full bg-primary" />
                Mobile App Development
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 mr-4 rounded-full bg-primary" />
                UI/UX
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 mr-4 rounded-full bg-primary" />
                Graphics Design
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 mr-4 rounded-full bg-primary" />
                Branding
              </li>
            </ul>
            <ul className="list-none space-y-3  text-foreground font-normal text-[12px] md:text-[16px] ">
              <li className="flex items-center">
                <span className="w-3 h-3 mr-4 rounded-full bg-primary" />
                SEO Optimization
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 mr-4 rounded-full bg-primary" />
                IT Training
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 mr-4 rounded-full bg-primary" />
                Content Writing
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 mr-4 rounded-full bg-primary" />
                Digital Marketing
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
