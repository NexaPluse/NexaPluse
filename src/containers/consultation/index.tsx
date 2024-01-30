import { Building2Icon, MailIcon, PhoneIcon } from "lucide-react";
import { PricingForm } from "./pricing-form";

export default function Consultation() {
  return (
    <section className="w-full scroll-m-20" id="consultation">
      <div className="bg-secondary">
        <div className="container flex flex-col justify-center gap-6 items-center py-14">
          <h2 className="text-3xl lg:text-5xl text-white font-heading">
            Contact Us
          </h2>
          <div className="flex flex-col-reverse lg:flex-row  gap-10 w-full justify-around">
            <div className="flex flex-col gap-10 lg:gap-20 bg-background rounded-xl py-5 px-5">
              <div className="flex flex-col justify-center max-lg:items-center">
                {consultations.map((consultation, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-4 items-center p-8 rounded-xl transition-all duration-300 hover:shadow-box dark:hover:shadow-boxDark w-full md:w-[270px] md:h-[230px] text-lg md:text-2xl text-center text-primary"
                  >
                    {consultation.icon}
                    <p>{consultation.text}</p>
                    <p>{consultation.href}</p>
                  </div>
                ))}
              </div>
            </div>
            <PricingForm />
          </div>
        </div>
      </div>
    </section>
  );
}

const consultations = [
  {
    icon: <PhoneIcon className="h-6 w-6 md:w-12 md:h-12" />,
    text: "Call us on",
    href: "+2347040331994",
  },
  {
    icon: <MailIcon className="h-6 w-6 md:w-12 md:h-12" />,
    text: "Send us an Email",
    href: "Nexapluse@gmail.com",
  },
  {
    icon: <Building2Icon className="h-6 w-6 md:w-12 md:h-12" />,
    text: "Opening Hours",
    href: "8:00 am - 5:00 pm Mondays - Friday",
  },
];
