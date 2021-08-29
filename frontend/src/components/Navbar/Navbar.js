import React from 'react'
import './Navbar.css'
const Navbar = ({
  filterProducts,
  setFilterProducts,
  isFiltered,
  setIsFiltered,
}) => {
  return (
    <div className='navbar-container'>
      <input
        type='search'
        onChange={(e) => {
          setIsFiltered(true)
          return setFilterProducts({
            ...filterProducts,
            search: e.target.value,
          })
        }}
        placeholder='New Car'
      />
    </div>
  )
}

export default Navbar
