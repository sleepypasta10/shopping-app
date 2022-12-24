import React from 'react';
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLeft } from "react-icons/ai";

function Cart() {
  const items = useSelector(state => state.productState.cart);
  const dispatch = useDispatch();
  const navigator = useNavigate()

  const totalPrice = (items) => {
    let total = 0;

    items.forEach(element => (total += element.quantity * element.price));
    return total;
  }

  let shippingCost = 0;

  const handleRemove = (id) => {
    let confirmation = confirm("Do you want to remove this product?")
    if (confirmation) {
      dispatch({
        type: "REMOVE_ITEM",
        payload: id
      })
    }
  }


  return (
    <div className='container px-3 px-lg-3'>
      <div className='col-lg-12'>
        <div className='d-flex justify-content-between align-items-center mb-5 mt-2'>
          <h1 className="fw-bold mb-0 text-black">Your Cart</h1>
        </div>
      </div>
      <div className='row justify-content-evenly' >
        <div className='col-lg-8'>
          <div className='card card-registration card-registration-2' style={{ borderRadius: '5px!important' }}>
            <div className='card-body p-0'>
              <div className='row gx-2'>
                <div className='p-5'>
                  {items.length <= 0 ? (
                    <div className='d-flex justify-content-center'>
                      <h5 className='text-center mt-3 fs-3'>
                        Your cart is empty
                      </h5>
                    </div>
                  ) : (
                    <>
                      {items.length > 0 && items.map((items, index) => (
                        <div className='row mb-4 d-flex justify-content-between align-items-center ' key={index}>
                          <div className='col-md-2 col-lg-2 col-xl-2'>
                            <img src={items?.imageUrl}
                              className="img-fluid rounded-3" />
                          </div>
                          <div className='col-md-3 col-lg-3 col-xl-3'>
                            <h5 className="text-black mb-0">{items?.productName}</h5>
                          </div>
                          <div className='col-md-3 col-lg-3 col-xl-2 d-flex'>
                            <button
                              className='btn text-decoration-none px-2'
                              onClick={() => dispatch({
                                type: "DECREMENT",
                                payload: {
                                  productId: items.productId,
                                  decrement: 1
                                }
                              })}>
                              -
                            </button>
                            <div className='form-control text-center px-auto py-auto'>{items?.quantity}</div>
                            <button
                              className='btn text-decoration-none px-2'
                              onClick={() => dispatch({
                                type: "INCREMENT",
                                payload: {
                                  productId: items.productId,
                                  increment: 1
                                }
                              })}>
                              +
                            </button>
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 className="mb-0">{items?.quantity} x ${items?.price}</h6>
                          </div>
                          <div className='col-md-1 col-lg-1 col-xl-1 text-end'>
                            <FaTimes className='text-muted' onClick={() => handleRemove(items.productId)} />
                          </div>
                          <hr className="my-3"></hr>
                        </div>
                      ))}
                    </>
                  )}
                  <div className="pt-4 cursor-pointer" onClick={() => navigator("/")}>
                    <div className='d-flex align-items-center text-center'>
                      <AiOutlineLeft className='text-center mb-2 mx-1' /><h6 className="text-body"> Back to shop</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4' >
          <div className='p-5' style={{ backgroundColor: "#ffead8", borderRadius: '5px' }}>
            <div className='d-flex justify-content-start mb-4'>
              <h5 className='text-uppercase'>Other Detail</h5>
            </div>
            <div className='d-flex justify-content-between mb-3'>
              <h6>Subtotal</h6>
              <h6>${totalPrice(items).toFixed(2)}</h6>
            </div>
            <div className='d-flex justify-content-between mb-3'>
              <h6>Shipping Cost</h6>
              <h6>${items.length > 0 ? (shippingCost = 10) : 0}</h6>
            </div>
            <div className='d-flex justify-content-between align-items-center mt-5 mb-3'>
              <h3 className='text-center'>Total Price</h3>
              <h6 className='text-center'>${(totalPrice(items) + shippingCost).toFixed(2)}</h6>
            </div>
            <div className='d-flex gap-4 justify-content-center align-items-center'>
              <button className='btn btn-secondary btn-block btn-lg px-5'>Check Out</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart
