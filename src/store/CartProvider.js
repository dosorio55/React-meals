import CartContext from "./cart-context"

const CartProvider = ({ children }) => {
    const addItemCart = (item) => { };

    const removeItemCart = (item) => { };

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemCart,
        removeItem: removeItemCart
    }

    return (
        <CartContext.Provider value={cartContext }>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider