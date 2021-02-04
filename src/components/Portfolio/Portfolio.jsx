import React from 'react';

import p from './Portfolio.module.css';
import LaptopMacTwoToneIcon from '@material-ui/icons/LaptopMacTwoTone';
import Button from '@material-ui/core/Button';
function Portfolio() {
    return (
        <div className={p.port}>
            <div className={p.main__text}>
                <div className={p.title__text}>
                    Portfolio
                 </div>
                <div className={p.text__}>
                    Now you can see the projects I have done recently
                </div>
                <div className={p.app__name}>
                    TodoList on ReactJs
                </div>
            </div>
            <div className={p.app__file}>
                <div className={p.todo__text}>
                    The <span className={p.todo}>todo list</span> has the ability <span className={p.todo}>to add, delete a task.</span> Each action is animated, that is, interactions with the user.
                    <div>
                        <span className={p.icon__desc}>
                            React <span className={p.boxx}><LaptopMacTwoToneIcon fontSize="small" /></span>
                        </span>
                        <span className={p.icon__desc}>
                            CSS Modules <span className={p.boxx}><LaptopMacTwoToneIcon fontSize="small" /></span>
                        </span>
                        <span className={p.icon__desc}>
                            Mateail Ui <span className={p.boxx}><LaptopMacTwoToneIcon fontSize="small" /></span>
                        </span>
                    </div>
                    <span className={p.btn_}>
                        <Button variant="outlined" color="secondary" href="https://nikita-0902.github.io/appTodo/" >Visit</Button>
                    </span>
                    <span>
                        <Button variant="outlined" color="secondary" href="https://github.com/nikita-0902/appTodo">Source</Button>
                    </span>
                </div>

            </div >

            <div className={p.app__name}>
                Weather App
            </div>
            <div className={p.app__file}>
                <div className={p.todo__text}>
                    <span className={p.todo}>Website for weather forecast.</span> Shows the weather using the <span className={p.todo}>OpenWeather API</span> It is possible to search for a settlement. There is also a forecast functionality for the current day for the selected city.
                   <div>
                        <span className={p.icon__desc}>
                            React <span className={p.boxx}><LaptopMacTwoToneIcon fontSize="small" /></span>
                        </span>
                        <span className={p.icon__desc}>
                            CSS Modules <span className={p.boxx}><LaptopMacTwoToneIcon fontSize="small" /></span>
                        </span>
                        <span className={p.icon__desc}>
                            Mateail Ui <span className={p.boxx}><LaptopMacTwoToneIcon fontSize="small" /></span>
                        </span>
                        <span className={p.icon__desc}>
                            Api <span className={p.boxx}><LaptopMacTwoToneIcon fontSize="small" /></span>
                        </span>
                        <span className={p.icon__desc}>
                            Axios <span className={p.boxx}><LaptopMacTwoToneIcon fontSize="small" /></span>
                        </span>
                    </div>


                    <span className={p.btn_}>
                        <Button variant="outlined" color="primary" href="https://nikita-0902.github.io/weatherapp/" >Visit</Button>
                    </span>
                    <span>
                        <Button variant="outlined" color="primary" href="https://github.com/nikita-0902/weather__app">Source</Button>
                    </span>
                </div>
            </div >
        </div>


    )
}

export default Portfolio;
