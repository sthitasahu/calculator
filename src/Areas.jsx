// eslint-disable-next-line no-unused-vars
import React,{useState,useEffect} from 'react'

const Areas = () => {
    const [areas,setareas]=useState([])
    const  [error,seterror]=useState(null)
    async function getAreas() {
        
        try{
          const data= await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
          const result=await data.json();
          console.log(result)
          setareas(result.meals)
        }
        catch(err){
            seterror(err.message())
        }

    }
    useEffect(()=>{
        getAreas()
    },[])


  return (
    <div>
        All Areas:
        {error && <p>Error: {error}</p>}
        {areas.map((area, index) => (
          <div  key={index}>{area.strArea}
          </div> 
        ))}
    </div>
  )
}

export default Areas