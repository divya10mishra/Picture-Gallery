import React, {useState} from 'react'
import Article from './article'
import {data} from '../utils/ArticleData'

function Body() {
    const [page, setPage] = useState(1)
    const selectPageHandler=(selectedPage)=>{
        setPage(selectedPage)
    }
    return (
        <div>
             <div>
     {
       data.slice(page*3-3,page*3).map(item=>{
        return(<Article item={item}/>)
       })
     }
    </div>
    <span style={{cursor:'pointer'}} onClick={()=>selectPageHandler(page-1)}>⏮️</span>
   {[...Array(data.length/3)].map((num,i)=>{return <span style={{border:'1px solid gray', padding:'5px', margin:'1px', cursor:'pointer'}}
    onClick={()=>selectPageHandler(i+1)}>{i+1}</span>})}
    <span style={{cursor:'pointer'}} onClick={()=>selectPageHandler(page+1)}>⏭️</span>
        </div>
    )
}

export default Body
