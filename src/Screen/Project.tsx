import Card from "Component/Card";
import React from "react";
import BertanyaApp from "assets/ProjectIMG/bertanya.png";
import MoneyApp from "assets/ProjectIMG/money.png";
import RestaurantApp from "assets/ProjectIMG/restaurant.png";
import GOV from "assets/ProjectIMG/gov_management.png";
import StudentPaymentApp from "assets/ProjectIMG/student_payment_app.png";

function Project({
  projectRef,
}: {
  projectRef?: React.LegacyRef<HTMLDivElement> | undefined;
}) {
  const webApplication = [
    {
      name: "Bertanya",
      tech: "Next Js | Tailwind CSS | React Query | Supabase",
      tag: "The project I made with next js and tailwind css. starting from UI/UX design and the logo is the result of my creativity.This app uses pure Tailwind CSS, Next JS and Supabase. Application with the use of Question & Answer. so the user can ask questions and provide answers, and in this application the user can get several badges as a reward for what he has achieved. This application has an update. let's check now!",
      color: "bg-pink-500",
      img: BertanyaApp,
      link: "https://bertanya.vercel.app/",
      desc: "Questions and answers project with user features can earn badges",
    },
    // {
    //   name: "Student Payment App",
    //   tech: "React Js (Minimal UI) | Material UI | React Query | Express | Node Js | Sequalize | mySQL",
    //   color: "bg-cyan-500",
    //   img: StudentPaymentApp,
    //   link: "https://www.youtube.com/watch?v=qnpGTjnhDUc",
    //   tag: "Sorry for including this, this is my fullstack freelance project 😅. Application for schools where its use is to record a list of student bills. there is also an admin role that can block student accounts. For more details, you can see the video documentation.",
    //   desc: "Sorry for including this, this is my fullstack freelance project 😅. Application for schools where its use is to record a list of student bills",
    // },
    // {
    //   name: "Gov Management App",
    //   tech: "React JS | Material UI | React Query | Supabase",
    //   tag: "I and my friend created an application that aims to handle all activities in village scale governance, this application also has two roles. admin and user.This application is in the development stage. due to each other's busyness, so this project was stopped. but you can still visit",
    //   img: GOV,
    //   link: "https://gov-management.vercel.app/login",
    //   color: "bg-orange-500",
    //   desc: "Collaborative project with my friends. village government management",
    // },

    {
      name: "Restaurant App",
      tech: "React Native | React Native Paper",
      tag: "this is my own product which i am working on using react native. You can see more information by visit this repo github. All designs, starting from the layouts and promo banners, are the result of my creativity",
      color: "bg-teal-500",
      img: RestaurantApp,
      link: "https://github.com/nurhamsah1998/Restaurant",
      desc: "Restaurant app with easy checkout flow",
    },
    {
      name: "Money Management App",
      tech: "React Native | Native Base | Redux Toolkit",
      tag: "Financial management application This is my newest product which is still under development. i will focus on this app for android users",
      color: "bg-purple-500",
      img: MoneyApp,
      link: null,
      desc: "Financial management application This is my newest product which is still under development. i will focus on this app for android users",
    },
  ];
  return (
    <div ref={projectRef} className="md:my-0  my-5 max-w-[1400px] mx-auto">
      <p className=" text-3xl text-center font-bold ">
        Web & Mobile Applications
      </p>
      <p className=" md:mb-20 mb-10 mt-3 mx-auto text-center max-w-3xl">
        Here are some of the best examples of my apps. website apps and mobile
        apps. These are all my personal projects that I designed myself, from
        UX/UX app flows to App Logos
      </p>
      <div className="grid gap-10 md:gap-20 justify-center">
        {webApplication.map(
          (
            item: {
              name?: string;
              tag?: string;
              desc?: string;
              color?: string;
              tech?: string;
              img?: string;
              link?: any;
            },
            index: number
          ) => {
            return (
              <Card
                coverContent={<img src={item.img} />}
                key={index}
                order={Boolean(index % 2)}
                tech={item.tech}
                tag={item.tag}
                name={item.name}
                bgcolorHover={item.color}
                hoverText={item.desc}
                link={item.link}
                bgcolorCover="bg-slate-500"
                btnHover={item.link ? "Learn More" : "On going"}
              />
            );
          }
        )}
      </div>
    </div>
  );
}

export default Project;
