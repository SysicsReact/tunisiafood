import React, { useState } from "react";

const Pagination = ({currentPage, setCurrentPage, productsPerPage, totalProducts}) => {

     const pageNumbers = [];
     const totalPages = totalProducts / productsPerPage;
    
  // Limit the page Numbers shown
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  // Paginate
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // GO to next page
  const paginateNext = () => {
    setCurrentPage(currentPage + 1);
    // Show next set of pageNumbers
    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  // GO to prev page
  const paginatePrev = () => {
    setCurrentPage(currentPage - 1);
    // Show prev set of pageNumbers
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

   for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
     pageNumbers.push(i);
   }

  return (
     
     <div className="row">
          <div className="col-lg-12">
               <div className="bottom-paginate"> 
                    <ul className="pagination">
                    <p className="page-info"> Affichage de </p>
                    <li className="page-item"> <button className="header-widget">
                         <a className="page-link">{`${currentPage}`}</a></button></li>
                    <p className="page-info"> {` Sur `} </p>
                    <li className="page-item"> <button className="header-widget">
                         <a className="page-link">{`${Math.ceil(totalPages)}`}</a></button></li>
                         {currentPage!=pageNumbers[0]&&
                          <li className= "page-item"  onClick={paginatePrev}>
                          <a className="page-link">
                               <i className="fas fa-long-arrow-alt-left"></i>
                          </a>
                     </li>
                         }
                    {pageNumbers.map((number)=>{
                          if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit){
                        return(
            <li className="page-item" >
              <button className="header-widget"> <a className= {currentPage === number ? `page-link active` : `page-link`}
            onClick={() =>paginate(number)} 
            key={number}>{number}</a></button>
            </li>
                         );}
                    })}
                    {currentPage != pageNumbers[pageNumbers.length - 1]&&
                          <li className="page-item" onClick={paginateNext}>
                              <button className="header-widget">
                          <a className="page-link" >
                               <i className="fas fa-long-arrow-alt-right"></i>
                          </a></button>
                     </li>
                    }
                    
                    </ul>
               </div>
          </div>
     </div>
  )
}

export default Pagination