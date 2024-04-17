import BertanyaApp from "assets/ProjectIMG/bertanya.png";
import MoneyApp from "assets/ProjectIMG/money.png";
import TodoApp from "assets/ProjectIMG/todo.png";
import RestaurantApp from "assets/ProjectIMG/restaurant.png";
import StudentPaymentApp from "assets/ProjectIMG/student_payment_app.png";

import Designer from "assets/SVG/Designer";
import MobileApplication from "assets/SVG/MobileApplication";
import WebApplication from "assets/SVG/WebApplication";

import C1 from "assets/logoProject/1.png";
import C2 from "assets/logoProject/2.png";
import C3 from "assets/logoProject/3.png";
import C4 from "assets/logoProject/4.png";
import C5 from "assets/logoProject/5.png";
import C6 from "assets/logoProject/6.png";
import C7 from "assets/logoProject/7.png";
import C8 from "assets/logoProject/8.png";
import C9 from "assets/logoProject/9.png";
import C10 from "assets/logoProject/10.png";
import C11 from "assets/logoProject/11.png";
import C12 from "assets/logoProject/12.png";
import C13 from "assets/logoProject/13.png";
import C14 from "assets/logoProject/14.png";
import C15 from "assets/logoProject/15.png";
import C16 from "assets/logoProject/16.png";
import C17 from "assets/logoProject/17.png";
import C18 from "assets/logoProject/18.png";
import C19 from "assets/logoProject/19.png";
import C20 from "assets/logoProject/20.png";
import C21 from "assets/logoProject/21.png";
import C22 from "assets/logoProject/22.png";

export const LOGOPROJECT: {
  logo: string;
  isOwned: boolean;
}[] = [
  { logo: C1, isOwned: true },
  { logo: C2, isOwned: false },
  { logo: C3, isOwned: false },
  { logo: C4, isOwned: false },
  { logo: C5, isOwned: false },
  { logo: C7, isOwned: false },
  { logo: C18, isOwned: false },
  { logo: C8, isOwned: false },
  { logo: C9, isOwned: true },
  { logo: C10, isOwned: false },
  { logo: C6, isOwned: false },
  { logo: C11, isOwned: false },
  { logo: C12, isOwned: false },
  { logo: C13, isOwned: false },
  { logo: C14, isOwned: false },
  { logo: C15, isOwned: false },
  { logo: C16, isOwned: false },
  { logo: C17, isOwned: false },
  { logo: C19, isOwned: false },
  { logo: C20, isOwned: false },
  { logo: C21, isOwned: true },
  { logo: C22, isOwned: false },
];

export interface WEB_APP {
  name: string;
  tools: string[];
  tag: string;
  img: string;
  link: string | any;
  color: string;
}
export interface SERVICE_OFFER {
  name: string;
  desc: string;
  icon: JSX.Element;
}

export const servicesOffer: SERVICE_OFFER[] = [
  {
    name: "Web Application",
    desc: "Create web apps with easy-to-use UX UI or customize as you like.",
    icon: <WebApplication size={220} />,
  },
  {
    name: "Mobile Application",
    desc: "Create android smartphone and tablet applications with various features.",
    icon: <MobileApplication size={220} />,
  },
  {
    name: "Logo Designer",
    desc: "Branding your product by creating the best and most meaningful logo here",
    icon: <Designer size={220} />,
  },
];
export const webApplication: WEB_APP[] = [
  {
    name: "Bertanya",
    tools: ["Next JS", "Tailwind CSS", "React Query", "Supabase", "Context"],
    tag: "The project I made with next js and tailwind css. starting from UI/UX design and the logo is the result of my creativity.This app uses pure Tailwind CSS, Next JS and Supabase. Application with the use of Question & Answer. so the user can ask questions and provide answers, and in this application the user can get several badges as a reward for what he has achieved. This application has an update. let's check now!",
    color: "bg-teal-600",
    img: BertanyaApp,
    link: "https://bertanya.vercel.app/",
  },
  {
    name: "Restaurant App",
    tools: [
      "React Native",
      "React Native Paper",
      "React Navigation",
      "React Redux",
      "Reanimated",
      "Gesture Handler",
    ],
    tag: "this is my own product which i am working on using react native. You can see more information by visit this repo github. All designs, starting from the layouts and promo banners, are the result of my creativity",
    color: "bg-red-500",
    img: RestaurantApp,
    link: "https://github.com/nurhamsah1998/Restaurant",
  },
  {
    name: "EDU club",
    tools: [
      "React Js (Minimal UI)",
      "Material UI",
      "Context",
      "React Query",
      "Express",
      "Sequalize",
      "mySQL",
    ],
    color: "bg-blue-500",
    img: StudentPaymentApp,
    link: null,
    tag: "This is a personal application that I'm still developing today. In the future this application will function as school management, all school activities including the learning process, practice exams, libraries, student communities, research communities and many more can be done in one application.",
  },
  {
    name: "Money",
    tools: [
      "React Native",
      "React Navigation",
      "Native Base",
      "React Redux",
      "Reanimated",
      "Gesture Handler",
    ],
    tag: "Financial management application This is my newest product which is still under development. i will focus on this app for android users",
    color: "bg-orange-500",
    img: MoneyApp,
    link: null,
  },
  {
    name: "Simple Todo App",
    tools: ["React Vite Typescript", "Jotai", "Supabase", "Chakra UI"],
    tag: "Simple todo list application. You can create todos that you want to work on with other people by inviting them to your project list. You can also set permissions for each person in the project. With the support of a responsive smartphone display, you can build great projects with your friends. Easy and informative Kanban display for your great team",
    color: "bg-orange-500",
    img: TodoApp,
    link: "https://todo-premium.vercel.app",
  },
];
