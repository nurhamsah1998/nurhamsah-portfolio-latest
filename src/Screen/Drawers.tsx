import { IoMenu } from "react-icons/io5";

function Drawers({
  children,
  handleClickServices,
  handleClickApp,
}: {
  children: JSX.Element;
  handleClickServices?: () => void;
  handleClickApp?: () => void;
}) {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Drawers */}
        <div className="w-full navbar bg-white sticky top-0 z-[999]">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
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
                <a onClick={handleClickServices}>Services</a>
              </li>
              <li>
                <a onClick={handleClickApp}>App</a>
              </li>
              <li>
                <a>Logo Design</a>
              </li>
            </ul>
          </div>
        </div>
        <div>{children}</div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200">
          {/* Sidebar content here */}
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>App</a>
          </li>
          <li>
            <a>Logo Design</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Drawers;
