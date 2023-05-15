import {
  IoMail,
  IoLogoWhatsapp,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoFacebook,
  IoLogoInstagram,
} from "react-icons/io5";

export const ContactMe = [
  {
    icon: <IoMail size={25} />,
    url: "mailto:nur.hamsah.cash@gmail.com",
  },
  {
    icon: <IoLogoWhatsapp size={25} />,
    url: "https://wa.me/081213221343",
  },
  {
    icon: <IoLogoGithub size={25} />,
    url: "https://github.com/nurhamsah1998",
  },
  {
    icon: <IoLogoLinkedin size={25} />,
    url: "https://www.linkedin.com/in/nur-hamsah-kd1998",
  },
  {
    icon: <IoLogoFacebook size={25} />,
    url: "https://web.facebook.com/nur.hamsah.948",
  },
  {
    icon: <IoLogoInstagram size={25} />,
    url: "https://www.instagram.com/nurhamsah_1998/",
  },
];
function Footer() {
  return (
    <div className="h-[400px] bg-slate-700 relative mt-10">
      <div className=" justify-center items-center flex h-full">
        <p className="text-white font-bold italic text-center">
          " It's better to be tormented by discipline than to be tormented by
          regret "
        </p>
      </div>
      <div className="absolute text-white bottom-5 left-5 text-center right-5 justify-center md:justify-between grid md:flex items-center">
        <div className="flex items-center justify-center gap-4 mb-5 md:mb-0">
          {ContactMe.map((x: any, y: number) => (
            <button
              onClick={() => {
                window.location.href = x.url;
              }}
              key={y}
            >
              {x.icon}
            </button>
          ))}
        </div>
        <p className="text-xs">Copyright Nurhamsah 2023</p>
      </div>
    </div>
  );
}

export default Footer;
