import React from "react";
const AddressMap = () => {
  return (
    <div className="google-map-code">
      <iframe
        src="https://maps.google.com/maps?q=LEs%20Jolies%20Brindilles&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width="450"
        height="400"
        frameborder="0"
        style={{ border: 0 , marginTop: "100px"}}
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  );
};
export { AddressMap };
