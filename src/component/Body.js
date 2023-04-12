import React, { useState } from "react";
import Article from "./article";
import pictureData from "../utils/ArticleData";

function Body() {
  const [page, setPage] = useState(1);

  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= data?.products.length / 3){
        console.log(selectedPage)
        setPage(selectedPage);
    }
   
  };
  const data = pictureData()
   console.log(data?.products,"picture")

  return (
    <div>
      <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
        {data?.products?.slice(page * 6 - 6, page * 6).map((item) => {
          return <Article item={item} />;
        })}
      </div>
      <div style={{ marginLeft: "70%" }}>
        {page > 1 && <span
          style={{ cursor: "pointer" }}
          onClick={() => selectPageHandler(page - 1)}
        >
          ⬅️
        </span>}
        {[...Array(data?.products?.length / 6)].map((num, i) => {
          return (
              
            <span className={page === i+1 ? 'pagination' : 'pagination2' }
             
              onClick={() => selectPageHandler(i + 1)}
            >
              {i + 1}
            </span>
          );
        })}
       {page < data?.products.length/6 && <span
          style={{ cursor: "pointer" }}
          onClick={() => selectPageHandler(page + 1)}
        >
          ➡️
        </span>}
      </div>
    </div>
  );
}

export default Body;
