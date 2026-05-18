import React, { useEffect, useState } from "react";
import "./Card.css";

export const Card = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/listings')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, []); // Empty array ensures this runs once

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card-container2" >
      {data.map((listing) => (
        <div key={listing.id} className="card-container" >
          <div className="card-title">{listing.title}</div>
          <div className="card-jobtitle">{listing.company.name}</div>
          <div className="card-date">{listing.start_date}</div>

          <a href="cardpage" className="card-link">Bekijk afstudeerproject</a>
        </div>
      ))}
    </div>
  );
};

//
//     <div className="card-container" >
//       <div className="card-title">Frontend developer</div>
//       <div className="card-jobtitle">Banana Computers</div>
//       <div className="card-date">Begindatum: 01-01-2023</div>
//
//       <a href="cardpage" className="card-link">Bekijk afstudeerproject</a>
//     </div>
{/*     <div className="card-container"> */}
{/*       <div className="card-title">Backend developer</div> */}
{/*       <div className="card-jobtitle">Zanzibar Web Services</div> */}
{/*       <div className="card-date">Begindatum: 01-01-2023</div> */}

{/*       <a href="cardpage" className="card-link">Bekijk afstudeerproject</a> */}
{/*     </div> */}


{/*     <div className="card-container"> */}
{/*       <div className="card-title">Fullstack Developer</div> */}
{/*       <div className="card-jobtitle">ACME</div> */}
{/*       <div className="card-date">Begindatum: 01-01-2023</div> */}

{/*       <a href="cardpage" className="card-link">Bekijk afstudeerproject</a> */}
{/*     </div> */}
{/* </div> */}

