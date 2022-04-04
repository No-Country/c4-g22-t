import React from 'react'
import Footer from './footerComponent/style'


export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>Hekto</Footer.Title>
                    <Footer.Link href="#">Contact Info</Footer.Link>
                    <Footer.Link href="#">17 Princess Road, London, Greater London NW1 8JR, UK</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Catagories</Footer.Title>
                    <Footer.Link href="#">Laptops and Computers</Footer.Link>
                    <Footer.Link href="#">Cameras and Photography</Footer.Link>
                    <Footer.Link href="#">Smart Phones and Tablets</Footer.Link>
                    <Footer.Link href="#">Video Games and Consoles</Footer.Link>
                    <Footer.Link href="#">Waterproof Headphones</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Customer Care</Footer.Title>
                    <Footer.Link href="#">My Account</Footer.Link>
                    <Footer.Link href="#">Discount</Footer.Link>
                    <Footer.Link href="#">Returns</Footer.Link>
                    <Footer.Link href="#">Orders History</Footer.Link>
                    <Footer.Link href="#">Order Tracking</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Pages</Footer.Title>
                    <Footer.Link href="#">Blog</Footer.Link>
                    <Footer.Link href="#">Browse the Shop</Footer.Link>
                    <Footer.Link href="#">Category</Footer.Link>
                    <Footer.Link href="#">Pre-Built Pages</Footer.Link>
                    <Footer.Link href="#">Visual Composer Elements</Footer.Link>
                    <Footer.Link href="#">WooCommerce Pages</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}