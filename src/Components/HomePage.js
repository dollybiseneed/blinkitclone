// import './HomePage.css';
// import { IoSearchOutline } from "react-icons/io5";

// const HomePage =()=>{
//     return(
//         <>
//       <div className="header">
//    <img src="images/blinkitlogo.webp" alt=""/>
// <h1>Delivery in 23 Minutes</h1>
// <p>B62,Pocket B South City...</p>
// <h5><IoSearchOutline />
// </h5>
// <input type="text" placeholder="Search here" />
// <h2>Login</h2>
// <h3>My Cart</h3>
// </div>

// <div className="border">
// </div>

// <div  className="main1">
// <img src='images/paan.webp' alt=''/>
// </div>

// <div className='section'>
// <img src='images/sec1.avif' alt=''/>
// <img src='images/sec2.avif' alt=''/>
// <img src='images/sec3.avif' alt=''/>
// <img src='images/sec4.avif' alt=''/>
// </div>
//         </>
//     )
// }
// export default HomePage;


// ===========================================searchbar icon code==================================
// const LoginPage = () => {
  // const [searchTerm, setSearchTerm] = useState('');

  // const handleInputChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  // const handleSearch = () => {
  //   console.log('Searching for:', searchTerm);
  //   // Add your search logic here (e.g., API call)
  // };

//   return (
//     <div className="search-bar-container">
//              <button className="search-button" onClick={handleSearch}>      </button>


//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={handleInputChange}
//         className="search-input"
//       />
//     </div>
//   );
// };

// export default LoginPage;
// ==============================================================================================
// import React from 'react';
// import './HomePage.css'; // Assuming styles are saved in ProductPage.css
// import { faApple, faGooglePlay, faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Correct import
// import { Link } from 'react-router-dom';



// const Header = () => (
//     <header className="header">
//         <div className="logo-img"><img src="images/blinkitlogo.webp"/></div>
//         <div className="delivery-info">
//             <h4>Delivery in 14 minutes</h4>
//             <p>B62, Pocket B, South City I, Sector...</p>
//         </div>
//         <div className="search-bar">
//             <input type="text" placeholder="Search here" />
//         </div>
//         <div className="login"> <Link to="loginpage">Login </Link></div>
//         <div className="cart">
//             <button><FontAwesomeIcon icon={<FontAwesomeIcon icon={faShoppingCart} />
// } style={{ fontSize: '24px' }} /> My Cart</button>
//         </div>
//     </header>
// );

// const Nav = () => (
//     <div className="nav">
//         {['Vegetables & Fruits', 'Dairy & Breakfast', 'Munchies', 'Cold Drinks & Juices', 'Instant & Frozen Food', 'Tea, Coffee & Health Drinks', 'Bakery & Biscuits', 'More'].map(item => (
//             <a href="#" key={item}>{item}</a>
//         ))}
//     </div>
// );

// const Product = ({ product }) => (
//     <div className="product">
//         <img src={product.img} alt={product.name} />
//         <h3>{product.name}</h3>
//         <p>{product.weight}</p>
//         <div className="price1">₹{product.originalPrice}</div>
//         <div className="price">₹{product.discountedPrice}</div>
//         <button className="add-button">ADD</button>
//     </div>
// );

