import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import axios from 'axios'
import CheckBox from './components/CheckBox/CheckBox'
import Radio from './components/Radio/Radio'
import Cards from './components/Cards/Cards'
import './App.css'
import { filterFunction } from './filterFunction'

const App = () => {
  // all state
  const [products, setProducts] = useState([])
  const [filterProducts, setFilterProducts] = useState({
    brand: [],
    color: '',
    search: '',
  })
  const [filterProductsData, setFilterProductsData] = useState([])
  const [isFiltered, setIsFiltered] = useState(false)
  const [limit, setLimit] = useState(5)
  const [isLoading, setIsLoading] = useState(false)
  const [isChanged, setIsChanged] = useState(true)

  // data from checkbox => brandName and radiobutton => carColor
  const uniqueBrandName = [...new Set(products.map((item) => item.brandName))]
  const uniqueColor = [...new Set(products.map((item) => item.carColor))]

  // filter for infinite scrool
  const productsAllData = products && products.filter((j, i) => i <= limit)
  const onScroll = (e) => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setIsLoading(true)
      setLimit(limit + 5)
      setIsChanged(!isChanged)
      console.log({ limit })
    } else {
      setIsLoading(false)
    }
  }
  console.log('Loading', isLoading)
  // filter for infinite scrool
  const filterProductsAllData = filterProductsData.filter((j, i) => i <= limit)
  console.log({ filterProductsAllData })
  useEffect(() => {
    window.addEventListener('scroll', onScroll)
  }, [isChanged])

  // fetch all data
  useEffect(() => {
    const fetchFunc = async () => {
      try {
        const { data } = await axios.get(
          'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/car.json'
        )
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchFunc()
  }, [])

  //
  useEffect(() => {
    filterFunction(products, filterProducts, setFilterProductsData)
  }, [filterProducts])
  return (
    <>
      <Navbar
        filterProducts={filterProducts}
        setFilterProducts={setFilterProducts}
        isFiltered={isFiltered}
        setIsFiltered={setIsFiltered}
      />
      <div className='containerForCheckboxAndCards'>
        <div className='containerForCheckbox-Radio'>
          <p>Brands</p>
          <CheckBox
            brandName={uniqueBrandName}
            filterProducts={filterProducts}
            setFilterProducts={setFilterProducts}
            isFiltered={isFiltered}
            setIsFiltered={setIsFiltered}
          />
          <p>Choose type</p>
          <Radio
            carColor={uniqueColor}
            filterProducts={filterProducts}
            setFilterProducts={setFilterProducts}
            isFiltered={isFiltered}
            setIsFiltered={setIsFiltered}
          />
        </div>
        <div>
          {console.log('Func', filterProductsData.length == 0 && isFiltered)}
          <Cards
            products={
              filterProductsData.length > 0 && isFiltered
                ? filterProductsAllData
                : filterProductsData.length == 0 && !isFiltered
                ? productsAllData
                : []
            }
          />
        </div>
      </div>
    </>
  )
}

export default App
