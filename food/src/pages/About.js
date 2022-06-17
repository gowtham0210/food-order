import React from 'react';
import fooda from '../assets/fooda.jpeg'
import '../styles/About.css'

function About() {
    return (  
        <div className='about'>
            <div className='aboutTop'
                style={{backgroundImage:`url(${fooda})`}}> 

            </div>
            <div className='aboutBottom'>
                <h1>About us</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem 
                    integer vitae justo eget magna fermentum iaculis eu non. Aliquam 
                    etiam erat velit scelerisque in dictum non consectetur. Commodo 
                    ullamcorper a lacus vestibulum sed. Amet purus gravida quis 
                    blandit turpis cursus in hac habitasse. Platea dictumst quisque 
                    sagittis purus sit amet volutpat consequat mauris. Purus non 
                    enim praesent elementum. Arcu risus quis varius quam quisque id 
                    diam vel. Arcu vitae elementum curabitur vitae nunc. Pellentesque
                     habitant morbi tristique senectus et netus et malesuada fames. 
                     Quam vulputate dignissim suspendisse in.
                </p>
            </div>

        </div>
    );

}

export default About;