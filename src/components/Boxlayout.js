import React from "react";
import stat1 from '../assets/Stat1.jpg'

function Boxlayout({ fh, fv, sh, sv, link }) {
  return (
    <div className="boxlayout">
      <div className="info">
        <p>{fh}</p>
        <h3>{fv}</h3>
        <p>{sh}</p>
        <h3>{sv}</h3>
      </div>
      <div>
      </div>
    </div>
  );
}

export default Boxlayout;
