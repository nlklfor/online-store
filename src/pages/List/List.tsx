import {items} from "../../../public/db/items.ts";
import {Link} from "react-router-dom";
import Card from "../../components/card/card.tsx";
import Sidebar from "../../components/sidebar/sidebar.tsx";
import Root from "../../Routes/Root.tsx";
import './List.scss'

function List() {
    return (
        <Root>
            <div className={'list-items-wrapper'}>
                <Sidebar/>
                <section className={'list-items'}>
                    <h2 className={'list-items-title'}>Male</h2>
                    <div className={'items'}>
                        {items.map((item, index) => (
                            <Link key={index} to={`/items/${item.id}`}><Card index={index} title={item.title}
                                                                             img={item.img_url}
                                                                             price={item.price} currency={item.currency}
                                                                             sex={item.sex}/></Link>
                        ))}
                    </div>
                </section>
            </div>
        </Root>

    )
}

export default List;