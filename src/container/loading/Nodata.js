import React from "react";
import "./nodata.css";
import { Link  } from "react-router-dom";

function Nodata() {
  return (
    <section className='page_404'>
      <div className='four_zero_four_bg'>
        <h3 className='h2'>No products selected yet</h3>
      </div>
      <div className='contant_box_404'>
        <Link to="/">
          Go to Home
        </Link>
      </div>
    </section>
  );
}

export default Nodata;
