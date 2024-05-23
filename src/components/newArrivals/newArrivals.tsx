import Card from "../card/card.tsx";
import './newArrivals.scss'

function NewArrivals() {
    return (
        <>
            <article className={'section-arrivals'}>
                <figure className={'arrival-image'}>
                    <img alt={'newArrivalBanner'}/>
                </figure>
                <div className={'arrivals-content'}>
                    <h3 className={'arrivals-title'}>New Arrivals</h3>
                    <Card/>
                    <button>Show more</button>
                </div>
            </article>
        </>
    )
}

export default NewArrivals;