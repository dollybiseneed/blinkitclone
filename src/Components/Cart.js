// // import React, { useState } from 'react';
// // import './Cart.css'; 
// // const Cart = () => {
// //     const [cartItems, setCartItems] = useState([
// //         // Example items, replace with your actual items
// //         { name: 'Item 1', quantity: 1, discountedPrice: 100 },
// //         { name: 'Item 2', quantity: 2, discountedPrice: 200 },
// //     ]);

// //     const incrementItem = (name) => {
// //         setCartItems(prevItems => 
// //             prevItems.map(item => 
// //                 item.name === name ? { ...item, quantity: item.quantity + 1 } : item
// //             )
// //         );
// //     };

// //     const decrementItem = (name) => {
// //         setCartItems(prevItems => {
// //             const existingItem = prevItems.find(item => item.name === name);
// //             if (existingItem.quantity === 1) {
// //                 return prevItems.filter(item => item.name !== name);
// //             }
// //             return prevItems.map(item => 
// //                 item.name === name ? { ...item, quantity: item.quantity - 1 } : item
// //             );
// //         });
// //     };

// //     return (
// //         <div className="cart-container">
// //             <h2>Your Cart</h2>
// //             {cartItems.length === 0 ? (
// //                 <p>No items in the cart.</p>
// //             ) : (
// //                 cartItems.map(item => (
// //                     <div key={item.name} className="cart-item">
// //                         <p>{item.name}</p>
// //                         <div>
// //                             <button onClick={() => decrementItem(item.name)}>-</button>
// //                             <span>{item.quantity}</span>
// //                             <button onClick={() => incrementItem(item.name)}>+</button>
// //                         </div>
// //                         <p>₹{item.discountedPrice * item.quantity}</p>
// //                     </div>
// //                 ))
// //             )}
// //         </div>
// //     );
// // };

// // export default Cart;


// // Cart.js
// // import React, { useState } from 'react';

// // const Cart = () => {
// //     const initialCartItems = [
// //         { name: 'Product 1', image: 'path/to/image1.jpg', quantity: 1, discountedPrice: 100 },
// //         { name: 'Product 2', image: 'path/to/image2.jpg', quantity: 2, discountedPrice: 200 },
// //     ];

// //     const [cartItems, setCartItems] = useState(initialCartItems);

// //     const incrementItem = (name) => {
// //         setCartItems(prevItems => 
// //             prevItems.map(item => 
// //                 item.name === name ? { ...item, quantity: item.quantity + 1 } : item
// //             )
// //         );
// //     };

// //     const decrementItem = (name) => {
// //         setCartItems(prevItems => {
// //             const existingItem = prevItems.find(item => item.name === name);
// //             if (existingItem.quantity === 1) {
// //                 return prevItems.filter(item => item.name !== name);
// //             }
// //             return prevItems.map(item => 
// //                 item.name === name ? { ...item, quantity: item.quantity - 1 } : item
// //             );
// //         });
// //     };

// //     return (
// //         <div className="cart-container">
// //             <h2>Your Cart</h2>
// //             {cartItems.length === 0 ? (
// //                 <p>No items in the cart.</p>
// //             ) : (
// //                 cartItems.map(item => (
// //                     <div key={item.name} className="cart-item">
// //                         <img src={item.image} alt={item.name} className="cart-item-image" />
// //                         <p>{item.name}</p>
// //                         <div>
// //                             <button onClick={() => decrementItem(item.name)}>-</button>
// //                             <span>{item.quantity}</span>
// //                             <button onClick={() => incrementItem(item.name)}>+</button>
// //                         </div>
// //                         <p>₹{item.discountedPrice * item.quantity}</p>
// //                     </div>
// //                 ))
// //             )}
// //         </div>
// //     );
// // };

// // export default Cart;





// import React from 'react';

// const Cart = ({ cartItems, increment, decrement }) => (
//     <div className="cart-container">
//         <h2>Your Cart</h2>
//         {cartItems.length === 0 ? (
//             <p>No items in the cart.</p>
//         ) : (
//             cartItems.map(item => (
//                 <div key={item.name} className="cart-item">
//                     <p>{item.name}</p>
//                     <div>
//                         <button onClick={() => decrement(item.name)}>-</button>
//                         <span>{item.quantity}</span>
//                         <button onClick={() => increment(item.name)}>+</button>
//                     </div>
//                     <p>₹{item.discountedPrice * item.quantity}</p>
//                 </div>
//             ))
//         )}
//     </div>
// );

// export default Cart;
