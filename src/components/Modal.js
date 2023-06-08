import React from 'react'
import { Modal } from 'react-fade-modal'
function MyModal() {
  return (
    <>
    <Modal>
     <div className="modal fade">
            <div className="modal-dialog"> 
                <div className="modal-content">
                    <button className="modal-close icofont-close" ></button>
                    <div className="product-view">
                        <div className="row">
                            <div className="col-md-6 col-lg-6">
                                <div className="view-gallery">
                                    <div className="view-label-group">
                                        <label className="view-label new">new</label>
                                        <label className="view-label off">-10%</label>
                                    </div>
                                    <ul className="preview-slider slider-arrow"> 
                                        <li><img src="assets/images/Home-1.jpg" alt="product"/></li>
                                    </ul>
                                    <ul className="thumb-slider">
                                        <li><img src="assets/images/product/01.jpg" alt="product"/></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <div className="view-details">
                                    <h3 className="view-name">
                                        <a href="product-video.html">existing product name</a>
                                    </h3>
                                    <div className="view-meta">
                                        <p>SKU:<span>1234567</span></p>
                                        <p>BRAND:<a href="#">radhuni</a></p>
                                    </div>
                                    <div className="view-rating">
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="active icofont-star"></i>
                                        <i className="icofont-star"></i>
                                        <a href="product-video.html">(3 reviews)</a>
                                    </div>
                                    <h3 className="view-price">
                                        <del>$38.00</del>
                                        <span>$24.00<small>/per kilo</small></span>
                                    </h3>
                                    <p className="view-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit non tempora magni repudiandae sint suscipit tempore quis maxime explicabo veniam eos reprehenderit fuga</p>
                                    <div className="view-list-group">
                                        <label className="view-list-title">tags:</label>
                                        <ul className="view-tag-list">
                                            <li><a href="#">organic</a></li>
                                            <li><a href="#">vegetable</a></li>
                                            <li><a href="#">chilis</a></li>
                                        </ul>
                                    </div>
                                    <div className="view-list-group">
                                        <label className="view-list-title">Share:</label>
                                        <ul className="view-share-list">
                                            <li><a href="#" className="icofont-facebook" title="Facebook"></a></li>
                                            <li><a href="#" className="icofont-twitter" title="Twitter"></a></li>
                                            <li><a href="#" className="icofont-linkedin" title="Linkedin"></a></li>
                                            <li><a href="#" className="icofont-instagram" title="Instagram"></a></li>
                                        </ul>
                                    </div>
                                    <div className="view-add-group">
                                        <button className="product-add" title="Add to Cart">
                                            <i className="fas fa-shopping-basket"></i>
                                            <span>add to cart</span>
                                        </button>
                                    </div>
                                    <div className="view-action-group">
                                        <a className="view-wish wish" href="#" title="Add Your Wishlist">
                                            <i className="icofont-heart"></i>
                                            <span>add to wish</span>
                                        </a>
                                        <a className="view-compare" href="compare.html" title="Compare This Item">
                                            <i className="fas fa-random"></i>
                                            <span>Compare This</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div> 
        </div>
        </Modal>
    </>
  )
}

export default MyModal