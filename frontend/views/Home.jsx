import ListingCard from "../components/ListingCard";
import React, { useEffect, useState} from "react";

export const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/listings?offset=1&limit=3')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, []); // Empty array ensures this runs once

  

  return (
    <div className="view" >
      {data.map((listing) => (
        <ListingCard
        key={listing.id} listing={listing}>
        </ListingCard>
      ))}
    </div>
  );
};
