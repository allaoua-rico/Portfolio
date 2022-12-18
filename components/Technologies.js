import React, { useState } from "react";
import { front, back } from "../public/data/techData.js";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { SiMongodb } from "react-icons/si";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Technologies() {
  const [value, setValue] = useState(0);
  const matches = useMediaQuery("(min-width:768px)");

  const handleChange = (event, newValue) => setValue(newValue);
  return (
    <div
      className="min-h-[560px] 
      flex flex-col items-center gap-y-14 
      lg:px-0 px-5
      w-screen lg:w-full max-w-[700px]"
    >
      <div className="flex flex-col items-center gap-y-11">
        <h2 className={` text-5xl sm:text-6xl `}>Technologies</h2>
        <p className="ml-2 mb-2 text-2xl  text-center">
          The technologies i work with are the following:
        </p>
      </div>
      <div className="flex flex-col md:flex-row text-white w-full items-center md:items-start">
        <div className="basis-3/12 ">
          <Tabs
            orientation={matches ? "vertical" : "horizontal"}
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="technologies tabs"
            sx={{
              borderColor: "#7E869D !important",
              borderRight: "solid 0px ",
              "& .Mui-selected": { color: "white !important", font: "bold" },
              "& .MuiTabs-indicator": {
                bgcolor: "white",
                width: "2px",
                left: "0px",
                position: "absolute",
                zIndex: 50,
              },
            }}
          >
            <Tab
              iconPosition="start"
              icon={front[1].component}
              label="Front-End"
              {...a11yProps(0)}
            />
            <Tab
              iconPosition="start"
              icon={back[1].component}
              label="Server-Side"
              {...a11yProps(1)}
            />
            <Tab
              iconPosition="start"
              icon={<SiMongodb className="w-6 h-6" />}
              label="DataBase"
              {...a11yProps(2)}
            />
            <div
              className={
                matches
                  ? "absolute h-full w-[2px] bg-[#7E869D] opacity-30"
                  : "absolute w-full bottom-0 h-[2px] bg-[#7E869D] opacity-30"
              }
            ></div>
          </Tabs>
        </div>
        <div className="basis-9/12 ">
          <TabPanel value={value} index={0}>
            {front[1].desc}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {back[0].desc}
          </TabPanel>
          <TabPanel value={value} index={2}>
            {back[3].desc}
          </TabPanel>
        </div>
      </div>
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, color: "white" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
    sx: { color: "#99A2BE", textTransform: "none" },
  };
}
