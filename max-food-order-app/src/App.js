import { createContext, Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

const CartShow = createContext();

function App() {
	const [cartModal, setCartModal] = useState(false);

  const showCartModal = () => {
    setCartModal(true);
  }

  const hideCartModal = () =>{
    setCartModal(false);
  }

	return (
		<Fragment>
			{cartModal && <Cart />}
			<CartShow.Provider value={{
        show: showCartModal,
        hide: hideCartModal,
      }}>
				<Header></Header>
			</CartShow.Provider>
			<main>
				<Meals />
			</main>
		</Fragment>
	);
}

export default App;
export { CartShow };
