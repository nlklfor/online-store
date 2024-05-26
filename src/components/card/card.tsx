import './card.scss'
// import {useEffect, useState} from "react";
// import axios from "axios";

type PropsType = {
    title: string;
    img: string[];
    currency: string;
    price: number;
    sex: string;
    index: number;
}

function Card(props: PropsType) {
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
            <div key={props.index} className='card'>
                <img src={props.img[0]} alt='shoe' width={133}/>
                <div className='card-bottom'>
                    <div className='card-info'>
                        <p className='card-desc'>
                            {props.title}
                        </p>
                        <span className={'card-sex'}>{props.sex}</span>
                        <span className='card-info-price'>
                                {props.price + ' ' + props.currency}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;