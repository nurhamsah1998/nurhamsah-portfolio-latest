import {
  IoMail,
  IoLogoWhatsapp,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoFacebook,
  IoLogoInstagram,
} from "react-icons/io5";

function Footer() {
  const ContactMe = [
    {
      icon: <IoMail size={20} />,
      url: "mailto:nur.hamsah.cash@gmail.com",
    },
    {
      icon: <IoLogoWhatsapp size={20} />,
      url: "https://wa.me/081213221343",
    },
    {
      icon: <IoLogoGithub size={20} />,
      url: "https://github.com/nurhamsah1998",
    },
    {
      icon: <IoLogoLinkedin size={20} />,
      url: "https://www.linkedin.com/in/nur-hamsah-kd1998",
    },
    {
      icon: <IoLogoFacebook size={20} />,
      url: "https://web.facebook.com/nur.hamsah.948",
    },
    {
      icon: <IoLogoInstagram size={20} />,
      url: "https://www.instagram.com/nurhamsah_1998/",
    },
  ];
  return (
    <div className="h-[400px] bg-slate-700 relative mt-10">
      <div className=" justify-center items-center flex h-full">
        <p className="text-white text-3xl font-bold italic">
          " It's better to be tormented by discipline than to be tormented by
          regret "
        </p>
      </div>
      <div className="absolute text-white bottom-5 left-5 text-center right-5 justify-between flex items-center">
        <p>Copyright Nurhamsah 2023</p>
        <div className="flex items-center justify-center gap-4">
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
      </div>
    </div>
  );
}

export default Footer;
