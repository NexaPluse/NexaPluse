import { Building2Icon, MailIcon, PhoneIcon } from "lucide-react";
import { PricingForm } from "./pricing-form";

export default function Consultation() {
  return (
    <section className="w-full scroll-m-20" id="consultation">
      <div className="bg-secondary">
        <div className="container flex flex-col justify-center gap-6 items-center py-14">
          <h2 className="text-3xl lg:text-5xl text-white font-heading">
            Pricing
          </h2>
          <PricingForm />
        </div>
      </div>
      <div className="container py-32 flex flex-col gap-10 lg:gap-20">
        <h2 className="text-3xl lg:text-5xl text-primary font-heading">
          Contact Us
        </h2>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 justify-center max-lg:items-center">
          {consultations.map((consultation, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 items-center p-8 rounded-xl transition-all duration-300 hover:shadow-box dark:hover:shadow-boxDark w-full md:w-[300px] md:h-[300px] text-lg md:text-2xl text-center text-primary"
            >
              {consultation.icon}
              <p>{consultation.text}</p>
              <p>{consultation.href}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const consultations = [
  {
    icon: <PhoneIcon className="h-12 w-12 md:w-24 md:h-24" />,
    text: "Call us on",
    href: "+2349012345678",
  },
  {
    icon: <MailIcon className="h-12 w-12 md:w-24 md:h-24" />,
    text: "Send us an Email",
    href: "info@nexapluse.com",
  },
  {
    icon: <Building2Icon className="h-12 w-12 md:w-24 md:h-24" />,
    text: "Opening Hours",
    href: "8:00 am - 5:00 pm Mondays - Friday",
  },
];
