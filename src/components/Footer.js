import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // Create a separate CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>get on the list</h5>
            <ul className="list-unstyled">
              <li><a href="/">exclusive discounts / giveaways /premier access</a></li>
              
            </ul>
          </div>
          <div className="col-md-3">
            <h5>shop</h5>
            <ul className="list-unstyled">
              <li><a href="/">brand</a></li>
              <li><a href="/">apparel</a></li>
              <li><a href="/">art</a></li>
              <li><a href="/">accessories</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>company</h5>
            <ul className="list-unstyled">
              <li><a href="/">about us</a></li>
              <li><a href="/">brava spotlight</a></li>
              <li><a href="/">join brava</a></li>
              <li><a href="/">become an affiliate</a></li>
              <li><a href="/">privacy policy</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>help</h5>
            <ul className="list-unstyled">
              <li><a href="/">info@bravaland.com</a></li>
              <li><a href="/">returns/exchanges</a></li>
              <li><a href="/">faqs</a></li>
              <li><a href="/">contact us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
