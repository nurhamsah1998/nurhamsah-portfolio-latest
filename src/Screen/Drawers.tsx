import { IoMenu } from "react-icons/io5";
import React from "react";

function Drawers({
  children,
  handleClickServices,
  handleClickApp,
  handleClickLogo,
  handleClickAboutMe,
}: {
  children: JSX.Element;
  handleClickServices?: (() => void) | any;
  handleClickApp?: (() => void) | any;
  handleClickLogo?: (() => void) | any;
  handleClickAboutMe?: (() => void) | any;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="drawer">
      <input
        checked={open}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          return;
        }}
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content flex flex-col">
        {/* Drawers */}
        <div className="max-w-[1400px] mx-auto navbar bg-white sticky top-0 z-[999]">
          <div className="flex-none lg:hidden">
            <label
              onClick={() => setOpen(!open)}
              htmlFor="my-drawer-3"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">Nurhamsah</div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Drawers menu content here */}
              <li>
                <a className=" text-sm" onClick={handleClickAboutMe}>
                  About Me
                </a>
              </li>
              <li>
                <a className=" text-sm" onClick={handleClickServices}>
                  Services
                </a>
              </li>
              <li>
                <a className=" text-sm" onClick={handleClickApp}>
                  App
                </a>
              </li>
              <li>
                <a className=" text-sm" onClick={handleClickLogo}>
                  Logo Design
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>{children}</div>
      </div>
      <div className="drawer-side">
        <label
          onClick={() => setOpen(!open)}
          htmlFor="my-drawer-3"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 h-full bg-slate-800 text-white">
          <div className="mb-10 bg-white p-4">
            <p className=" text-slate-800 font-bold">MENU</p>
          </div>
          {/* Sidebar content here */}
          <li>
            <a
              className=" text-sm"
              onClick={() => {
                handleClickAboutMe();
                setOpen(!open);
              }}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              className=" text-sm"
              onClick={() => {
                handleClickServices();
                setOpen(!open);
              }}
            >
              Services
            </a>
          </li>
          <li>
            <a
              className=" text-sm"
              onClick={() => {
                handleClickApp();
                setOpen(!open);
              }}
            >
              App
            </a>
          </li>
          <li>
            <a
              className=" text-sm"
              onClick={() => {
                handleClickLogo();
                setOpen(!open);
              }}
            >
              Logo Design
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Drawers;