// const ProductGrid = () => {
//     const products = [
//         { img: 'images/b1.avif', name: 'Amul Pure Milk Cheese Slices', weight: '200 g', originalPrice: 200, discountedPrice: 145 },
//         { img: 'images/b2.avif', name: 'Amul Fresh Malai Paneer', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
//         { img: 'images/b3.avif', name: 'Fresh White Eggs', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
//         { img: 'images/b4.avif', name: 'Amul Fresh Salted Butter', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
//         { img: 'images/b5.avif', name: 'Fresh Brown Bread', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
//         { img: 'images/b6.avif', name: 'Amul Fresh Malai Curd', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
//         { img: 'images/b7.avif', name: 'Amul Fresh Milk', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
//         { img: 'images/b8.avif', name: 'Amul Fresh Malai Paneer', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
//         { img: 'images/b9.avif', name: 'Fresh White Eggs', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
//         { img: 'images/b10.avif', name: 'Fresh Brown Eggs', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
//         { img: 'images/b11.avif', name: 'Amul Fresh Milk', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
//         { img: 'images/b12.avif', name: 'Fresh Brown Bread', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
//         { img: 'images/b13.avif', name: 'Nestle Milkmaid Sweetened Condensed Milk', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
//         { img: 'images/b14.avif', name: 'Amul Fresh White Bread', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
//         { img: 'images/b15.avif', name: 'Amul Fresh Brown Bread', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
//         { img: 'images/b16.avif', name: ' Haldiram Nagpur Aloo Bhujia', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
//         { img: 'images/b17.avif', name: 'Amul White Eggs Pack Of(12)', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
//         { img: 'images/b18.avif', name: 'Amul Mithai Mate Condensed Milk', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
//         { img: 'images/b19.avif', name: 'Nestle Milkmaid Sweetened Condensed Milk', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
//         { img: 'images/b20.avif', name: 'Amul Fresh Malai Paneer', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
//         { img: 'images/b21.avif', name: 'Amul Fresh Malai Paneer', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
//         { img: 'images/b22.avif', name: 'Amul Fresh Malai Paneer', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
//         { img: 'images/b23.avif', name: 'Amul Fresh Malai Paneer', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
//         { img: 'images/b24.avif', name: 'Amul Fresh Malai Paneer', weight: '200 g', originalPrice: 100, discountedPrice: 90 },

//     ];

//     return (
//         <div className="product-container">
//             {products.map(product => <Product key={product.name} product={product} />)}
//         </div>
//     );
// };

// const MainContent = () => (
//     <main>
//         <section className="product-section">
//             <h2>Buy Dairy, Breads & Eggs at Online grocery store in India</h2>
//             <p>Buy from several popular brands like Amul, Harvest Gold, Table White.<br />Are you super fond of online shopping because you hate crowded supermarkets?</p>
//         </section>
//         <section className="price-list">
//             <h2>Dairy, Breads & Eggs Price List</h2>
//             <ul>
//                 <li>1. Amul Pure Milk Cheese Slices - Rs.145</li>
//                 <li>2. Amul Fresh Malai Paneer - Rs.90</li>
//                 {/* Add more items here... */}
//             </ul>
//             <p>This data was last updated on 9/13/2024</p>
//         </section>
//     </main>
// );

// const Footer = () => (
//     <div className="footer">
//         <div className="footer-container">
//             <div className="footer-column">
//                 <h3>Useful Links</h3>
//                 <ul>
//                     {['About', 'Careers', 'Blog', 'Press', 'Lead', 'Value', 'Privacy', 'Terms', 'FAQs', 'Security', 'Mobile', 'Contact'].map(link => (
//                         <li key={link}><a href="#">{link}</a></li>
//                     ))}
//                 </ul>
//             </div>
//             <div className="footer-column">
//                 <h3>Categories <a href="#">see all</a></h3>
//                 <ul>
//                     {['Vegetables & Fruits', 'Cold Drinks & Juices', 'Bakery & Biscuits', 'Dairy & Breakfast', 'Instant & Frozen Food', 'Sweet Tooth', 'Sauces & Spreads', 'Cleaning Essentials', 'Organic & Premium', 'Home & Office'].map(cat => (
//                         <li key={cat}><a href="#">{cat}</a></li>
//                     ))}
//                 </ul>
//             </div>
//             <div className="footer-column download-apps">
//                 <h3>Download App</h3>
//                 <button className='app-logo'><FontAwesomeIcon icon={faApple} style={{ fontSize: '24px' }} /> App Store</button>
//                 <button className='google-logo'><FontAwesomeIcon icon={faGooglePlay} style={{ fontSize: '24px' }} /> Google Play</button>
//             </div>
//         </div>
//         <div className="footer-bottom">
//             <div className="social-links">
//                 <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
//                 <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
//                 <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
//                 <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
//                 <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
//             </div>
//             <p>© Blink Commerce Private Limited, 2016-2024</p>
//             <p>"Blinkit" is owned & managed by Blink Commerce Private Limited.</p>
//         </div>
//     </div>
// );

