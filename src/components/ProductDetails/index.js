import {PiCarrotLight, PiCakeBold} from 'react-icons/pi'
import {LuCandy} from 'react-icons/lu'
import {GiCannedFish} from 'react-icons/gi'
import {TbEggs} from 'react-icons/tb'
import {FaBowlRice} from 'react-icons/fa'
import './index.css'

const ProductDetails = () => (
  <>
    <div className="products">
      <div className="btn-container">
        <button type="button" className="items-btn">
          Produce
        </button>
      </div>
      <div className="btn-container">
        <button type="button" className="items-btn">
          Prepared foods
        </button>
      </div>
      <div className="btn-container">
        <button type="button" className="items-btn">
          Canned foods & Soups
        </button>
      </div>
      <div className="btn-container">
        <button type="button" className="items-btn">
          Bakery
        </button>
      </div>
      <div className="btn-container">
        <button type="button" className="items-btn">
          Dairy & Eggs
        </button>
      </div>
      <div className="btn-container">
        <button type="button" className="items-btn">
          Frozen
        </button>
      </div>
      <div className="btn-container">
        <button type="button" className="items-btn">
          Meat & Seafood
        </button>
      </div>
      <div className="btn-container">
        <button type="button" className="items-btn">
          Bakery
        </button>
      </div>
      <div className="btn-container">
        <button type="button" className="items-btn">
          Canned foods & Soups
        </button>
      </div>
    </div>
    <div className="small-device">
      <div className="icon-container">
        <button className="small-image" type="button">
          <PiCarrotLight />
        </button>
      </div>
      <div className="icon-container">
        <button className="small-image" type="button">
          <LuCandy />
        </button>
      </div>
      <div className="icon-container">
        <button className="small-image" type="button">
          <GiCannedFish />
        </button>
      </div>
      <div className="icon-container">
        <button className="small-image" type="button">
          <TbEggs />
        </button>
      </div>
      <div className="icon-container">
        <button className="small-image" type="button">
          <FaBowlRice />
        </button>
      </div>
    </div>
  </>
)

export default ProductDetails
