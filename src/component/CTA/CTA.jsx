import React from "react";
import "./CTA.css";

const CTA = () => {
  return (
    <div className="cta-container">
      <div className="cta-child cta-child-header">
        <h2>Sewa Mobil di (Lokasimu) Sekarang</h2>
      </div>
      <div className="cta-child cta-child-two">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
      </div>
      <div className="cta-child cta-child button">
        <button>Mulai Sewa Mobil</button>
      </div>
    </div>
  );
};

export default CTA;
