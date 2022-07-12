import "./App.css";
import Home from "./components/home/home";
import Programs from "./components/programs/programs";
import Reasons from "./components/reasons/reasons";
import Plans from "./components/plans/plans";
import Testimonial from "./components/testimonials/testimonials";
import Join from "./components/join/join";
import Footer from "./components/footer/footer";

function App() {
	return (
		<div className="App">
			{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
			<Home />
			<Programs />
			<Reasons />
			<Plans />
			<Testimonial />
			<Join />
			<Footer />
		</div>
	);
}

export default App;
