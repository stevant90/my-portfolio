import React, { Component } from 'react';
import rsScroller from 'react-smooth-scroller';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = { mobileMenuOpen: false };
    }

    componentDidMount() {
        document.addEventListener("click", this.globalMenuCollapse);
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.globalMenuCollapse);
    }

    globalMenuCollapse = event => {
        if (this.menuCollapse && !this.menuCollapse.contains(event.target)) {
            this.setState({ mobileMenuOpen: false });
        }
    }

    toggleMenu = () => {
        const { mobileMenuOpen } = this.state;

        this.setState({ mobileMenuOpen: !mobileMenuOpen });
    }

    render() {
        const { mobileMenuOpen } = this.state;
        const scrollStyle = { easing: 'linear', frame: 20 };

        return (
            <div className="Navigation">
                <button
                    type="button"
                    className="Navigation__menuCollapse"
                    onClick={this.toggleMenu}
                    ref={el => {
                        this.menuCollapse = el
                    }}
                >
                    <span className="Navigation__menuCollapseBar" />
                    <span className="Navigation__menuCollapseBar" />
                    <span className="Navigation__menuCollapseBar" />
                </button>
                <div className={mobileMenuOpen ? 'Navigation__menu Navigation__menu--mobileOpen' : 'Navigation__menu'}>
                    <button
                        type="button"
                        onClick={() => rsScroller.scrollToTarget('About', scrollStyle)}
                        className="Navigation__item"
                    >
                        About me
                    </button>
                    <button
                        type="button"
                        onClick={() => rsScroller.scrollToTarget('Tools', scrollStyle)}
                        className="Navigation__item"
                    >
                        Tools
                    </button>
                    <button
                        type="button"
                        onClick={() => rsScroller.scrollToTarget('Projects', scrollStyle)}
                        className="Navigation__item"
                    >
                        Projects
                    </button>
                </div>
            </div>
        );
    }
} 