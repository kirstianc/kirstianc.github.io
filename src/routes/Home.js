import React from 'react';
import ian_image from '../assets/images/ian_smile.jpg';

function Home() {
    return (
        <div>
            <title style={{ fontFamily: 'Inter' }}>Ian Chavez, BS Comp Sci</title>
            <p>
                My name is 
                
                <h1>Ian Chavez.</h1> 

                <br />
                I have recently graduated with a <strong>Computer Science Bachelors</strong> at{' '} <strong>San Jose State University.</strong>
                <br />
                I am a second generation Filipino located in California, United States.
            </p>
            <div class ="image-container">
                <img src={ian_image} alt="Ian Chavez in a flower field" />
            </div>
        </div>
    );
}

export default Home;
