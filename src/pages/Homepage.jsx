import React, { useEffect, useState } from "react";
import MemeCard from "../components/Card";
import { getAllMemes } from "../api/memes";

const Homepage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getAllMemes().then( memes => setData(memes.data.memes));
    }, []);
    return(
        <div className="row">
            {
                data.map((element) => <MemeCard img={element.url} title={element.name}/>)
            }
        </div>
    );
};

export default Homepage;