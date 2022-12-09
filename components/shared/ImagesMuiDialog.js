import { Dialog, DialogContent, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { IoIosArrowForward, IoIosArrowBack, IoMdClose } from "react-icons/io";
import { EffectFade } from "swiper";
import { useEffect } from "react";
import { useReducer } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function ImagesMuiDialog({ imgs, link }) {
  const [openDialog, setOpenDialog] = useState(false);
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div className="md:basis-2/3 w-full h-full absolute md:static">
      <ImgButton imgs={imgs} onClick={() => setOpenDialog(true)} />
      <Dialog
        maxWidth="md"
        fullScreen={!md}
        open={openDialog}
        onClose={() => setOpenDialog(false)}
      >
        <DialogContent className="p-6">
          <div className="flex justify-end pb-5">
            <button className="" onClick={() => setOpenDialog(false)}>
              <IoMdClose className="w-6 h-6 fill-gray-500" />
            </button>
          </div>
          <DialogImgsSwiper imgs={imgs} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

function DialogImgsSwiper({ imgs }) {
  return (
    <Swiper autoHeight modules={[EffectFade]} effect="fade">
      {imgs.map((img, i) => (
        <SwiperSlide key={img + i}>
          <img
            src={img}
            alt={img}
            className="object-cover border rounded shadow-sm"
          />
        </SwiperSlide>
      ))}
      <CustomNavigation />
    </Swiper>
  );
}

const CustomNavigation = () => {
  const swiper = useSwiper();
  const ButtonClassName = " p-1 px-2 ";
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    forceUpdate();
  }, []);

  return (
    <div
      className="flex w-fit mx-auto
        rounded border border-gray-300 
        divide-x-2 divide-gray-200
        mt-4"
    >
      <button
        className={ButtonClassName + " aspect-square"}
        onClick={() => {
          swiper.slidePrev();
          forceUpdate();
        }}
      >
        <IoIosArrowBack />
      </button>
      <div className={ButtonClassName + " px-3"}>{`${
        swiper.activeIndex + 1
      } of ${[...swiper.slides].length}`}</div>
      <button
        className={ButtonClassName}
        onClick={() => {
          swiper.slideNext();
          forceUpdate();
        }}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

function ImgButton({ imgs, onClick }) {
  return (
    <button
      onClick={onClick}
      className="hover:cursor-pointer relative flex group h-full"
    >
      <img
        className="rounded-md z-10 object-cover w-full h-full"
        src={imgs[0]}
      />
      <div className="group-hover:opacity-0 transition-all duration-500 w-full h-full absolute bg-[#8B93AD] opacity-50 top-0 z-20" />
    </button>
  );
}