// const HomePage = () => (
//     <div>
//         <Header />
//         <Nav />
//         <ProductGrid />
//         <MainContent />
//         <Footer />
//     </div>
// );

// export default HomePage;

// ==========================================================22222222222222222222222222222222=======================================
// import React, { useState } from 'react';
// import './HomePage.css'; 
// import { faApple, faGooglePlay, faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; 
// import { Link } from 'react-router-dom';

// const Header = ({ cartCount }) => (
//     <header className="header">
//         <div className="logo-img"><img src="images/blinkitlogo.webp" alt="Logo" /></div>
//         <div className="delivery-info">
//             <h4>Delivery in 14 minutes</h4>
//             <p>B62, Pocket B, South City I, Sector...</p>
//         </div>
//         <div className="search-bar">
//             <input type="text" placeholder="Search here" />
//         </div>
//         <div className="login"><Link to="loginpage">Login</Link></div>
//         <div className="cart">
//             <Link to="/cart">
//                 <button>
//                     <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '24px' }} /> My Cart {cartCount}
//                 </button>
//             </Link>
//         </div>
//     </header>
// );

// const Nav = () => (
//     <div className="nav">
//         {['Vegetables & Fruits', 'Dairy & Breakfast', 'Munchies', 'Cold Drinks & Juices', 'Instant & Frozen Food', 'Tea, Coffee & Health Drinks', 'Bakery & Biscuits', 'More'].map(item => (
//             <a href="#" key={item}>{item}</a>
//         ))}
//     </div>
// );

// const Product = ({ product, addToCart }) => (
//     <div className="product">
//         <img src={product.img} alt={product.name} />
//         <h3>{product.name}</h3>
//         <p>{product.weight}</p>
//         <div className="price1">₹{product.originalPrice}</div>
//         <div className="price">₹{product.discountedPrice}</div>
//         <button className="add-button" onClick={() => addToCart(product)}>ADD</button>
//     </div>
// );

// const ProductGrid = ({ addToCart }) => {
//     const products = [
//         { img: 'images/b1.avif', name: 'Amul Pure Milk Cheese Slices', weight: '200 g', originalPrice: 200, discountedPrice: 145 },
//         { img: 'images/b2.avif', name: 'Amul Fresh Malai Paneer', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        // { img: 'images/b1.avif', name: 'Amul Pure Milk Cheese Slices', weight: '200 g', originalPrice: 200, discountedPrice: 145 },
        // { img: 'images/b2.avif', name: 'Amul Fresh Malai Paneer', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        // { img: 'images/b3.avif', name: 'Fresh White Eggs', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        // { img: 'images/b4.avif', name: 'Amul Fresh Salted Butter', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        // { img: 'images/b5.avif', name: 'Fresh Brown Bread', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        // { img: 'images/b6.avif', name: 'Amul Fresh Malai Curd', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        // { img: 'images/b7.avif', name: 'Amul Fresh Milk', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        // { img: 'images/b8.avif', name: 'Amul Fresh Malai Paneer', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        // { img: 'images/b9.avif', name: 'Fresh White Eggs', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        // { img: 'images/b10.avif', name: 'Fresh Brown Eggs', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        // { img: 'images/b11.avif', name: 'Amul Fresh Milk', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        // { img: 'images/b12.avif', name: 'Fresh Brown Bread', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        // { img: 'images/b13.avif', name: 'Nestle Milkmaid Sweetened Condensed Milk', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        // { img: 'images/b14.avif', name: 'Amul Fresh White Bread', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        // { img: 'images/b15.avif', name: 'Amul Fresh Brown Bread', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        // { img: 'images/b16.avif', name: ' Haldiram Nagpur Aloo Bhujia', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        // { img: 'images/b17.avif', name: 'Amul White Eggs Pack Of(12)', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        // { img: 'images/b18.avif', name: 'Amul Mithai Mate Condensed Milk', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        // { img: 'images/b19.avif', name: 'Nestle Milkmaid Sweetened Condensed Milk', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        // { img: 'images/b20.avif', name: 'Amul Fresh Malai Paneer', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        // { img: 'images/b21.avif', name: 'Amul Fresh Malai Paneer', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        // { img: 'images/b22.avif', name: 'Amul Fresh Malai Paneer', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        // { img: 'images/b23.avif', name: 'Amul Fresh Malai Paneer', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        // { img: 'images/b24.avif', name: 'Amul Fresh Malai Paneer', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        // { img: 'images/b12.avif', name: 'Fresh Brown Bread', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        // { img: 'images/b13.avif', name: 'Nestle Milkmaid Sweetened Condensed Milk', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        // { img: 'images/b14.avif', name: 'Amul Fresh White Bread', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        // { img: 'images/b15.avif', name: 'Amul Fresh Brown Bread', weight: '200 g', originalPrice: 100, discountedPrice: 90 },

