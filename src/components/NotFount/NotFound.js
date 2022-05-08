import React from "react";
import notFound from "../../images/notFound.jpg";

const NotFound = () => {
  return (
    <div>
      <h1
        style={{
          fontSize: "70px",
          fontWeight: "900",
          color: "#FF626D",
          paddingTop: "30px",
        }}
      >
        SORRY
      </h1>
      <h5
        style={{
          fontSize: "25px",
          fontWeight: "700",
          color: "#7CDADA",
          paddingBottom: "30px",
        }}
      >
        We could not find that page.
      </h5>
      <img style={{ height: "570px", width: "100%" }} src={notFound} alt="" />
    </div>
  );
};

export default NotFound;
