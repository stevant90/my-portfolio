import React from 'react';
import rsScroller from 'react-smooth-scroller';

import myPhoto from '../img/me.jpg'

const About = () => (
    <div className="About">
        <h1 className="About__title">About me</h1>
        <div id='stars' />
        <div id='stars2' />
        <div id='stars3' />
        <div className="About__content">
            <img src={myPhoto} alt="gmail logo" />
            <p className="About__text">I work as a front-end developer. I live in Belgrade, and I have big passion about web programming. I enjoy building feature rich and nice looking web pages. My biggest passion about web programming is a building single page applications, especially using React.js. I enjoy working with React because it&apos;s make nice looking either web pages and code in the background. I also write unit tests for apps and exercises I work on, using Jest and Enzyme for testing React components.
            </p>
            <p className="About__text">I constantly develop my skills for all tools that can make differences in this job. I&apos;m hard worker, full dedicated and responsible person. I think that everything is possible if you put enough effort in it, and if you are persistent. Talent is nothing if you don&apos;t work on it. For every job and also for programming planning it&apos;s most important and it&apos;s half of a job.
            </p>
            <p className="About__text">Some of my plans for future is to keep learning and developing my skills for web development as well as learning new technologies for programming, expecially Node.js. I&apos;m trying to be always up to date with latest technologies, and I think that&apos;s very important for the person who works in IT sector. When I started with programming my goal wasn&apos;t just to be only programmer, my goal is to be a good programmer.
            </p>
            <div className="About__quotesWrapper">
                <article className="About__quotes firstQuote">
                    <span>Talent</span>
                    <p>Is nothing without</p>
                    <span>Hard work</span>
                    <p>Never underestimate</p>
                    <p>The <span>power</span> of</p>
                    <span>Practice</span>
                </article>
                <article className="About__quotes secondQuote">
                    <span>Who you are</span>
                    <p>Tomorrow</p>
                    <span>Begins with</span>
                    <p>What you do</p>
                    <span>Today</span>
                </article>
                <button
                    type="button"
                    onClick={() => rsScroller.scrollToTop({ easing: 'linear',  revise: 100 })}
                    className="backToTopBtn"
                >
                    <i className="fas fa-angle-up" />
                    <span>Top</span>
                </button>
            </div>
        </div>
    </div>
);

export default About;