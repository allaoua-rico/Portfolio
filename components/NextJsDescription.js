import React from "react";
import Popover from "@mui/material/Popover";
import { SiNextdotjs, SiTailwindcss, SiReact } from "react-icons/si";
import Nextjs from "../public/svg/Nextjs";
export default function FrontEndDescription({ next }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const handlePopoverOpen2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handlePopoverClose2 = () => {
    setAnchorEl2(null);
  };

  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);

  return (
    <ul className="list-disc gap-y-2 flex flex-col text-[#a7bbd6] ">
      <li>
        Optained my{" "}
        <span
          className="text-[#85E9D9] underline font-semibold"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          Responsive Web Design Certification
        </span>
        <Popover
          disableScrollLock={true}
          id="mouse-over-popover"
          sx={{
            maxWidth: "100%",
            pointerEvents: "none",
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <img className="w-100 h-60" src="/fcc_rwd.png" />
        </Popover>{" "}
        and my{" "}
        <span
          className="text-[#85E9D9] underline font-semibold"
          onMouseEnter={handlePopoverOpen2}
          onMouseLeave={handlePopoverClose2}
        >
          {" "}
          Javascript Algorithms And Data Structures Certification
        </span>
        <Popover
          disableScrollLock={true}
          id="mouse-over-popover2"
          sx={{
            pointerEvents: "none",
          }}
          open={open2}
          anchorEl={anchorEl2}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onClose={handlePopoverClose2}
          disableRestoreFocus
        >
          <img className="w-100 h-60" src="/fcc_js.png" />
        </Popover>
      </li>
      <li className=" ">
        Familiarized with React{" "}
        <SiReact className=" animate-[spin_4s_linear_infinite] inline w-6 h-6 stroke-white fill-white" />{" "}
        concepts and philosophy:
        <ul className="ml-6 list-disc mt-2">
          <li>Destructure the UI into reusable function components.</li>
          <li>
            State management (child to parent, parent to child and global state
            with useContext).
          </li>
        </ul>
      </li>
      <li>
        Adopted TailwindCss{" "}
        <SiTailwindcss className="mx-1 animate-[bounce_2s_infinite] inline w-7 h-7 stroke-white fill-white" />{" "}
        and its Mobile-first approch.{" "}
      </li>
      <li>
        Migrated to{" "}
        <Nextjs className="animate-pulse inline stroke-white stroke-[5px] fill-white w-12 h-12 mx-1" />{" "}
        for its speed, pages routing, image optimisation.
      </li>
    </ul>
  );
}
