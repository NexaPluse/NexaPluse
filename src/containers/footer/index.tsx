import logo from "@/assets/images/logo-white.png";
import { InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
export default function Footer() {
  return (
    <footer className="w-full bg-[#1D1D1D] text-slate-50">
      <div className="container py-10 flex flex-col gap-12 lg:gap-24 items-center">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-24 items-center w-full justify-between">
          <div className="flex flex-col text-lg gap-4 items-center w-full lg:w-[265px] ">
            <img src={logo} className="" width={165} alt="logo" />
            <p className="text-center ">
              Making a good first impression is essential to cultivating a
              strong customer relationship. Nexapluse is experienced enough to
              assist business owners make new customers and retain the existing
              ones.
            </p>
            <p className="font-bold">info@nexapluse.com</p>
            <p className="font-bold">+2349012345678</p>
          </div>
          <div className="max-w-[680px] lg:flex flex-col gap-16 hidden ">
            <div className="flex justify-center lg:justify-start max-md:flex-wrap gap-12 ">
              {links.map((link, index) => (
                <a className="font-bold text-lg" key={index} href={link.href}>
                  {link.title}
                </a>
              ))}
            </div>
            <ul className="flex flex-wrap gap-6 text-lg">
              {services.map((service, index) => (
                <li className="flex gap-4 items-center w-[48%]" key={index}>
                  <span className="w-3 h-3 rounded-full bg-primary" /> {service}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex  lg:flex-col gap-3 items-center">
            {SocialLinks.map((Social, index) => (
              <a
                className="p-2 rounded-full bg-primary hover:opacity-90"
                href={Social.link}
                rel="noreferrer noopener"
                target="_blank"
                key={index}
              >
                {Social.icon}
              </a>
            ))}
          </div>
        </div>
        <p className="w-[175px] text-center">
          Nexapluse Development ©copyright 2024
        </p>
      </div>
    </footer>
  );
}
const SocialLinks = [
  {
    link: "https://twitter.com/nexapluse?s=11",
    icon: <TwitterIcon className="text-white " />,
  },
  {
    link: "https://www.instagram.com/invites/contact/?i=1erwhy2o3aj1x&utm_content=tdb6tsu",
    icon: <InstagramIcon className="text-white " />,
  },
  {
    link: "https://www.linkedin.com/company/nexapulse/about/",
    icon: <LinkedinIcon className="text-white " />,
  },
];

const links = [
  {
    title: "About",
    href: "#about-us",
  },
  {
    title: "Services",
    href: "#services",
  },
  {
    title: "Portfolio",
    href: "#portfolio",
  },
  {
    title: "Consultation",
    href: "#consultation",
  },
];

const services = [
  "Website Design and Development",
  "Mobile App Design and Development",
  "UI/UX",
  "Graphics Design",
  "Branding",
  "SEO Optimization",
  "IT Training",
  "Social Media Management",
  "Content Writing",
  "Digital Marketing",
];
