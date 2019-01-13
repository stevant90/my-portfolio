import React from 'react';

import HomePage from './Components/HomePage';
import About from './Components/About';
import Tools from './Components/Tools';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

require('./App.scss');

const App = () => (
	<div>
		<HomePage />
		<About />
		<Tools />
		<Projects />
		<Footer />
	</div>
);

export default App;
