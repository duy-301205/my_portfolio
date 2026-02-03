import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-zinc-900/80 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-14 h-16 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-9 w-9 rounded-full" />
          <span className="font-black text-white">DyuHM</span>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-10 text-lg font-semibold ml-auto mr-6">
          {[
            { to: "/", label: "Home" },
            { to: "/blog", label: "Blog" },
            { to: "/motivation", label: "Motivation" },
            { to: "/projects", label: "Projects" },
            { to: "/about", label: "About" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive
                  ? "text-white relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-white"
                  : "text-zinc-300 hover:text-white transition"
              }
            >
              {label}
            </NavLink>
          ))}

          <div className="h-4 w-[1px] bg-zinc-700 mx-2" />
        </nav>

        {/* Right */}
        <div className="flex items-center gap-5">
          <button className="text-zinc-400 hover:text-white transition">
            🌙
          </button>
          <button className="text-zinc-400 hover:text-white transition">
            ⌘
          </button>
        </div>
      </div>
    </header>
  );
}
