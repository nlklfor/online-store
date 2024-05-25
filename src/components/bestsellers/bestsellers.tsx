import './bestsellers.scss'
import bestSeller1 from '../../assets/bestSeller1.png'
import bestSeller2 from '../../assets/bestSeller2.png'
import bestSeller3 from '../../assets/bestSeller3.png'
import bestSeller4 from '../../assets/bestSeller4.png'
function BestSellers() {
    return (
        <>
            <section className={'section-bestsellers'}>
                <h3 className={'bestsellers-title'}>Best sellers</h3>
                <ul className={'bestsellers-list'}>
                    <li className={'bestsellers-item'}><img src={bestSeller1} alt={'bestseller1'}/></li>
                    <li className={'bestsellers-item'}><img src={bestSeller2} alt={'bestseller2'}/></li>
                    <li className={'bestsellers-item'}><img src={bestSeller3} alt={'bestseller3'}/></li>
                    <li className={'bestsellers-item'}><img src={bestSeller4} alt={'bestseller3'}/></li>
                </ul>
            </section>
        </>
    )
}

export default BestSellers;