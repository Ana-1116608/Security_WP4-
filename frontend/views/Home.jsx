import ListingCard from "../components/ListingCard";
import React, { useEffect, useState} from "react";
import Paginatie from "../components/Paginatie";

export const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(3);
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

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="view" >
      {currentPosts.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
      <Paginatie totalPosts={data.length} postsPerPage={postPerPage} />
    </div>
  );
};
