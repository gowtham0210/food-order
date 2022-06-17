import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/Home.css"

function Home() {
    return ( 
        <div className='home'>
            <div className='headerContainer'>
                <h1>Noodles Food Corner</h1>
                <p>INDIAN FOOD AT A CLICK</p>
                <Link to='/menu'>
                <button>Order Now</button>
                </Link>


            </div>
        </div>
        
     );
}

export default Home;
