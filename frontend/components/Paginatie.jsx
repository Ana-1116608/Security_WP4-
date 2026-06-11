import React from "react";

const Paginatie = ({ currentPage, setCurrentPage, totalPages }) => {
    let Pagina = [];
    for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        Pagina.push(i)
    }

  return (
    <div>
        {
            pages.map((page,index) =>{
                return <button key={index}>Page</button>;
            })
        }  
        </div>
  );
};

export default Paginatie;
