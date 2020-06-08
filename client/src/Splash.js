import React from 'react';

function Splash({message}) {
    return (
        <div id='splashImage'>
            <header>
                <h4>Troy Hatchard Blog</h4>
            </header>
            <div id='splashBody'>
                <h1>{ message } </h1>
                <a href='blog' class='button3' id='blogButton'>Blog</a>
            </div>
        </div>
    );
};

export default Splash;