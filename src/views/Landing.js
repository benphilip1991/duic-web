import React from 'react';
import DUICLogo from '../resources/images/duic_logo.png';

import './Landing.scss';

export default function Landing() {
    return (
        <div className="landingBody">
            <header className="showcase">
                <div className="landingContent">
                    <img src={DUICLogo} className="landingLogo" alt="DUIC Logo"/>
                    <div className="title">
                        Deakin University Indian Club
                    </div>
                    <div className="welcomeText">
                        A society by Indian students for the Indian community at Deakin University
                    </div>
                </div>
            </header>

            <section className="services">
                <div className="container grid=3"></div>
            </section>
        </div>
    );
}