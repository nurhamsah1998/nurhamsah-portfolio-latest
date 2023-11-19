import NotFound from "assets/SVG/NotFound";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className=" text-center">
        <NotFound />
        <p className=" text-center mt-5 text-xl">Opps! Page not found</p>
        <button onClick={() => navigate("/")} className="btn mt-3">
          Home
        </button>
      </div>
    </div>
  );
}

export default PageNotFound;
