import React from 'react';
import rainbowMountain4k from './images/rainbowMountainEdited.jpg';

function Splash({message}) {
    return (
        <div id='splash'>
            <div id='splashImage'>
                <header>
                    <h4>Troy Hatchard Blog</h4>
                </header>
                <div id='splashBody'>
                    <h1>{ message } </h1>
                    <a href='blog' className='button3' id='blogButton'>Blog</a>
                </div>
            </div>
            {/* <img id='highResImage' src={rainbowMountain4k} alt='blank' onLoad='switchHighRes()'></img> */}
            {/* <script>
                function switchHighRes() {
                    document.getElementById('splashImage').style.backgroundImage = rainbowMountain4k;
                }
            </script> */}
        </div>
            );
};

export default Splash;