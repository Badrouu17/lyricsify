import React from "react";

const SmallDevices = () => {
  return (
    <div className="advice">
      <img
        className="advice-logo"
        // eslint-disable-next-line no-undef
        src={require("./../scss/Lyricsify.png")}
        alt="Logo"
      />
      <p className="advice-content">please use the app on a bigger device.</p>
    </div>
  );
};

export default SmallDevices;
