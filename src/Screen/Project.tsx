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
      tag: "Next Js",
      color: "bg-pink-500",
      img: BertanyaApp,
      desc: "Questions and answers project with user features can earn badges",
    },
    {
      name: "Student Payment App",
      tech: "React Js (Minimal UI) | Material UI | React Query | Express | Node Js | Sequalize | mySQL",
      color: "bg-cyan-500",
      img: StudentPaymentApp,
      tag: "React JS (Minimal UI)",
      desc: "Application for schools where its use is to record a list of student bills and students can see the number of bills lacking or a list of bills",
    },
    {
      name: "Gov Management App",
      tech: "React JS | Material UI | React Query | Supabase",
      tag: "React Js",
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
      tag: "React Native",
      color: "bg-teal-500",
      img: RestaurantApp,
      desc: "Restaurant app with easy checkout flow",
    },
  ];
  return (
    <div>
      <p className=" text-3xl text-center font-bold mb-20">My Work</p>
      <div className="flex gap-5 flex-wrap justify-center">
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
                tech={item.tech}
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
