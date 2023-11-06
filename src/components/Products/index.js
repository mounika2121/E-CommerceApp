import {Component} from 'react'
import ProductList from './components/ProductList'
import './index.css'

class Products extends Component {
  state = {
    itemsDate: [],
  }

  productData = () => {
    const option = {
      method: get,
    }
    const url = 'https://run.mocky.io/v3/12531624-c691-4a5b-9625-4490a7cff00d'

    fetchedData = fetch(url, option)
    console.log(fetchedData)
    this.setState(itemsDate, fetchedData)
  }

  render() {
    const {itemsDate} = this.state
    return (
      <div>
        <div>
          {itemsDate.map(item => {
            <ProductList key=item.id, productItems = productItems />
          })}
        </div>
      </div>
    )
  }
}

export default Products
