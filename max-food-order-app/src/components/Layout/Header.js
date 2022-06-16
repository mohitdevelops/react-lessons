import { Fragment } from "react";
import bannerImage from "../../assets/meals.jpg";
import module from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
	return (
		<Fragment>
			<header className={module.header}>
				<h1>Order Food</h1>
				<HeaderCartButton />
			</header>
			<div className={module["main-image"]}>
				<img src={bannerImage} />
			</div>
		</Fragment>
	);
};

export default Header;
