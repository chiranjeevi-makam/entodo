import React, { useState, useContext } from 'react';
import Header from '../Header';
import EmptyCartView from '../EmptyCartView';
import CartListView from '../CartListView';
import CartSummary from '../CartSummary';
import PaymentPopup from '../PaymentPopup'; // Import the PaymentPopup component
import './index.css';

const Cart = () => {
  const [isPaymentPopupVisible, setPaymentPopupVisible] = useState(false);
  const [totalCost, setTotalCost] = useState(0);
  const [numberOfItems, setNumberOfItems] = useState(0);

  const cartContext = useContext(CartContext); // Replace with your actual CartContext

  const incrementCartItemQuantity = (itemId) => {
    // Implement logic to increment the quantity of a cart item in CartContext
    cartContext.incrementCartItemQuantity(itemId); // Replace with your actual function
  };

  const decrementCartItemQuantity = (itemId) => {
    // Implement logic to decrement the quantity of a cart item in CartContext
    cartContext.decrementCartItemQuantity(itemId); // Replace with your actual function
  };

  const togglePaymentPopup = () => {
    setPaymentPopupVisible(!isPaymentPopupVisible);
  };

  const updateTotalCostAndItems = () => {
    // Calculate the total cost and number of items based on cart content
    const newTotalCost = cartContext.cartList.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    const newNumberOfItems = cartContext.cartList.reduce(
      (total, item) => total + item.quantity,
      0
    );

    setTotalCost(newTotalCost);
    setNumberOfItems(newNumberOfItems);
  };

  // This effect will update the total cost and number of items when cart content changes
  useEffect(() => {
    updateTotalCostAndItems();
  }, [cartContext.cartList]);

  return (
    <>
      <Header />
      <div className="cart-container">
        {cartContext.cartList.length === 0 ? (
          <EmptyCartView />
        ) : (
          <div className="cart-content-container">
            <h1 className="cart-heading">My Cart</h1>
            {cartContext.cartList.map((item) => (
              <div key={item.id}>
                <p>{item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <button data-testid="plus" onClick={() => incrementCartItemQuantity(item.id)}>
                  +
                </button>
                <button data-testid="minus" onClick={() => decrementCartItemQuantity(item.id)}>
                  -
                </button>
                <button data-testid="remove" onClick={() => cartContext.removeCartItem(item.id)}>
                  Remove
                </button>
              </div>
            )}
            <CartListView />
            <CartSummary />
            <button onClick={togglePaymentPopup}>Checkout</button>
          </div>
        )}
      </div>
      {isPaymentPopupVisible && (
        <PaymentPopup
          cartList={cartContext.cartList}
          onClosePopup={togglePaymentPopup}
          totalCost={totalCost}
          numberOfItems={numberOfItems}
        />
      )}
    </>
  );
};

export default Cart;
