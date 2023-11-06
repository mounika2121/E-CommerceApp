import {AiOutlineShoppingCart} from 'react-icons/ai'
import './index.css'

const Header = () => (
  <nav className="logo">
    <h1>E Commerce</h1>
    <button className="btn" type="button">
      <AiOutlineShoppingCart /> 0
    </button>
  </nav>
)

export default Header
