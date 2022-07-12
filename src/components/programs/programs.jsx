import React from "react";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";
import "./programs.css";

const Programs = () => {
	return (
		<div className="programs" id="programs">
			{/* header */}
			<div className="program-header">
				<span className="stroke-text">Explore our</span>
				<span>Programs</span>
				<span className="stroke-text">to shape you</span>
			</div>

			{/* program categories */}
			<div className="program-categories">
				{programsData.map((program) => (
					<div className="category">
						{program.image}
						<span>{program.heading}</span>
						<span>{program.details}</span>
						<div className="join-now">
							<span>Join Now</span>
							<img src={RightArrow} alt="" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Programs;