//     ];

//     return (
//         <div className="product-container">
//             {products.map(product => <Product key={product.name} product={product} addToCart={addToCart} />)}
//         </div>
//     );
// };

// const MainContent = () => (
//     <main>
//         <section className="product-section">
//             <h2>Buy Dairy, Breads & Eggs at Online grocery store in India</h2>
//             <p>Buy from several popular brands like Amul, Harvest Gold, Table White.<br />Are you super fond of online shopping because you hate crowded supermarkets?</p>
//         </section>
//         <section className="price-list">
//             <h2>Dairy, Breads & Eggs Price List</h2>
//             <ul>
//                 <li>1. Amul Pure Milk Cheese Slices - Rs.145</li>
//                 <li>2. Amul Fresh Malai Paneer - Rs.90</li>

//             </ul>
//             <p>This data was last updated on 9/13/2024</p>
//         </section>
//     </main>
// );

// const Footer = () => (
//     <div className="footer">
//         <div className="footer-container">
//             <div className="footer-column">
//                 <h3>Useful Links</h3>
//                 <ul>
//                     {['About', 'Careers', 'Blog', 'Press', 'Lead', 'Value', 'Privacy', 'Terms', 'FAQs', 'Security', 'Mobile', 'Contact'].map(link => (
//                         <li key={link}><a href="#">{link}</a></li>
//                     ))}
//                 </ul>
//             </div>
//             <div className="footer-column">
//                 <h3>Categories <a href="#">see all</a></h3>
//                 <ul>
//                     {['Vegetables & Fruits', 'Cold Drinks & Juices', 'Bakery & Biscuits', 'Dairy & Breakfast', 'Instant & Frozen Food', 'Sweet Tooth', 'Sauces & Spreads', 'Cleaning Essentials', 'Organic & Premium', 'Home & Office'].map(cat => (
//                         <li key={cat}><a href="#">{cat}</a></li>
//                     ))}
//                 </ul>
//             </div>
//             <div className="footer-column download-apps">
//                 <h3>Download App</h3>
//                 <button className='app-logo'><FontAwesomeIcon icon={faApple} style={{ fontSize: '24px' }} /> App Store</button>
//                 <button className='google-logo'><FontAwesomeIcon icon={faGooglePlay} style={{ fontSize: '24px' }} /> Google Play</button>
//             </div>
//         </div>
//         <div className="footer-bottom">
//             <div className="social-links">
//                 <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
//                 <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
//                 <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
//                 <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
//                 <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
//             </div>
//             <p>© Blink Commerce Private Limited, 2016-2024</p>
//             <p>"Blinkit" is owned & managed by Blink Commerce Private Limited.</p>
//         </div>
//     </div>
// );

