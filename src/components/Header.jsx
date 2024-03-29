import React, { useState, useContext } from "react";
import { storeContext } from "./../global/store";
import Switch from "react-switch";
import { IconContext } from "react-icons";

import { IoIosSunny, IoIosMoon } from "react-icons/io";

// eslint-disable-next-line react/prop-types
const Header = ({ search }) => {
  const { store, setStore } = useContext(storeContext);
  const [checked, setChecked] = useState(store.theme === "dark" ? false : true);

  const handleChange = (checked) => {
    checked
      ? setStore({ ...store, theme: "light" })
      : setStore({ ...store, theme: "dark" });
    setChecked(checked);
  };

  return (
    <header className={`float-right h-32 flex-none`}>
      <div className={` ${search ? "float-right mr-4 mt-4" : ""}`}>
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
                  // paddingRight: 2,
                }}
              >
                <IoIosMoon></IoIosMoon>
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
                  // paddingRight: 2,
                }}
              >
                <IoIosSunny></IoIosSunny>
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
