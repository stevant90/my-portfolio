import React from 'react';
import rsScroller from 'react-smooth-scroller';

const Projects = () => (
    <div className="Projects">
        <h1 className="Projects__title">Projects</h1>
        <div id='stars' />
        <div id='stars2' />
        <div id='stars3' />
        <div className="Projects__content">
            <article className="Projects__card">
                <div className="Projects__card__content">
                    <h2>Website-cherry</h2>
                    <p>
                        This is the model for website in which you can change layout of the page, and for this feature jQuery and flexbox are used. This page also has feature for weather information in which you can enter location and get weather information for that location, and for this feature I used OpenWeatherMap API, and used Get method with fetch, for this part vanilla JS was used. For entire project SASS was used.
                    </p>
                    <div className="Projects__card__icons">
                        <i className="fab fa-html5" />
                        <i className="fab fa-css3-alt" />
                        <i className="fab fa-sass" />
                    </div>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/stevant90/website-cherrry">More <i className="fas fa-angle-double-right" /></a>
                </div>
            </article>
            <article className="Projects__card">
                <div className="Projects__card__content">
                    <h2>Advanced-website-template</h2>
                    <p>
                        Advanced template for website using css, html, and also using sass and flexbox.
                    </p>
                    <div className="Projects__card__icons">
                        <i className="fab fa-html5" />
                        <i className="fab fa-css3-alt" />
                        <i className="fab fa-sass" />
                    </div>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/stevant90/advanced-website-template">More <i className="fas fa-angle-double-right" /></a>
                </div>
            </article>
            <article className="Projects__card">
                <div className="Projects__card__content">
                    <h2>Movie-festival-app</h2>
                    <p>
                        Simple application in which you can create movies, and programs, and add movies to program. Application also has validation for all cases. For this app I used vanilla java script, and html. For style css was used.
                    </p>
                    <div className="Projects__card__icons">
                        <i className="fab fa-html5" />
                        <i className="fab fa-css3-alt" />
                        <i className="fab fa-js" />
                    </div>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/stevant90/movie-festival-app">More <i className="fas fa-angle-double-right" /></a>
                </div>
            </article>
            <article className="Projects__card">
                <div className="Projects__card__content">
                    <h2>Exam-application</h2>
                    <p>
                        Exam application is a simple app in which you can enter informations about student&apos;s grade, and have informations about passed and failed students, and also percent of passed and failed students. This app is made by using vanilla java script, and html, and using module revealing pattern for code organization. For style css was used.
                    </p>
                    <div className="Projects__card__icons">
                        <i className="fab fa-html5" />
                        <i className="fab fa-css3-alt" />
                        <i className="fab fa-js" />
                    </div>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/stevant90/exam-application">More <i className="fas fa-angle-double-right" /></a>
                </div>
            </article>
            <article className="Projects__card">
                <div className="Projects__card__content">
                    <h2>ATM-search-app</h2>
                    <p>
                        ATM-search is a small application in which you can search ATMs for Telenor bank, and also is posible to search any place. For this project Vanilla JS was used, and for code organization AMD was used. APIs for project are from Google Maps-JavaScript API, and Google Places API. For style css, sass and bootstrap were used.
                    </p>
                    <div className="Projects__card__icons">
                        <i className="fab fa-html5" />
                        <i className="fab fa-css3-alt" />
                        <i className="fab fa-js" />
                        <i className="fab fa-sass" />
                    </div>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/stevant90/atm-search-app">More <i className="fas fa-angle-double-right" /></a>
                </div>
            </article>
            <article className="Projects__card">
                <div className="Projects__card__content">
                    <h2>myBlog</h2>
                    <p>
                        myBlog is a single page application written in React.js. This app simulates blog in which you can add your own posts, and read all posts on home page. App also contains authors page, about page, and detail informations about authors and posts. For fetch data axios was used with GET and POST methods. For style react-bootstrap was used.
                    </p>
                    <div className="Projects__card__icons">
                        <i className="fab fa-html5" />
                        <i className="fab fa-css3-alt" />
                        <i className="fab fa-js" />
                        <i className="fab fa-react" />
                        <i className="fab fa-sass" />
                    </div>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/stevant90/myBlog">More <i className="fas fa-angle-double-right" /></a>
                </div>
            </article>
            <article className="Projects__card">
                <div className="Projects__card__content">
                    <h2>Movie-App</h2>
                    <p>
                        Movie-App is a simple singe page application which contains information about tv shows. This application is written in React.js. For all content API from <a target="_blank" rel="noopener noreferrer" href="https://www.tvmaze.com/api">https://www.tvmaze.com/api</a> was used. For styling react-materialize was used.
                    </p>
                    <div className="Projects__card__icons">
                        <i className="fab fa-html5" />
                        <i className="fab fa-css3-alt" />
                        <i className="fab fa-js" />
                        <i className="fab fa-react" />
                        <i className="fab fa-sass" />
                    </div>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/stevant90/movieApp">More <i className="fas fa-angle-double-right" /></a>
                </div>
            </article>
            <article className="Projects__card">
                <div className="Projects__card__content">
                    <h2>myBook</h2>
                    <p>
                        myBook is a single page app which simulates social network. This app shows usage of GET,POST,PUT,DELETE API&apos;s methods. For this app React.js with Redux was used. App shows simple way for implementing validation with React, also main focus on this app was work on implementing reusable components for form and input fields.
                    </p>
                    <div className="Projects__card__icons">
                        <i className="fab fa-html5" />
                        <i className="fab fa-css3-alt" />
                        <i className="fab fa-js" />
                        <i className="fab fa-react" />
                    </div>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/stevant90/myBook">More <i className="fas fa-angle-double-right" /></a>
                </div>
            </article>
            <button
                type="button"
                onClick={() => rsScroller.scrollToTop({ easing: 'linear', revise: 100 })}
            className="backToTopBtn"
        >
                <i className="fas fa-angle-up" />
            <span>Top</span>
            </button>
    </div>
    </div >
);

export default Projects;