// const HomePage = () => {
//     const [cartItems, setCartItems] = useState([]);

//     const addToCart = (product) => {
//         setCartItems([...cartItems, product]);
//         // alert(`${product.name} has been added to your cart!`);
//     };

//     return (
//         <div>
//             <Header cartCount={cartItems.length} />
//             <Nav />
//             <ProductGrid addToCart={addToCart} />
//             <MainContent />
//             <Footer />
//         </div>
//     );
// };

// export default HomePage;

// ======================================MAIN CODE -==========================================================

import React, { useState } from 'react';
import './HomePage.css'; 
import { faApple, faGooglePlay, faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';


// Header Component
const Header = ({ cartCount }) => (
    <header className="header">
        <div className="logo-img"><img src="images/blinkitlogo.webp" alt="Logo" /></div>
        <div className="delivery-info">
            <h4>Delivery in 14 minutes</h4>
            <p>B62, Pocket B, South City I, Sector...</p>
        </div>
        <div className="search-bar">
            <input type="text" placeholder="Search here" />
        </div>
        <div className="login"><Link to="loginpage">Login</Link></div>
        <div className="cart">
            {/* <Link to="cart"> */}
                <button>
                    <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '24px' }} /> My Cart {cartCount}
                </button>
            {/* </Link> */}
        </div>
    </header>
);

const Nav = () => (
    <div className="nav">
        {['Vegetables & Fruits', 'Dairy & Breakfast', 'Munchies', 'Cold Drinks & Juices', 'Instant & Frozen Food', 'Tea, Coffee & Health Drinks', 'Bakery & Biscuits', 'More'].map(item => (
            <a href="#" key={item}>{item}</a>
        ))}
    </div>
);



// Product Component
const Product = ({ product, addToCart }) => (
    <div className="product">
        <img src={product.img} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.weight}</p>
        <div className="price1">₹{product.originalPrice}</div>
        <div className="price">₹{product.discountedPrice}</div>
        
    <button className="add-button" onClick={() => addToCart(product)}>ADD</button>
    </div>
);

