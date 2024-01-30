import { useState } from "react";
import { MenuIcon, MoveRightIcon } from "lucide-react";
import logo from "@/assets/images/logo.png";
import { ModeToggle } from "@/components/theming/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Navigation({ navLinks = links }: HeaderProps) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 shadow  bg-background">
      <nav className="container mx-auto  flex w-full items-center justify-between bg-background px-6 py-2">
        <a href="/">
          <Logo />
        </a>
        <NavigationWrap navLinks={navLinks} />
        <NavigationWrap mobile navLinks={navLinks} />
      </nav>
    </header>
  );
}

function Logo() {
  return (
    <img src={logo} width={165} height={40} alt="logo" className="w-[50%]" />
  );
}

const links: NavLink[] = [
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
  {
    title: "Lets Talk",
    href: "tel:+2347040331994",
    button: true,
  },
];

function NavigationWrap({ mobile = false, navLinks = [] }: NavigationProps) {
  const [mobileNavigationOpened, setMobileNavigationOpened] = useState(false);

  const navClassName = ` text-base bg-background space-x-2 justify-end 
    ${
      mobile
        ? `transition transform -right-2/3 fixed top-0 z-20 py-4 pb-7 w-2/3 overflow-y-auto py-4 sm:hidden ${
            mobileNavigationOpened ? "-translate-x-full shadow-2xl" : ""
          }`
        : "hidden md:flex"
    }
  `;
  const navListClassName = `
    flex max-w-[800px] w-full
    ${mobile ? "flex-col space-y-2  " : "items-center gap-12"}
  `;
  const navListItemClassName = `
    group relative
   
    ${mobile ? "w-full overflow-x-visible text-right" : ""}
  `;
  const navListLinkClassName = mobile ? "mx-4  rounded-[20px]" : "";

  const closeMobileNavigation = () => setMobileNavigationOpened(false);

  return (
    <>
      {mobile && (
        <div className="flex gap-2 md:hidden ">
          <ModeToggle />
          <button
            className="block md:hidden"
            onClick={() => setMobileNavigationOpened(true)}
            title="Open navigation menu"
          >
            <MenuIcon />
          </button>
        </div>
      )}

      {mobile && mobileNavigationOpened && (
        <div
          className="fixed right-0 top-0 z-10 h-full w-full opacity-70 dark:opacity-90 sm:hidden"
          onClick={closeMobileNavigation}
        ></div>
      )}

      <nav className={navClassName}>
        <ul className={navListClassName}>
          {mobile && (
            <li className="text-right">
              <button
                className="px-6 py-2 text-primary"
                onClick={closeMobileNavigation}
              >
                <MoveRightIcon />
              </button>
            </li>
          )}
          {navLinks.map(({ title, href, button }, index) => (
            <li
              className={`${navListItemClassName} ${
                index === navLinks.length - 1 && "ml-auto"
              }`}
              key={href}
              onClick={closeMobileNavigation}
            >
              {button ? (
                <Button variant={"primary"} className={` ${mobile && "mx-4"} `}>
                  <a href={href}>{title}</a>
                </Button>
              ) : (
                <NavLink
                  className={navListLinkClassName}
                  mobile={mobile}
                  href={href}
                >
                  {title}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
        <div className="max-md:hidden">
          <ModeToggle />
        </div>
      </nav>
    </>
  );
}

function NavLink({ children, className, href }: NavLinkProps) {
  return (
    <a
      className={`
        block whitespace-nowrap px-2 py-2 text-sm no-underline transition hover:font-bold text-primary
        ${className}
      `}
      href={href}
    >
      {children}
    </a>
  );
}

interface NavLink {
  title: string;
  href: string;
  children?: NavLink[];
  button?: boolean;
}

interface NavigationProps {
  mobile?: boolean;
  navLinks?: NavLink[];
}

interface NavLinkProps extends React.HTMLProps<HTMLLinkElement> {
  mobile?: boolean;
}

interface HeaderProps {
  navLinks?: NavLink[];
}
