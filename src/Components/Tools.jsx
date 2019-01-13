import React from 'react';
import rsScroller from 'react-smooth-scroller';

import html from '../img/html.png';
import css from '../img/css.png';
import javaScript from '../img/js.png';
import react from '../img/react.png';
import redux from '../img/redux.png';
import jest from '../img/jest.png';
import bootstrap from '../img/bootstrap-stack.png';
import sass from '../img/sass.png';
import semanticUi from '../img/semanticUi.png';
import vsCode from '../img/vsCode.png';
import git from '../img/Git.png';

const Tools = () => (
    <div className="Tools">
        <div id='stars' />
        <div id='stars2' />
        <div id='stars3' />
        <h1 className="Tools__title">Tools</h1>
        <div className="Tools__content">
            <article className="Tools__article">
                <h5>Html</h5>
                <img src={html} alt="html logo" />
            </article>
            <article className="Tools__article">
                <h5>Css</h5>
                <img src={css} alt="css logo" />
            </article>
            <article className="Tools__article">
                <h5>JavaScript</h5>
                <img src={javaScript} alt="javaScript logo" />
            </article>
            <article className="Tools__article">
                <h5>React</h5>
                <img src={react} alt="react logo" />
            </article>
            <article className="Tools__article">
                <h5>Redux</h5>
                <img src={redux} alt="redux logo" />
            </article>
            <article className="Tools__article">
                <h5>Jest</h5>
                <img src={jest} alt="jest logo" />
            </article>
            <article className="Tools__article">
                <h5>Bootstrap</h5>
                <img src={bootstrap} alt="bootstrap logo" />
            </article>
            <article className="Tools__article">
                <h5>Sass</h5>
                <img src={sass} alt="sass logo" />
            </article>
            <article className="Tools__article">
                <h5>Semantic UI React</h5>
                <img src={semanticUi} alt="semanticUi logo" />
            </article>
            <article className="Tools__article">
                <h5>Visual Studio Code</h5>
                <img src={vsCode} alt="vsCode logo" />
            </article>
            <article className="Tools__article">
                <h5>GiT</h5>
                <img src={git} alt="git logo" />
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
    </div>
);

export default Tools;