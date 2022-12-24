import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Product() {

    const dispatch = useDispatch();

    const state = useSelector(state => state.productState);
    console.log(state.product);
    const navigator = useNavigate();

    useEffect(() => {
        dispatch({
            type: "GET"
        })
    }, []);

    const renderProduct = () => {
        if(state.loading) {
            return <h3 className=''>Loading...</h3>
        }
        return state.product.map(item => (
            <div className='col mb-5'
                key={item.productId}
                onClick={() => navigator(`/products/${item.productId}`)}>
                <div className='card h-100'>
                    <img src={item.imageUrl} className='card-img-top' />
                    <div className='card-body p-4'>
                        <div className='text-center'>
                            <h5 className='fw-bolder fs-5'>{item.productName}</h5>
                            <p className='fw-light'>{item.price}</p>
                        </div>
                    </div>
                    <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                        <div className='text-center'>
                            <Link to={`/products/${item.productId}`} className='border border-secondary px-2 py-2 text-decoration-none' style={{color: "#ef975f"}}> View Detail</Link>
                        </div>
                    </div>
                </div>
            </div>
        ))
    }

    return (
        <section className='content'>
            <div className='container px-3 px-lg-3 mt-2'>
                <div className='content-heading text-center mb-5'>
                    <h2 className='text-uppercase fw-bolder'>Discover product</h2>
                </div>
                <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-5 justify-content-center'>
                  {renderProduct()}
                </div>
            </div>
        </section>
    )
}

export default Product
