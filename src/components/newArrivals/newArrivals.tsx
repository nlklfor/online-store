import Card from "../card/card.tsx";
import './newArrivals.scss'
import banner from '../../assets/banner-new-arrival.jpeg'
import {Link} from "react-router-dom";
import {items} from "../../../public/db/items";
// import {useEffect, useState} from "react";
// import axios from "axios";

function NewArrivals() {
    return (
        <>
            <article className={'section-arrivals'}>
                <figure className={'arrival-image'}>
                    <img width={1200} height={700} src={banner} alt={'newArrivalBanner'}/>
                </figure>
                <div className={'arrivals-content'}>
                    <h3 className={'arrivals-title'}>New Arrivals</h3>
                    <div className={'arrivals-items'}>
                        {items.map((item, index) => (
                            <Link key={index} to={`/items/${item.id}`}><Card index={index} title={item.title}
                                                                             img={item.img_url}
                                                                             price={item.price} currency={item.currency}
                                                                             sex={item.sex}/></Link>
                        ))}
                    </div>
                    <button className={'show-more'}>Show more
                    </button>
                </div>
            </article>
        </>
    )
}

export default NewArrivals;