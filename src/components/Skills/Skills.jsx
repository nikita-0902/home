import React from 'react'
import s from './Skiks.module.css';
import LaptopWindowsIcon from '@material-ui/icons/LaptopWindows';
import CodeIcon from '@material-ui/icons/Code';
import PersonalVideoIcon from '@material-ui/icons/PersonalVideo';
function Skills() {
    return (
        <div className={s.main}   >
            <div className={s.title}>
                My Skills
            </div>
            <div className={s.exp}>
                <div className={s.exx}> Experience with:</div>
                <div className={s.ww}>html,css,javasript</div>
                <div className={s.ww}>c#,wpf,windows forms</div>
                <div className={s.ww}>c++</div>
                <div className={s.ww}>python</div>
            </div>
            <div className={s.add}>
                <div className={s.exx}>Additional Technical Environment:</div>
                <div > <span className={s.box}><CodeIcon fontSize="small" color="primary" /></span> <span className={s.text}>Front-End:</span>HTML(5),CSS(3), JQUERY, REACTJS</div>
                <div > <span className={s.box}><PersonalVideoIcon fontSize="small" color="primary" /></span> <span className={s.text}>Software:</span> Visual Studio (2015, 2017, 2019), Visual Studio Code, MS SQL
 Management Studio, Sublime Text 3</div>
                <div > <span className={s.box}><PersonalVideoIcon fontSize="small" color="primary" /></span> <span className={s.text}>Virtualization:</span>Oracle VirtualBox,VWware</div>
            </div>

        </div>
    )
}

export default Skills
