import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { SiReact } from "react-icons/si";
import { headerHeight } from "../theme";

const bookmarks = ["tech", "projects", "contact"];
const sections = ["Technologies", "Projects", "Contact"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  function scrollTo(id) {
    const dims = document.getElementById(id).getBoundingClientRect();
    window.scrollTo(
      window.scrollX,
      dims.top + window.scrollY - headerHeight - 10
    );
  }

  return (
    <header
      id="top"
      className="bg-secondaryColor flex justify-center 
        sticky top-0 w-full z-[9999] h-headerHeight"
    >
      <div className="max-w-6xl flex-1 p-3">
        <div className="flex justify-between md:hidden">
          <div className="p-3">
            <HeaderIcon />
          </div>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {bookmarks.map((page, index) => (
                <MenuItem
                  sx={{ paddingX: 2, paddingY: 2 }}
                  key={page}
                  onClick={handleCloseNavMenu}
                  divider={index !== bookmarks.length - 1 ? true : false}
                >
                  {/* <Link passHref href={"#" + page}> */}
                  <a
                    onClick={() => scrollTo(page)}
                    className="font-semibold text-sm"
                  >
                    {sections[index]}
                  </a>
                  {/* </Link> */}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </div>

        <div className="hidden md:flex justify-between p-2">
          <div className="px-3">
            <HeaderIcon />
          </div>

          <div className="flex">
            {bookmarks.map((page, index) => (
              <button
                key={page}
                className="p-1 mx-2
                font-semibold text-lg"
                onClick={() => scrollTo(page)}
              >
                {sections[index]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

function HeaderIcon() {
  return (
    <div className="hover:scale-125 transition-all duration-200">
      <SiReact
        className="animate-[spin_5s_linear_infinite] w-7 h-7 stroke-white fill-white 
      transition-all duration-300"
      />
    </div>
  );
}

export default Header;
