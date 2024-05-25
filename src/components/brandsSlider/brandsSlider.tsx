import './brandsSlider.scss'
import adidas from '../../assets/adidas.png'
import adidas_origin from '../../assets/adidas-originals.png'
import nike_sb from '../../assets/nike-sb.png'
import nike from '../../assets/nike.png'
import puma from '../../assets/puma.png'
import jordan from '../../assets/air-jordan.png'
import vans from '../../assets/vans.png'
import dickies from '../../assets/dickies.png'
import newBalance from '../../assets/new-balance.png'
import converse from '../../assets/converse.png'

function BrandsSlider() {
    return (
        <>
            <section className="brands-slider">
                <div className="brands-track">
                    <img src={adidas} alt="adidas"/>
                    <img src={nike_sb} alt="nike_sb"/>
                    <img src={puma} alt="puma"/>
                    <img src={jordan} alt="jordan"/>
                    <img src={newBalance} alt="vans"/>
                    <img src={vans} alt="vans"/>
                    <img src={nike} alt="nike"/>
                    <img src={converse} alt="nike"/>
                    <img src={dickies} alt="adidas"/>
                    <img src={adidas_origin} alt="adidas_originals"/>
                </div>
            </section>
        </>
    )
}

export default BrandsSlider;