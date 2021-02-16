import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'
import coupon from './image/coupon.png'
import truck from './image/checked-truck.png'
import gift from './image/gift--v1.png'

function Filters() {
    const state = useContext(GlobalState)
    const [categories] = state.categoriesAPI.categories

    const [category, setCategory] = state.productsAPI.category
    const [sort, setSort] = state.productsAPI.sort
    const [search, setSearch] = state.productsAPI.search


    const handleCategory = e => {
        setCategory(e.target.value)
        setSearch('')
    }

    return (
        <div className="filter_menu">
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


                <div className="row sort">
                    <span>Sort By: </span>
                    <select value={sort} onChange={e => setSort(e.target.value)} >
                        <option value=''>Newest</option>
                        <option value='sort=oldest'>Oldest</option>
                        <option value='sort=-sold'>Best sales</option>
                        <option value='sort=-price'>Price: Hight-Low</option>
                        <option value='sort=price'>Price: Low-Hight</option>
                    </select>
                </div>
            </div>
            
        </div>
    )
}

export default Filters
