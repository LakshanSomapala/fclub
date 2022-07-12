import React from "react";
import Header from "../header/header";
import home_image from "../../assets/home_image.png";
import home_image_back from "../../assets/home_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

import "./home.css";

const Home = () => {
	const transition = { type: "tween", duration: 2 };
	const mobileScreen = window.innerWidth <= 768 ? true : false;
	return (
		<div className="home" id="home">
			<div className="blur home-blur"></div>
			<div className="left-h">
				<Header />
				{/* the best ad */}
				<div className="the-best-ad">
					<motion.div
						initial={{ left: mobileScreen ? "160px" : "238px" }}
						whileInView={{ left: "8px" }}
						transition={{ ...transition }}
					></motion.div>
					<span>The best fitness culb in the town</span>
				</div>

				{/* home hedaing */}
				<div className="home-text">
					<div>
						<span className="stroke-text">Shape </span>
						<span>Your</span>
					</div>
					<div>
						<span>Ideal body</span>
					</div>
					<div>
						<span>
							In here we will help you to shape and build your ideal body and
							live up your life to fullest
						</span>
					</div>
				</div>

				{/* figures */}
				<div className="figures">
					<div>
						<span>
							<NumberCounter end={140} start={100} delay={2} preFix="+" />
						</span>
						<span>expert coaches</span>
					</div>
					<div>
						<span>
							<NumberCounter end={978} start={800} delay={2} preFix="+" />
						</span>
						<span>members joined</span>
					</div>
					<div>
						<span>
							<NumberCounter end={50} start={0} delay={3} preFix="+" />
						</span>
						<span>fitness programs</span>
					</div>
				</div>

				{/* buttons */}
				<div className="home-buttons">
					<button className="btn">Get Started</button>
					<button className="btn">Learn More</button>
				</div>
			</div>
			<div className="right-h">
				<button className="btn">Join Now</button>
				<motion.div
					initial={{ right: "-1rem" }}
					whileInView={{ right: "4rem" }}
					transition={{ ...transition }}
					className="heart-rate"
				>
					<img src={heart} alt="" />
					<span>Heart Rate</span>
					<span>116 bpm</span>
				</motion.div>
				{/* home image */}
				<img src={home_image} alt="" className="home-image" />
				<motion.img
					initial={{ right: "11rem" }}
					whileInView={{ right: "20rem" }}
					transition={{ ...transition }}
					src={home_image_back}
					alt=""
					className="home-image-back"
				/>

				{/* calories */}
				<motion.div
					initial={{ right: "37rem" }}
					whileInView={{ right: "28rem" }}
					transition={{ ...transition }}
					className="caloriess"
				>
					<img src={calories} alt="" />
					<div>
						<span>Caloris Burned</span>
						<span>220 kcal</span>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Home;
