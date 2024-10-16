import { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEllipsisH,
  FaUser,
} from "react-icons/fa";

const Navbar = () => {
  // Correctly define the state for showing the menu
  const [showMenu, setShowMenu] = useState(false);

  // Toggle menu icons when the ellipsis button is clicked
  const handleMenuToggle = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  return (
    <div className="header-style">
      <nav className="mx-8 mb-20 flex items-center justify-between">
        <div className="font-bold flex flex-shrink-0 items-center text-3xl">
          <button onClick={handleMenuToggle}>
            {showMenu ? <FaUser /> : <FaEllipsisH />}
          </button>
        </div>

        {/* Conditionally rendered icons based on `showMenu` state */}
        <div className=" m-8 flex items-center justify-center gap-4 text-2xl  ">
          {showMenu ? (
            <>
              <a
                href=""
                className="hover:scale-110 transition-transform duration-300  "
              >
                about
              </a>
              <a
                href=""
                className="hover:scale-110 transition-transform duration-300  "
              >
                work
              </a>
              <a
                href=""
                className="hover:scale-110 transition-transform duration-300  "
              >
                contact
              </a>
            </>
          ) : (
            <>
              <a
                href="https://www.linkedin.com/in/justinlam747/"
                target="_blank"
              >
                <FaLinkedin className="icon-style" />
              </a>
              <a href="https://github.com/justinlam-code" target="_blank">
                <FaGithub className="icon-style" />
              </a>
              <a href="https://www.instagram.com/60jus/" target="_blank">
                <FaInstagram className="icon-style" />
              </a>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
