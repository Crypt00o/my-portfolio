import './App.css'
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Experience from './components/experience/Experience';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


const App = () => (
	<>
		<Header />
		<Nav />
		<About />
		<Experience />
		<Services />
		<Portfolio />
		<Contact />
		<Footer />
	</>
);


export default App;
