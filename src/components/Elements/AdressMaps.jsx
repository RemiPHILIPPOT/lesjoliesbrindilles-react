import React from "react";
const AddressMap = () => {
  return (
    <div className="google-map-code">
      <iframe
        src="https://maps.google.com/maps?q=LEs%20Jolies%20Brindilles&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width="350"
        height="400"
        frameborder="0"
        style={{ border: "" , marginTop: "50px"}}
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  );
};
export { AddressMap };
