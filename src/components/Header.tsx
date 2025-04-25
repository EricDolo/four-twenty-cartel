import { SidebarTrigger } from "../components/ui/sidebar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full max-w-4xl mx-auto text-center mt-8 mb-10">
      <>
        <SidebarTrigger />
      </>
      <div>
        <Link to="/">
        <img
          src="/four-twenty-cartel-logo.jpg" // reference the logo image in the public folder
          alt="Four Twenty Cartel Logo"
          className="w-42 h-40 mx-auto " // adjust the size of the logo as needed
        />
        <h1 className="shop-title text-5xl md:text-6xl font-extrabold mb-2 text-primary drop-shadow-lg">
              Four Twenty Cartel
        </h1>
        </Link>
      </div>
    </header>
  );
}
