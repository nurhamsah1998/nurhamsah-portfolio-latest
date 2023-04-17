import Card from "Component/Card";
import React from "react";
import BertanyaApp from "assets/ProjectIMG/bertanya.png";
import MoneyApp from "assets/ProjectIMG/money.png";
import RestaurantApp from "assets/ProjectIMG/restaurant.png";
import GOV from "assets/ProjectIMG/gov_management.png";
import StudentPaymentApp from "assets/ProjectIMG/student_payment_app.png";

function Project() {
  const webApplication = [
    {
      name: "Bertanya",
      tech: "Next Js | Tailwind CSS | React Query | Supabase",
      tag: "The project I made with next js and tailwind css. starting from UI/UX design and the logo is the result of my creativity.This app uses pure Tailwind CSS, Next JS and Supabase. Application with the use of Question & Answer. so the user can ask questions and provide answers, and in this application the user can get several badges as a reward for what he has achieved. This application has an update. let's check now!",
      color: "bg-pink-500",
      img: BertanyaApp,
      desc: "Questions and answers project with user features can earn badges",
    },
    {
      name: "Student Payment App",
      tech: "React Js (Minimal UI) | Material UI | React Query | Express | Node Js | Sequalize | mySQL",
      color: "bg-cyan-500",
      img: StudentPaymentApp,
      tag: "This application is an application for schools where its use is to record a list of student bills and students can see the number of bills lacking or a list of bills. there is also an admin role that can block student accounts. For more details, you can see the video documentation.",
      desc: "Application for schools where its use is to record a list of student bills and students can see the number of bills lacking or a list of bills",
    },
    {
      name: "Gov Management App",
      tech: "React JS | Material UI | React Query | Supabase",
      tag: "I and my friend created an application that aims to handle all activities in village scale governance, this application also has two roles. admin and user.This application is in the development stage. due to each other's busyness, so this project was stopped. but you can still visit",
      img: GOV,
      color: "bg-orange-500",
      desc: "Collaborative project with my friends. village government management",
    },
    {
      name: "Money Management App",
      tech: "React Native | Native Base | Redux Toolkit",
      tag: "React Native",
      color: "bg-purple-500",
      img: MoneyApp,
      desc: "My latest project is in development stage. financial management application",
    },
    {
      name: "Restaurant App",
      tech: "React Native | React Native Paper",
      tag: "this is my own product which i am working on using react native. You can see more information by visit this repo github. All designs, starting from the layouts and promo banners, are the result of my creativity",
      color: "bg-teal-500",
      img: RestaurantApp,
      desc: "Restaurant app with easy checkout flow",
    },
  ];
  return (
    <div className="md:my-0  my-5">
      <p className=" text-3xl text-center font-bold md:mb-20 mb-10 ">My Work</p>
      <div className="grid gap-10 md:gap-20">
        {webApplication.map(
          (
            item: {
              name?: string;
              tag?: string;
              desc?: string;
              color?: string;
              tech?: string;
              img?: string;
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
                bgcolorCover="bg-slate-500"
                btnHover="Learn More"
              />
            );
          }
        )}
      </div>
    </div>
  );
}

export default Project;
