import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartContextProvider from "./components/store/CartContextProvider";

function App() {
	const [cartModal, setCartModal] = useState(false);

	const showCartModal = () => {
		setCartModal(true);
	};

	const hideCartModal = () => {
		setCartModal(false);
	};

	return (
		<CartContextProvider>
			{cartModal && <Cart onClose={hideCartModal} />}
			<Header onShowCart={showCartModal} />
			<main>
				<Meals />
			</main>
		</CartContextProvider>
	);
}

export default App;
