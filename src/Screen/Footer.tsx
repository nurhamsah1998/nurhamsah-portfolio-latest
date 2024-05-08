import {
  IoMail,
  IoLogoWhatsapp,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoFacebook,
  IoLogoInstagram,
} from "react-icons/io5";

interface CONTACT_ME {
  icon: JSX.Element;
  url: string;
}

export const ContactMe: CONTACT_ME[] = [
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
    url: "https://www.instagram.com/nurhamsah_tech/",
  },
];
function Footer() {
  return (
    <div className="bg-slate-700 relative mt-10 pt-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="md:flex grid justify-between">
          <div className=" w-[350px] p-5">
            <p className="text-white text-xl font-extrabold">Nurhamsah</p>
            <p className="text-white text-sm">
              Jl. Ngadi Kec. Mojo Kab. Kediri 64162, Jawa Timur, Indonesia
            </p>
            <div className="flex items-center justify-start mt-3 text-white gap-4 mb-5 md:mb-0">
              {ContactMe.map((x: CONTACT_ME, y: number) => (
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
          <div className="p-5">
            <p className="text-white text-xl font-extrabold">Experience Work</p>
            <div className="md:flex grid gap-0 md:gap-[70px]">
              <div className="mt-3">
                <p className="text-white font-bold">Feedloop</p>
                <p className="text-white text-sm">as Frontend</p>
                <p className="text-white text-sm">React JS</p>
                <p className="text-white text-xs">Mar 2023 - Apr 2024</p>
              </div>
              <div className="mt-3">
                <p className="text-white font-bold">Freelance / School App</p>
                <p className="text-white text-sm">as Fullstack</p>
                <p className="text-white text-sm">React JS | Express | mySQL</p>
                <p className="text-white text-xs">Nov 2022 - present</p>
              </div>
              <div className="mt-3">
                <p className="text-white font-bold">Code Art Online</p>
                <p className="text-white text-sm">as Frontend</p>
                <p className="text-white text-sm">
                  React JS | Next JS | React Native
                </p>
                <p className="text-white text-xs">Dec 2021 - Feb 2023</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" text-white p-5 text-center mt-10">
          <p className="text-xs mb-10">Copyright Nurhamsah 2023</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
