import Card from "../card/card.tsx";
import './newArrivals.scss'
import banner from '../../assets/banner-new-arrival.jpeg'
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
                    <Card/>
                    <button>Show more</button>
                </div>
            </article>
        </>
    )
}

export default NewArrivals;