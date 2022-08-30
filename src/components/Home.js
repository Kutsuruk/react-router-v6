import React from "react";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()

    return(
        <div>
            Homepage

            <div>
                <button onClick={() => navigate('order-summary', {replace: true})}>Check order</button>
            </div>
        </div>
    )
}

export default Home