

  import React, {useState, useEffect} from 'react'
  
  const ArticleData = () => {
  const [pictues, setPictures] = useState(null)

  

  useEffect(() => {
    getPictures()
     }, [])

    async function getPictures(){
          const data = await fetch('https://dummyjson.com/products')
          const res =  await data.json()
          setPictures(res)
          console.log(res,"res")
    }
      return pictues
  }
  
  export default ArticleData
  
