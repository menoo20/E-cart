import React from 'react'
import "../style/Footer.scss"
import Styled from "styled-components"
import ShopnowBtn from './styledComponents/ShopnowBtn'


const Anchor = Styled.a`
 text-decoration: none;
 color: grey;
 margin-left: 10px;
 transition: all .3s ease;
 &:hover{
     color: #8bd122;
 }
`
const Subscribe = Styled(ShopnowBtn)`
background: #8bd122 !important;
color: red;
display: none;
`

const Footer = () => {
  return (
    <footer className="footer spad">
        <div className="container px-0">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="footer__about">
                        <div className="footer__about__logo">
                            <a href="./index.html"><img src="img/logo.png" alt=""></img></a>
                        </div>
                        <ul>
                            <li>Address: 60-49 Road 11378 New York</li>
                            <li>Phone: +01065858177</li>
                            <li>Email: contact@ameenwebdev.com</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                    <div className="footer__widget">
                        <h6>Useful Links</h6>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">About Our Shop</a></li>
                            <li><a href="#">Secure Shopping</a></li>
                            <li><a href="#">Delivery infomation</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Our Sitemap</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">Who We Are</a></li>
                            <li><a href="#">Our Services</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Innovation</a></li>
                            <li><a href="#">Testimonials</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="footer__widget">
                        <h6>Join Our Newsletter Now</h6>
                        <p>Get E-mail updates about our latest shop and special offers.</p>
                        <form action="#">
                            <input type="text" placeholder="Enter your mail"></input>
                            <Subscribe   content='Subscribe' ></Subscribe>
                        </form>
                        <div className="footer__widget__social">
                            <a href="#"><i className="bi bi-facebook"></i></a>
                            <a href="#"><i className="bi bi-instagram"></i></a>
                            <a href="#"><i className="bi bi-twitter"></i></a>
                            <a href="#"><i className="bi bi-pinterest"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="footer__copyright">
                        <div className="footer__copyright__text">
                           <p>
                           Copyright &copy;
                            All rights reserved To   
                            <Anchor href="https:www.ameenwebdev.com">
                                ameenwebdev
                            </Anchor>
                           </p>
                        </div>
                    <div className="footer__copyright__payment"><img src="img/payment-item.png" alt=""></img></div>
                </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer