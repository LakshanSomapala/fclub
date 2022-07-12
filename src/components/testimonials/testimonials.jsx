import React, { useState } from "react";
import "./testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import LeftArrow from "../../assets/leftArrow.png";
import RightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";

const Testimonial = () => {
	const [selected, setSelected] = useState(0);
	const testimonialsLenght = testimonialsData.length;
	const transition = { type: "spring", duration: 2 };

	return (
		<div className="testimonials">
			<div className="left-t">
				<span>TESTIMONIALS</span>
				<span className="stroke-text">WHAT THEY</span>
				<span>SAY ABOUT US</span>
				<motion.span
					key={selected}
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ ...transition }}
				>
					{testimonialsData[selected].review}
				</motion.span>
				<span>
					<span>{testimonialsData[selected].name}</span>
					{" - "}
					{testimonialsData[selected].status}
				</span>
			</div>
			<div className="right-t">
				<motion.div
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ ...transition }}
				></motion.div>
				<motion.div
					initial={{ opacity: 0, x: 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ ...transition }}
				></motion.div>
				<motion.img
					key={selected}
					initial={{ opacity: 0, x: 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ ...transition }}
					src={testimonialsData[selected].image}
					alt=""
				/>
				<div className="arrows">
					<img
						onClick={() => {
							selected === 0
								? setSelected(testimonialsLenght - 1)
								: setSelected((prev) => prev - 1);
						}}
						src={LeftArrow}
						alt=""
					/>
					<img
						onClick={() => {
							selected === testimonialsLenght - 1
								? setSelected(0)
								: setSelected((prev) => prev + 1);
						}}
						src={RightArrow}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
