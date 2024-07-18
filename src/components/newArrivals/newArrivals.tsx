import Card from "../card/card.tsx";
import './newArrivals.scss'
import {Link} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {useContext, useEffect} from "react";
import {ItemStoreContext} from "../../stores/ItemStoreContext.tsx";

const NewArrivals = observer(() => {

    const itemStore = useContext(ItemStoreContext);

    useEffect(() => {
        itemStore?.getItems();
    }, [itemStore])


    return (
        <>
            {itemStore?.isLoading ? <h1>LOADING...</h1> : <article className={'section-arrivals'}>
                <div className={'arrivals-content'}>
                    <h3 className={'arrivals-title'}>Our items</h3>
                    <div className={'arrivals-items'}>
                        {itemStore?.items.map((item, index) => (
                            <Link key={index} to={`/items/${item._id}`}><Card index={index} title={item.title}
                                                                              img={item.img_url}
                                                                              price={item.price}
                                                                              currency={item.currency}
                                                                              gender={item.gender}/></Link>
                        ))}
                    </div>
                    <button className={'show-more'}>Show more
                    </button>
                </div>
            </article>}
        </>
    )
})

export default NewArrivals;