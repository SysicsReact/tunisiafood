import React from "react"; 
import { Link, redirect, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Intro from "../components/Intro";
import useFetchDocument from "../components/customHooks/useFetchDocument";

const SingleProduct = () => {

          
     const {id} = useParams();
     const [product, setProduct] = useState(null);
     const {document} = useFetchDocument("products", id);
     useEffect(() => {
          //alert(id)
          setProduct(document)
          
      }, [document]);
     return(
          <>
          <Intro/>
     {product!=null &&
     <div>
          <h1>{product.name}</h1>
     </div>
     }
          </>
     )
};
export default SingleProduct;