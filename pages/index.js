import MainMenu from "@/components/header/mainMenu/MainMenu";
import ProductCard from "@/components/productCard/ProductCard";
import db from '../data/db.json'

export default function Home() {
  return (
    <div className="container">
      <div className="section">
        <h1> laptops </h1>
        <div className="row">
          {db.laptops.slice(0, 4).map((laptop) => (
            <div key={laptop.id} className="col">
              <ProductCard {...laptop} />
            </div>
          ))}
        </div>

        <h1> mobiles </h1>
        <div className="row">
          {db.mobiles.slice(0, 4).map((mobile) => (
            <div key={mobile.id} className="col">
              <ProductCard {...mobile} />
            </div>
          ))}
        </div>
        <h1> tablets </h1>
        <div className="row">
          {db.tablets.slice(0, 4).map((tablet) => (
            <div key={tablet.id} className="col">
              <ProductCard {...tablet} />
            </div>
          ))}
        </div>
        <h1> cameras </h1>
        <div className="row">
          {db.cameras.slice(0, 4).map((camera) => (
            <div key={camera.id} className="col">
              <ProductCard {...camera} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
