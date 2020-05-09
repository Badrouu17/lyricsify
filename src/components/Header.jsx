import React, { useState } from "react";
import Switch from "react-switch";
import { IconContext } from "react-icons";

import { IoIosSunny, IoIosMoon } from "react-icons/io";

const Header = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (checked) => {
    setChecked(checked);
  };

  return (
    <header className=" h-32 flex-none">
      <div className=" float-right mt-4 mr-4">
        <IconContext.Provider
          value={{ size: "0.9em", style: { color: "#fff" } }}
        >
          <Switch
            onChange={handleChange}
            checked={checked}
            offColor="#6b46c1"
            offHandleColor="#b794f4"
            onColor="#6b46c1"
            onHandleColor="#b794f4"
            uncheckedIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 15,
                  color: "orange",
                  paddingRight: 2,
                }}
              >
                <IoIosSunny></IoIosSunny>
              </div>
            }
            checkedIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 15,
                  color: "orange",
                  paddingRight: 2,
                }}
              >
                <IoIosMoon></IoIosMoon>
              </div>
            }
            handleDiameter={30}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
          ></Switch>
        </IconContext.Provider>
      </div>
    </header>
  );
};

export default Header;
