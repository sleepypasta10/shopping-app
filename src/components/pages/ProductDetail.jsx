import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {AiOutlineLeft} from "react-icons/ai";

function ProductDetail() {
    const [quantity, setQuantity] = useState(1);
    const {productId} = useParams();
    const navigator = useNavigate();
    const dispatch = useDispatch();

    const items = useSelector(state => state.productState.product)
    
    let detailItem = [];
    if (items && items.length > 0) {
        detailItem = items.filter((value) => {
            return value.productId === productId
        })
    }
    

    return (
        <div className='container px-3'>
            <div className='row align-items center'>
                <div className='col-md-6'>
                    <div className='p-5'>
                        <img className='img-fluid' src={detailItem[0]?.imageUrl} />
                    </div>
                    
                </div>
                <div className='col-md-6'>
                    <div className='p-5'>
                        <div className='mt-3 mb-4'>
                            <h2 className='fw-bold fs-3'>{detailItem[0]?.productName}</h2>
                        </div>
                        <div className='mt-2 mb-4'>
                            <p className='lead'>{detailItem[0]?.description}</p>
                        </div>
                        <div className='d-inline-block'>
                            <div className='d-flex justify-content-center align-items-center'>
                                <h4 className='fs-3'>$ </h4>
                                <h1 className='fs-1'>{detailItem[0]?.price}</h1>
                            </div>
                        </div>
                        <div className='mt-4 d-flex justify-content-between'>
                            <div className='d-flex gap-4 justify-content-center align-items-center'>
                            <button className='button' onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
                               <div className='border border-secondary px-4'>{quantity}</div> 
                            <button className='button' onClick={() => setQuantity((prev) => prev + 1)}>+</button>
                            </div>
                            <button
                            onClick={() => dispatch({
                                type: "ADD_TO_CART",
                                payload: {
                                    productId: detailItem[0].productId,
                                    productName: detailItem[0].productName,
                                    price: detailItem[0].price,
                                    imageUrl: detailItem[0].imageUrl,
                                    description: detailItem[0].description,
                                    quantity: quantity
                                }
                            })} 
                            className='btn btn-secondary rounded-pill'>Add to cart</button>
                        </div>
                        <div className='d-flex justify-content-start align-items-center cursor-pointer mt-5' onClick={() => navigator("/")}>
                        <AiOutlineLeft className='text-center mb-2 mx-1' /><h6 className='text-body'>Continue Shopping</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
