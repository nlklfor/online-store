import './card.scss'
// import {useEffect, useState} from "react";
// import axios from "axios";
import {items} from "../../../public/db/items";

function Card() {
    // const [items, setItems] = useState([]);
    //
    // useEffect(() => {
    //     axios
    //         .get('/db/items.json')
    //         .then((res) => setItems(res.data))
    //         .catch((err) => console.log(err));
    // }, []);
    return (
        <>
            {items.map((item, index) => {
                return (
                    <div key={index} className='card'>
                        <img src={item.img_url} alt='shoe' width={133}/>
                        <div className='card-bottom'>
                            <div className='card-info'>
                                <p className='card-desc'>
                                    {item.title}
                                </p>
                                <span className={'card-sex'}>{item.sex}</span>
                                <span className='card-info-price'>
                                {item.price + ' ' + item.currency}
                        </span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Card;