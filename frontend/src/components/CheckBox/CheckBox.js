import React from 'react'
import './CheckBox.css'

const CheckBox = ({
  brandName,
  filterProducts,
  setFilterProducts,
  setIsFiltered,
}) => {
  const handleChange = (e) => {
    setIsFiltered(true)
    setFilterProducts({
      ...filterProducts,
      brand: [...filterProducts.brand, e.target.value],
    })
  }

  return (
    <>
      <div className='checkbox-container'>
        <div className='checkbox-container-items'>
          {brandName.map((name) => {
            return (
              <>
                <div>
                  <input
                    value={name}
                    type='checkbox'
                    onChange={handleChange}
                  ></input>
                  <span>{name}</span>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default CheckBox
