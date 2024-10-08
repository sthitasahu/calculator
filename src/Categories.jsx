/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

const Categories = () => {
    const [Categories,setCategories]=useState([])
    const [error,seterror]=useState(null)
    

    async function getCategories() {
        try{
          const data= await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
          const result=await data.json();
          console.log(result)
          setCategories(result.meals)
        }
        catch(err){
            seterror(err.message())
        }

    }
    useEffect(()=>{
        getCategories()
    },[])


  

  return (
     <>
      <h1 >Meal Categories</h1>
      {error && <p>Error: {error}</p>}
      <ul>
        
        { Categories.map((category, index) => (
          <li key={index}>{category.strCategory}</li> // Display each category name
        ))}
      </ul>
    </>
  );
}



export default Categories