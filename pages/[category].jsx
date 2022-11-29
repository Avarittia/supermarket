import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import StoreContext from "../context/StoreContext";

const category = () => {
  const { products, loading } = useContext(StoreContext);
  console.log(products)




  const router = useRouter();
  const  {category} = router.query;

 

  const filter = products.filter((items) => items.categorySlug.toLowerCase() === category)
  console.log(filter)
  if(loading){
    return <>loading</>
  }


  return <div>
    {
      filter.map(items=>{
        return (
          <div>
            <div>{items.title}</div>
            {category}
          </div>
        )
      })
    }
  </div>;
};

export default category;
