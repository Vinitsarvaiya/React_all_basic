import React, { useState } from "react"

const Map = () => {
    const countryData = [
            { state: "Gujarat", cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"] },
            { state: "Maharashtra", cities: ["Mumbai", "Pune", "Nagpur", "Aurangabad"] },
            { state: "Karnataka", cities: ["Bengaluru", "Mysuru", "Hubballi", "Mangaluru"] },
            { state: "Tamil Nadu", cities: ["Chennai", "Coimbatore", "Madurai", "Salem"] },
            { state: "Delhi", cities: ["New Delhi", "North Delhi", "South Delhi", "East Delhi"] }
          ];


    const [countystate,setcountystate]=useState(countryData) 
    const [contrycity,setcontrycity]=useState(countystate[0].cities)    

    const Handlechangestate=(e)=>{
        let states=e.target.value;
        let city = countystate.find(item=>item.state===states).cities||[]
        city?setcontrycity(city):setcontrycity([])
    }
  return (
    <div className="container">
        <select className="form-select" onClick={Handlechangestate}>
      {countystate.map((item,index)=>(
        <option key={index}>{item.state}</option>
      ))}
      </select>

      <select className="form-select" >
      {contrycity.map((item,index)=>(
        <option key={index}>{item}</option>
      ))}
      </select>
    </div>
  )
}

export default Map
