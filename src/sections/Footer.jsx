import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, products, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="max-w-md mb-20">
        <a href="/">
          <img
            src={footerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <p className="text-white-400 mt-6 font-palanquin leading-normal">
          Designers and developers use Lorem Ipsum as a temporary filler text
          when creating mockups, prototypes, or templates. It helps them focus
          on the design and layout without getting distracted by the actual
          content.
        </p>
        <ul className="flex items-center gap-5 mt-8">
          {socialMedia.map((social) => (
            <li className="bg-white p-2 rounded-full">
              <a>
                <img src={social.src} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap sm:max-w-xl">
        {footerLinks.map((footerLink) => (
          <div>
            <h3 className="font-montserrat text-xl leading-normal font-medium mb-6 text-white">
              {footerLink.title}
            </h3>
            <ul className="mt-10">
              {footerLink.links.map((link) => (
                <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copyright sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
