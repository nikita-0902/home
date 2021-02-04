import React from 'react';


import Typewritter from 'typewriter-effect'
import c from './Content.module.css';

import MyPhoto from '../../images/Myphoto.JPG';

function Content(props) {
    return (
        <>
            <div className={c.container}>
                <span className={c.text1}>Hello Everybody</span>
                <span className={c.text2}>
                    <Typewritter
                        options={{
                            autoStart: false,
                            loop: false,
                            cursor: " ",
                        }}
                        onInit={(typewritter) => {
                            typewritter
                                .pauseFor(2050)
                                .typeString("My name is Nikita Blazhko.")
                                .deleteAll()
                                .typeString("I'm Junior Front-End Developer.")
                                .start();
                        }}
                    />
                </span>
                <img src={MyPhoto} className={c.MyPhoto} alt="" />
            </div>


        </>
    )
}

export default Content;
