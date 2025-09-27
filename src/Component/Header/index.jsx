import { useState } from "react";
import { RiMenu5Fill, RiCloseLine } from "react-icons/ri";
import { useNavigate, Link } from "react-router-dom";


const Menu = [
    {
        ID: 1,
        name: "Home",
        link: "/",
    },
    {
        ID: 2,
        name: "About Us",
        link: "/about",
    },
    {
        ID: 3,
        name: "Services",
        link: "/Services",
    },
    {
        ID: 4,
        name: "Contact Us",
        link: "/contact",
    },
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-20 py-[20px] lg:py-[30px]">
        <div className="container-fluid flex justify-between items-center">
          <div className="w-[150px] lg:w-[250px]">
            <Link to="/"><img src="/logo.svg" alt="Logo" /></Link>
          </div>

          {/* Menu Button (hidden when open) */}
          {!menuOpen && (
            <div className="cursor-pointer text-3xl text-[#C4996B] z-30"
              onClick={() => setMenuOpen(true)}
            >
              <RiMenu5Fill />
            </div>
          )}
        </div>

        {/* Fullscreen Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black/95 text-white flex flex-col items-center justify-center gap-8 text-2xl transform transition-transform duration-500 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >

          <div className="flex justify-between items-center py-5 px-[22px] lg:px-[60px] absolute top-0 left-0 w-full">
            <ul>
              <li><Link to="/" className="hover:text-white text-[#C4996B] text-[14px] md:text-[16px]">Home</Link></li>
            </ul>
            <div className="cursor-pointer text-[#C4996B]" onClick={() => setMenuOpen(false)}>
              <RiCloseLine />
            </div>
          </div>
          <ul className="flex flex-col gap-4 lg:gap-8 text-[#c4996b] hover:text-[#614c36]">
              {Menu.map((data) => (
                <li onClick={() => navigate(data.link)} key={data.ID} className="cursor-pointer text-[18px] hover:text-white md:text-[32px] text-center uppercase font-normal">
                  {data.name}
                </li>
              ))}
            </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
