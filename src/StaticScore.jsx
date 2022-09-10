import React from "react";

import { useState } from "react";

import './Score.css';

export default function StaticScore() {
    const test_data = [{ country: "Pakistan", score: 23 },
                 { country: "Pakistan", score: 127 },
                 { country: "India", score: 3 },
                 { country: "India", score: 71 },
                 { country: "Australia", score: 31 },
                 { country: "India", score: 22 },
                 { country: "Pakistan", score: 81 },];

  

    let[avg,setAvg]=useState(0);
    let[avg2,setAvg2]=useState(0); 

    function handleAvg(e){

         let country=e.target.value;
         let contry1=country.charAt(0).toUpperCase() + country.slice(1);
         setAvg(0);
         let ans=0;
         let count=0;
         
         let total=test_data.reduce((acc,ele)=>{
            if(ele.country===contry1){
                acc=acc+ele.score;
                count++;
            }
            return acc;

         },ans)

         if(!isNaN(Math.round(total/count)))
      setAvg((total/count).toFixed(2))

    }    
    
    function handleAvg2(e){

        let country=e.target.value;
        let contry1=country.charAt(0).toUpperCase() + country.slice(1);

        setAvg2(0);
        let ans=0;
        let count=0;
        let total=test_data.reduce((acc,ele)=>{
           if(ele.country===contry1){
               acc=acc+ele.score;
               count++;
           }
           return acc;

        },ans)

        if(!isNaN(Math.round(total/count)))
      setAvg2((total/count).toFixed(2))


   }       

    return (
        <>
            <div className="row">
                <div className="country">
                    <form>
                        The Country: <input className="country-input"
                            type="text" onChange={(e)=>handleAvg(e)} />
                    </form>
                </div>
                <div className="average">
                    The Average: {avg>0?avg :"_"}
                </div>
                {avg>0 &&<div className="horiz-bar" style={{width:2*avg,height:"20px"}}>&nbsp;</div>}
            </div>

            <br></br>
            <hr/>

            <div className="row">
                <div className="country">
                    <form>
                        The Country: <input className="country-input"
                            type="text" onChange={(e)=>handleAvg2(e)}/>
                    </form>
                </div>
                <div className="average">
                    The Average: {avg2>0?avg2 :"_"}
                </div>
                {avg2>0 &&<div className="horiz-bar" style={{width:2*avg2,height:"20px"}}>&nbsp;</div>}
            </div>
        </>
    );
}