import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { useState } from "react";
import { SiReact } from "react-icons/si";

const bookmarks = ["tech", "projects", "contact"];
const sections = ["Technologies", "Projects", "Contact"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  function scrollTo(id) {
    document.getElementById(id).scrollIntoView({ align: true });
  }

  return (
    <div className="relative">
      <header
        id="top"
        className="bg-[#324766] flex justify-center 
        sticky top-0 w-full z-50 h-[75px]"
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
                <div key={page} className="mx-2">
                  <button className="p-1">
                    {/* <Link passHref href={"#" + page}> */}
                    <a onClick={() => scrollTo(page)}>{sections[index]}</a>
                    {/* </Link> */}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
      <div className="h-[75px]" />
    </div>
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
