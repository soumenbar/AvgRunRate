import React from "react";
import axios from "axios";
import './Score.css';
import { useEffect, useState } from "react";

export default function DynamicScore() {
    const [api_data, setApi_data] = useState([]);
    let [avg, setAvg] = useState(0);
    let [avg2, setAvg2] = useState(0);

    useEffect(() => {

        axios.get('https://assessments.reliscore.com/api/cric-scores/').

            then((res) => setApi_data([...api_data, res.data])).
            catch((error) => console.log(error))

    }, [])

    console.log(api_data);

    function handleAvg(e) {

        let country = e.target.value;
        let contry1 = country.charAt(0).toUpperCase() + country.slice(1);
        setAvg(0);
        let ans = 0;
        let count = 0;

        let total = api_data[0].reduce((acc, ele) => {
            
            if (ele[0] === contry1) {
                acc = acc + ele[1];
                count++;
            }
            return acc;

        }, ans)

        if (!isNaN(Math.round(total / count)))
            setAvg((total/count).toFixed(2))

    }

    function handleAvg2(e) {

        let country = e.target.value;
        let contry1 = country.charAt(0).toUpperCase() + country.slice(1);

        setAvg2(0);
        let ans = 0;
        let count = 0;
        let total = api_data[0].reduce((acc, ele) => {
            
            if (ele[0] === contry1) {
                acc = acc + ele[1];
                count++;
            }
            return acc;

        }, ans)

        if (!isNaN(Math.round(total / count)))
            setAvg2((total/count).toFixed(2))
    }


    return (
        <>
            <div className="row">
                <div className="country">
                    <form>
                        The Country: <input className="country-input"
                            type="text" onChange={(e) => handleAvg(e)} />
                    </form>
                </div>
                <div className="average">
                    The Average: {avg>0?avg :"_"}
                </div>
                {avg > 0 && <div className="horiz-bar" style={{ width: 2 * avg ,height:"20px"}}>&nbsp;</div>}
            </div>

            <br></br>
            <hr/>

            <div className="row">
                <div className="country">
                    <form>
                        The Country: <input className="country-input"
                            type="text" onChange={(e) => handleAvg2(e)} />
                    </form>
                </div>
                <div className="average">
                    The Average: {avg2>0?avg2 :"_"}
                </div>
                {avg2 > 0 && <div className="horiz-bar" style={{ width: 2 * avg2,height:"20px" }}>&nbsp;</div>}
            </div>

        </>
    );
}