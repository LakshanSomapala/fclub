import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll/modules";

import "./header.css";
const Header = () => {
	const mobileScreen = window.innerWidth <= 768 ? true : false;
	const [menuOpened, setMenuOpend] = useState(false);
	return (
		<div className="header">
			<img src={Logo} alt="" className="logo" />
			{menuOpened === false && mobileScreen === true ? (
				<div
					style={{
						backgroundColor: "var(--appColor)",
						padding: "0.5rem",
						borderRadius: "5px",
					}}
					onClick={() => setMenuOpend(true)}
				>
					<img
						src={Bars}
						alt=""
						style={{ width: "1.5rem", height: "1.5rem" }}
					/>
				</div>
			) : (
				<ul className="header-menu">
					<li>
						<Link
							onClick={() => setMenuOpend(false)}
							activeClass="active"
							to="home"
							span={true}
							smooth={true}
						>
							Home
						</Link>
					</li>
					<li onClick={() => setMenuOpend(false)}>
						<Link
							onClick={() => setMenuOpend(false)}
							to="programs"
							span={true}
							smooth={true}
						>
							Programs
						</Link>
					</li>
					<li onClick={() => setMenuOpend(false)}>
						<Link
							onClick={() => setMenuOpend(false)}
							to="reasons"
							span={true}
							smooth={true}
						>
							Why Us
						</Link>
					</li>
					<li onClick={() => setMenuOpend(false)}>
						<Link
							onClick={() => setMenuOpend(false)}
							to="plans"
							span={true}
							smooth={true}
						>
							Plans
						</Link>
					</li>
					<li>
						<Link
							onClick={() => setMenuOpend(false)}
							to="testimonials"
							span={true}
							smooth={true}
						>
							Testimonials
						</Link>
					</li>
				</ul>
			)}
		</div>
	);
};

export default Header;
