import { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEllipsisH,
  FaUser,
} from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);

  const handleMenuToggle = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  return (
    <div className="nav-default container mx-auto px-8   bg-neutral-950 ease-in duration-300  z-50 fixed top-0 ">
      <nav className="mx-8   flex items-center justify-between">
        <div className="font-bold flex flex-shrink-0 items-center text-3xl">
          <button onClick={handleMenuToggle}>
            {showMenu ? <FaUser /> : <FaEllipsisH />}
          </button>
        </div>

        <div className="m-8 flex items-center justify-center gap-4 text-2xl ease-in duration-100">
          {showMenu ? (
            <>
              <a href="" className="icon-style">
                about
              </a>
              <a href="" className="icon-style">
                work
              </a>
              <a href="" className="icon-style">
                contact
              </a>
            </>
          ) : (
            <>
              <a
                href="https://www.linkedin.com/in/justinlam747/"
                target="_blank"
              >
                <FaLinkedin className="icon-style size-8" />
              </a>
              <a
                href="https://www.shutterstock.com/search/doraemon-character?image_type=vector"
                target="_blank"
              >
                <FaGithub className="icon-style size-8" />
              </a>
              <a href="https://www.instagram.com/60jus/" target="_blank">
                <FaInstagram className="icon-style size-8" />
              </a>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
