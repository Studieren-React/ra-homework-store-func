import './App.css'
import { ShopItem } from './components/ShopItem'
import { items } from './data/data';

export default function App() {
  return (
    <>
      <div className="container">
        <div className="background-element">
        </div>
        <div className="highlight-window">
          <div className='highlight-overlay'></div>
        </div>
        <div className="window">
          <ShopItem item={items[0]} />
        </div>
      </div>
    </>
  )
}
