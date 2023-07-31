import React from 'react'
import './product.css'
import Shop from '../ShopBtn/Shop'
import CategoryBtn from '../categoryBtn/CategoryBtn'
import ProductImg from '../../assets/shoe_image.png'
import flipkart from '../../assets/flipkart.png'
import Amazon from '../../assets/amazon.png'

const Product = () => {
  return (
    <div>
        <div className="container">
            <div className="product-container">
                <div className="product-details">
                    <div className="product-title">
                        <h1>YOUR FEET DESERVE THE BEST</h1>
                    </div>
                    <div className="product-description">
                        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                    </div>
                    <div className="buy-btn">
                      <Shop/>
                      <CategoryBtn/>
                    </div>
                    <div className="product-bottom">
                        <p>Also Available On</p>
                        <div className="web-icons">
                            <img src={flipkart} alt="" />
                            <img src={Amazon} alt="" />
                            
                        </div>
                    </div>
                </div>
                <div className="product-img">
                    <img src={ProductImg} alt="" />
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product