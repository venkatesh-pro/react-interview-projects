import React from 'react'
import './Radio.css'

const Radio = ({
  carColor,
  filterProducts,
  setFilterProducts,
  setIsFiltered,
}) => {
  const handleChange = (e) => {
    setIsFiltered(true)
    setFilterProducts({
      ...filterProducts,
      color: e.target.value,
    })
  }
  return (
    <>
      <div className='radio-container'>
        {carColor.map((color) => {
          return (
            <>
              <div>
                <input
                  value={color}
                  type='radio'
                  name='color'
                  onChange={handleChange}
                ></input>{' '}
                <span>{color}</span>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default Radio