// ProductGrid Component
const ProductGrid = ({ addToCart }) => {
    const products = [
        { img: 'images/b1.avif', name: 'Amul Pure Milk Cheese Slices', weight: '200 g', originalPrice: 200, discountedPrice: 145 },
        { img: 'images/b2.avif', name: 'Amul Fresh Malai Paneer', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        { img: 'images/b1.avif', name: 'Amul Pure Milk Cheese Slices', weight: '200 g', originalPrice: 200, discountedPrice: 145 },
        { img: 'images/b2.avif', name: 'Amul Fresh Malai Paneer', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        { img: 'images/b3.avif', name: 'Fresh White Eggs', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        { img: 'images/b4.avif', name: 'Amul Fresh Salted Butter', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        { img: 'images/b5.avif', name: 'Fresh Brown Bread', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        { img: 'images/b6.avif', name: 'Amul Fresh Malai Curd', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        { img: 'images/b7.avif', name: 'Amul Fresh Milk', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        { img: 'images/b8.avif', name: 'Amul Fresh Malai Paneer', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        { img: 'images/b9.avif', name: 'Fresh White Eggs', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        { img: 'images/b10.avif', name: 'Fresh Brown Eggs', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        { img: 'images/b11.avif', name: 'Amul Fresh Milk', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        { img: 'images/b12.avif', name: 'Fresh Brown Bread', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        { img: 'images/b13.avif', name: 'Nestle Milkmaid Sweetened Condensed Milk', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        { img: 'images/b14.avif', name: 'Amul Fresh White Bread', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        { img: 'images/b15.avif', name: 'Amul Fresh Brown Bread', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        { img: 'images/b16.avif', name: ' Haldiram Nagpur Aloo Bhujia', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        { img: 'images/b17.avif', name: 'Amul White Eggs Pack Of(12)', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        { img: 'images/b18.avif', name: 'Amul Mithai Mate Condensed Milk', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        { img: 'images/b19.avif', name: 'Nestle Milkmaid Sweetened Condensed Milk', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        { img: 'images/b20.avif', name: 'Amul Fresh Malai Paneer', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        { img: 'images/b21.avif', name: 'Amul Fresh Malai Paneer', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        { img: 'images/b22.avif', name: 'Amul Fresh Malai Paneer', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        { img: 'images/b23.avif', name: 'Amul Fresh Malai Paneer', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        { img: 'images/b24.avif', name: 'Amul Fresh Malai Paneer', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        { img: 'images/b12.avif', name: 'Fresh Brown Bread', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        { img: 'images/b13.avif', name: 'Nestle Milkmaid Sweetened Condensed Milk', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        { img: 'images/b14.avif', name: 'Amul Fresh White Bread', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
        { img: 'images/b15.avif', name: 'Amul Fresh Brown Bread', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
    ];

    return (
        <div className="product-container">
            {products.map(product => <Product key={product.name} product={product} addToCart={addToCart} />)}
        </div>
    );
};

// // Cart Component to show items in the cart
const Cart = ({ cartItems, increment, decrement }) => (
    <div className="cart-container">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
            <p>No items in the cart.</p>
        ) : (
            cartItems.map(item => (
                <div key={item.name} className="cart-item">
                    <p>{item.name}</p>
                    <div>
                        <button onClick={() => decrement(item.name)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => increment(item.name)}>+</button>
                    </div>
                    <p>₹{item.discountedPrice * item.quantity}</p>
                </div>
            ))
        )}
    </div>
);

// MainContent Component
const MainContent = () => (
    <main>
        <section className="product-section">
            <h2>Buy Dairy, Breads & Eggs at Online grocery store in India</h2>
            <p>Buy from several popular brands like Amul, Harvest Gold, Table White.<br />Are you super fond of online shopping because you hate crowded supermarkets?</p>
        </section>
        <section className="price-list">
            <h2>Dairy, Breads & Eggs Price List</h2>
            <ul>
                <li>1. Amul Pure Milk Cheese Slices - Rs.145</li>
                <li>2. Amul Fresh Malai Paneer - Rs.90</li>
            </ul>
            <p>This data was last updated on 9/13/2024</p>
        </section>
    </main>
);

// Footer Component
const Footer = () => (
    <div className="footer">
        <div className="footer-container">
            <div className="footer-column">
                <h3>Useful Links</h3>
                <ul>
                    {['About', 'Careers', 'Blog', 'Press', 'Lead', 'Value', 'Privacy', 'Terms', 'FAQs', 'Security', 'Mobile',
                     'Contact'].map(link => (
                        <li key={link}><a href="#">{link}</a></li>
                    ))}
                </ul>
            </div>
            <div className="footer-column">
                <h3>Categories <a href="#">see all</a></h3>
                <ul>
                    {['Vegetables & Fruits', 'Cold Drinks & Juices', 'Bakery & Biscuits', 'Dairy & Breakfast', 'Instant & Frozen Food', 'Sweet Tooth', 'Sauces & Spreads', 'Cleaning Essentials', 'Organic & Premium', 'Home & Office'].map(cat => (
                        <li key={cat}><a href="#">{cat}</a></li>
                    ))}
                </ul>
            </div>
            <div className="footer-column download-apps">
                <h3>Download App</h3>
                <button className='app-logo'><FontAwesomeIcon icon={faApple} style={{ fontSize: '24px' }} /> App Store</button>
                <button className='google-logo'><FontAwesomeIcon icon={faGooglePlay} style={{ fontSize: '24px' }} /> Google Play</button>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="social-links">
                <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
            <p>© Blink Commerce Private Limited, 2016-2024</p>
            <p>"Blinkit" is owned & managed by Blink Commerce Private Limited.</p>
        </div>
    </div>
);

// Main HomePage Component
const HomePage = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.name === product.name);
            if (existingItem) {
                return prevItems.map(item =>
                    item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const incrementItem = (name) => {
        setCartItems(prevItems => 
            prevItems.map(item => 
                item.name === name ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decrementItem = (name) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.name === name);
            if (existingItem.quantity === 1) {
                return prevItems.filter(item => item.name !== name);
            }
            return prevItems.map(item => 
                item.name === name ? { ...item, quantity: item.quantity - 1 } : item
            );
        });
    };

    return (
        <div>
            <Header cartCount={cartItems.length} />
            <Nav />
            <ProductGrid addToCart={addToCart} />
            <MainContent />
            <Cart cartItems={cartItems} increment={incrementItem} decrement={decrementItem} />
            <Footer />
        </div>
    );
};

export default HomePage;


// ======================================================PAGE REFRESH CODE=================
// import React, { useState, useEffect } from 'react';
// import './HomePage.css'; 
// import { faApple, faGooglePlay, faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; 
// import { Link } from 'react-router-dom';

// // Header Component
// const Header = ({ cartCount }) => (
//     <header className="header">
//         <div className="logo-img"><img src="images/blinkitlogo.webp" alt="Logo" /></div>
//         <div className="delivery-info">
//             <h4>Delivery in 14 minutes</h4>
//             <p>B62, Pocket B, South City I, Sector...</p>
//         </div>
//         <div className="search-bar">
//             <input type="text" placeholder="Search here" />
//         </div>
//         <div className="login"><Link to="loginpage">Login</Link></div>
//         <div className="cart">
//             <Link to="cart">
//                 <button>
//                     <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '24px' }} /> My Cart {cartCount}
//                 </button>
//             </Link>
//         </div>
//     </header>
// );

// const Nav = () => (
//     <div className="nav">
//         {['Vegetables & Fruits', 'Dairy & Breakfast', 'Munchies', 'Cold Drinks & Juices', 'Instant & Frozen Food', 'Tea, Coffee & Health Drinks', 'Bakery & Biscuits', 'More'].map(item => (
//             <a href="#" key={item}>{item}</a>
//         ))}
//     </div>
// );

// // Product Component
// const Product = ({ product, addToCart }) => (
//     <div className="product">
//         <img src={product.img} alt={product.name} />
//         <h3>{product.name}</h3>
//         <p>{product.weight}</p>
//         <div className="price1">₹{product.originalPrice}</div>
//         <div className="price">₹{product.discountedPrice}</div>
//         <button className="add-button" onClick={() => addToCart(product)}>ADD</button>
//     </div>
// );

// // ProductGrid Component
// const ProductGrid = ({ addToCart }) => {
//     const products = [
//         { img: 'images/b1.avif', name: 'Amul Pure Milk Cheese Slices', weight: '200 g', originalPrice: 200, discountedPrice: 145 },
//         { img: 'images/b2.avif', name: 'Amul Fresh Malai Paneer', weight: '200 g', originalPrice: 100, discountedPrice: 90 },
//         // Add more products as needed...
//     ];

//     return (
//         <div className="product-container">
//             {products.map(product => <Product key={product.name} product={product} addToCart={addToCart} />)}
//         </div>
//     );
// };

// // Cart Component to show items in the cart
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

// // MainContent Component
// const MainContent = () => (
//     <main>
//         <section className="product-section">
//             <h2>Buy Dairy, Breads & Eggs at Online grocery store in India</h2>
//             <p>Buy from several popular brands like Amul, Harvest Gold, Table White.<br />Are you super fond of online shopping because you hate crowded supermarkets?</p>
//         </section>
//         <section className="price-list">
//             <h2>Dairy, Breads & Eggs Price List</h2>
//             <ul>
//                 <li>1. Amul Pure Milk Cheese Slices - Rs.145</li>
//                 <li>2. Amul Fresh Malai Paneer - Rs.90</li>
//             </ul>
//             <p>This data was last updated on 9/13/2024</p>
//         </section>
//     </main>
// );

// // Footer Component
// const Footer = () => (
//     <div className="footer">
//         <div className="footer-container">
//             <div className="footer-column">
//                 <h3>Useful Links</h3>
//                 <ul>
//                     {['About', 'Careers', 'Blog', 'Press', 'Lead', 'Value', 'Privacy', 'Terms', 'FAQs', 'Security', 'Mobile', 'Contact'].map(link => (
//                         <li key={link}><a href="#">{link}</a></li>
//                     ))}
//                 </ul>
//             </div>
//             <div className="footer-column">
//                 <h3>Categories <a href="#">see all</a></h3>
//                 <ul>
//                     {['Vegetables & Fruits', 'Cold Drinks & Juices', 'Bakery & Biscuits', 'Dairy & Breakfast', 'Instant & Frozen Food', 'Sweet Tooth', 'Sauces & Spreads', 'Cleaning Essentials', 'Organic & Premium', 'Home & Office'].map(cat => (
//                         <li key={cat}><a href="#">{cat}</a></li>
//                     ))}
//                 </ul>
//             </div>
//             <div className="footer-column download-apps">
//                 <h3>Download App</h3>
//                 <button className='app-logo'><FontAwesomeIcon icon={faApple} style={{ fontSize: '24px' }} /> App Store</button>
//                 <button className='google-logo'><FontAwesomeIcon icon={faGooglePlay} style={{ fontSize: '24px' }} /> Google Play</button>
//             </div>
//         </div>
//         <div className="footer-bottom">
//             <div className="social-links">
//                 <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
//                 <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
//                 <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
//                 <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
//                 <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
//             </div>
//             <p>© Blink Commerce Private Limited, 2016-2024</p>
//             <p>"Blinkit" is owned & managed by Blink Commerce Private Limited.</p>
//         </div>
//     </div>
// );

// // Main HomePage Component
// const HomePage = () => {
//     const [cartItems, setCartItems] = useState(() => {
//         // Retrieve cart items from localStorage if available
//         const savedCart = localStorage.getItem('cartItems');
//         return savedCart ? JSON.parse(savedCart) : [];
//     });

//     useEffect(() => {
//         // Save cart items to localStorage whenever cartItems changes
//         localStorage.setItem('cartItems', JSON.stringify(cartItems));
//     }, [cartItems]);

//     const addToCart = (product) => {
//         setCartItems((prevItems) => {
//             const existingItem = prevItems.find(item => item.name === product.name);
//             if (existingItem) {
//                 return prevItems.map(item =>
//                     item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
//                 );
//             }
//             return [...prevItems, { ...product, quantity: 1 }];
//         });
//     };

//     const incrementItem = (name) => {
//         setCartItems(prevItems => 
//             prevItems.map(item => 
//                 item.name === name ? { ...item, quantity: item.quantity + 1 } : item
//             )
//         );
//     };

//     const decrementItem = (name) => {
//         setCartItems(prevItems => {
//             const existingItem = prevItems.find(item => item.name === name);
//             if (existingItem.quantity === 1) {
//                 return prevItems.filter(item => item.name !== name);
//             }
//             return prevItems.map(item => 
//                 item.name === name ? { ...item, quantity: item.quantity - 1 } : item
//             );
//         });
//     };

//     return (
//         <div>
//             <Header cartCount={cartItems.length} />
//             <Nav />
//             <ProductGrid addToCart={addToCart} />
//             <MainContent />
//             <Cart cartItems={cartItems} increment={incrementItem} decrement={decrementItem} />
//             <Footer />
//         </div>
//     );
// };

// export default HomePage;
