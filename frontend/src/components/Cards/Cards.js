import React from 'react'
import './Cards.css'

const Cards = ({ products }) => {
  console.log('products', products)
  return (
    <div className='cardContainer'>
      {products.map((product) => {
        return (
          <div className='cardContainer-item'>
            <div>
              <img src={product.image}></img>
            </div>
            <div>
              <div className='image-and-titleInCards'>
                <div style={{ width: '30px' }}>
                  <img
                    src={product.image}
                    style={{ width: '100%', borderRadius: '50%' }}
                    alt=''
                  />
                </div>
                <p>{product.productName}</p>
              </div>
              <p>Tawshif is a web designer living in Bangladesh</p>
              {/* <p>Delete :color{product.carColor}</p> */}
              <button>Follow</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Cards
