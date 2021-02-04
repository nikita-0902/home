import React from 'react';



import cu from './ContactUs.module.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';

function ContactUs() {
    return (
        <div className={cu.allfile}>
            <div className={cu.title}>
                Contact with Me
            </div>
            <div className={cu.second__title}>
                If you want to chat or discuss something.
            </div>
            <div className={cu.email}>
                blazkonikita86@gmail.com
            </div>
            <div className={cu.phone}>
                +38(099)-650-20-09
            </div>
            <div className={cu.social__media}>
                <a href="https://github.com/nikita-0902"><GitHubIcon fontSize="large" /></a>
                <a href="https://t.me/nikita_0_9"><TelegramIcon color="primary" fontSize="large" /></a>
                <a href="https://www.instagram.com/nikita_blazhko/"><InstagramIcon color="secondary" fontSize="large" /></a>
            </div>
        </div>
    )
}

export default ContactUs;
