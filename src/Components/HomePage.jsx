import React, { Component } from 'react';
import rsScroller from 'react-smooth-scroller';

import Navigation from './Navigation';

import linkedin from '../img/linkedin.png'
import github from '../img/github-logo.png'
import facebook from '../img/facebook.png'
import instagram from '../img/instagram.png'
import gmail from '../img/gmail.png'

export default class HomepPage extends Component {

    onScrollTarget = () => {
        rsScroller.scrollToTarget('About', { easing: 'linear', frame: 20 });
    }

    render() {
        return (
            <div className="Home">
                <Navigation />
                <div id='stars' />
                <div id='stars2' />
                <div id='stars3' />
                <div className="Home__content">
                    <div className='Home__title'>
                        <span>
                            Hello, welcome to my digital world
                        </span>
                        <span>
                            I&apos;m Stevan
                        </span>
                        <span className="Home__professionTitle">
                            &#x0007C; Front-end developer &#x0007C;
                        </span>
                        <div className="Home__socialIcons">
                            <a
                                href="https://www.linkedin.com/in/stevan-todorovic-46a466165/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={linkedin} alt="linkedin logo" />
                            </a>
                            <a
                                href="https://github.com/stevant90"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={github} alt="github logo" />
                            </a>
                            <a
                                href="https://www.facebook.com/stevan.todorovic1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={facebook} alt="facebook logo" />
                            </a>
                            <a
                                href="https://www.instagram.com/stevan.steva90/?hl=sr"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={instagram} alt="instagram logo" />
                            </a>
                            <a
                                href="mailto:stevann90@gmail.com"
                            >
                                <img src={gmail} alt="gmail logo" />
                            </a>
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={this.onScrollTarget}
                        className="Home__swipeDownIcon"
                    >
                        <span>Let&apos;s get started</span>
                        <i className="fas fa-angle-down" />
                    </button>
                </div>
            </div>
        );
    }
}

