export function filterFunction(
  products,
  filterProducts,
  setFilterProductsData
) {
  // codition for filterProducts.brand.length > 0 && filterProducts.color && filterProducts.search
  if (
    filterProducts.brand.length > 0 &&
    filterProducts.color &&
    filterProducts.search
  ) {
    const data = filterProducts.brand.map((brand) => {
      return products.filter((currentElement) => {
        if (
          currentElement.brandName == brand &&
          currentElement.carColor == filterProducts.color
        ) {
          return currentElement.productName.includes(filterProducts.search)
        }
      })
    })
    setFilterProductsData(data.flat())
  }
  // condition for  filterProducts.brand.length > 0 && filterProducts.search && filterProducts.color == ''
  else if (
    filterProducts.brand.length > 0 &&
    filterProducts.search &&
    filterProducts.color == ''
  ) {
    const data = filterProducts.brand.map((brand) => {
      return products.filter((currentElement) => {
        if (currentElement.brandName == brand) {
          return currentElement.productName.includes(filterProducts.search)
        }
      })
    })
    console.log(data)
    setFilterProductsData(data.flat())
  }
  // condition for filterProducts.brand.length > 0 && filterProducts.color && filterProducts.search == ''
  else if (
    filterProducts.brand.length > 0 &&
    filterProducts.color &&
    filterProducts.search == ''
  ) {
    const data = filterProducts.brand.map((brand) => {
      return products.filter((currentElement) => {
        if (
          currentElement.brandName == brand &&
          currentElement.carColor == filterProducts.color
        ) {
          return currentElement
        }
      })
    })
    setFilterProductsData(data.flat())
  }
  // condition for filterProducts.brand.length > 0 && filterProducts.color == '' && filterProducts.search == ''
  else if (
    filterProducts.brand.length > 0 &&
    filterProducts.color == '' &&
    filterProducts.search == ''
  ) {
    const data = filterProducts.brand.map((brand) => {
      return products.filter((currentElement) => {
        if (currentElement.brandName == brand) {
          return currentElement
        }
      })
    })
    setFilterProductsData(data.flat())
  }
  // condition for filterProducts.brand.length === 0 && filterProducts.color && filterProducts.search == ''
  else if (
    filterProducts.brand.length === 0 &&
    filterProducts.color &&
    filterProducts.search == ''
  ) {
    const data = products.filter((currentElement) => {
      if (currentElement.carColor == filterProducts.color) {
        return currentElement
      }
    })
    setFilterProductsData(data.flat())
  }
  // condition for filterProducts.search && filterProducts.brand.length === 0 && filterProducts.color == ''
  else if (
    filterProducts.search &&
    filterProducts.brand.length === 0 &&
    filterProducts.color == ''
  ) {
    const data = products.filter((currentElement) => {
      return currentElement.productName.includes(filterProducts.search)
    })
    console.log(data)
    setFilterProductsData(data.flat())
  }
  // condition for filterProducts.search && filterProducts.brand.length === 0 && filterProducts.color
  else if (
    filterProducts.search &&
    filterProducts.brand.length === 0 &&
    filterProducts.color
  ) {
    const data = filterProducts.brand.map((brand) => {
      return products.filter((currentElement) => {
        if (currentElement.carColor == filterProducts.color) {
          return currentElement.productName.includes(filterProducts.search)
        }
      })
    })

    setFilterProductsData(data.flat())
  }
}
