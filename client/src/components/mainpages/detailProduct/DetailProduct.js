import React, {useContext, useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'
import coupon from '../products/image/coupon.png'
import truck from '../products/image/checked-truck.png'
import gift from '../products/image/gift--v1.png'


function DetailProduct() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const addCart = state.userAPI.addCart
    const [detailProduct, setDetailProduct] = useState([])

    const [categories] = state.categoriesAPI.categories

    const [category, setCategory] = state.productsAPI.category
    const [search, setSearch] = state.productsAPI.search

    const handleCategory = e => {
        setCategory(e.target.value)
        setSearch('')
    }

    useEffect(() =>{
        if(params.id){

            products.forEach(product => {
                if(product._id === params.id) setDetailProduct(product)
            })
        }
    },[params.id, products])

    if(detailProduct.length === 0) return null;


    return (
        <>
            <div className="search_list">
                <h2>Shop your desingner dresses</h2>
                <p>Ready to waer dresses toilored for you from online. Herry up while stock lasts.</p>
                <div className="search_bar">
                    <input className="search" type="text" value={search} placeholder="Search your products from here"
                    onChange={e => setSearch(e.target.value.toLowerCase())} />
                </div>
            </div>

           
            {/* --------- Test promotion section -------- */}
            <div className="content">
                <div className="layout_side layout_promotion1">
                    <h2>Coupon Savings</h2>
                    <img className="promotion_img_coupon" src={coupon} alt="Logo" align="right" />
                    <p>Up to 60% everyday essentials</p>
                    <button className="button">Shop Coupon</button>

                </div>
                <div className="layout_side layout_promotion2">
                    <h2>Free Delivery</h2>
                    <img className="promotion_img_truck" src={truck} alt="Logo" align="right"/>
                    <p>With selected items</p>
                    <button className="button">Deliver Now</button>

                </div>
                <div className="layout_side layout_promotion3">
                    <h2>Gift Voucher</h2>
                    <img className="promotion_img_gift" src={gift} alt="Logo" align="right"/>
                    <p>With personal care items</p>
                    <button className="button">Gift Now</button>
                    
                </div>
            </div>



            {/* ---- Products category section */}
            <div className="main_space">
                <div className="row">
                    <span>Filters: </span>
                    <select name="category" value={category} onChange={handleCategory} >
                        <option value=''>All Products</option>
                        {
                            categories.map(category => (
                                <option value={"category=" + category._id} key={category._id}>
                                    {category.name}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </div>



            <div className="detail">
                <img src={detailProduct.images.url} alt="" />
                <span></span>
                <div className="box-detail">
                    <div className="row">
                        <h2>{detailProduct.title}</h2>
                        <span className="price_before">$15</span>
                        <span>$ {detailProduct.price}</span>
                    </div>
                    
                    <p>{detailProduct.description}</p>
                    <p>{detailProduct.content}</p>
                    <p>Sold: {detailProduct.sold}</p>
                    <p>Date: {detailProduct.createdAt}</p>

                    <Link to="/cart" className="cart"
                    onClick={() => addCart(detailProduct)}>
                        Cart
                    </Link>
                    <div className="type_size">
                        <p>Male T-Shirt</p>
                        <p>Single Color</p>
                    </div>
                    <h5>Id: {detailProduct.product_id}</h5>
                </div>
            </div>
            <br/>

            <div>
                <h2>Related products</h2>
                <div className="products">
                    {
                        products.map(product => {
                            return product.category === detailProduct.category 
                                ? <ProductItem key={product._id} product={product} /> : null
                        })
                    }
                </div>
            </div>

            {/* --------------------- Comment Test not work */}
            <div className="style_comment">
                <div className="comment">
                    <h2>Comments</h2>
                </div>
                <div className="review-section">
                    <div className="header-review">
                        <div>
                            <i className="fa fa-user-circle fa-4x"></i>
                        </div>
                        <div className="Anonymous">
                            <h3>Anonymous</h3>
                            <p>Today 4:21pm - 12.06.2020</p>
                        </div>
                    </div>
                    <p id="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknewn printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting remaining essentially unchanged.</p>
                </div>
                <div className="review-section">
                    <div className="header-review">
                        <div>
                            <i className="fa fa-user-circle fa-4x"></i>
                        </div>
                        <div className="Anonymous">
                            <h3>Anonymous</h3>
                            <p>Today 4:21pm - 12.06.2020</p>
                        </div>
                    </div>
                    <p id="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknewn printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting remaining essentially unchanged.</p>
                </div>
                <div className="write-your-text">
                    <label type="write">Write your review here</label>
                    <textarea type="text" id="write" name="write" />
                </div>
                <div className="button1">
                    <div className="send">
                        <button className="button-click color" type="button"><i className="fa fa-share-square fa-1x"> Send</i></button>
                    </div>
                    <div className="discard">
                        <button className="button-click" type="button"><i className="fa fa-times fa-1x"> Discard</i></button>
                    </div>
                </div>
            </div>
            

        </>
    )
}

export default DetailProduct
