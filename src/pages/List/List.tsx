import {items} from "../../../public/db/items.ts";
import {Link, useLocation} from "react-router-dom";
import Card from "../../components/card/card.tsx";
import Sidebar from "../../components/sidebar/sidebar.tsx";
import Root from "../../Routes/Root.tsx";
import './List.scss';
import {useState} from "react";

function List() {
    const location = useLocation();
    const gender = new URLSearchParams(location.search).get('gender');

    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState<number[]>([0, Infinity]);

    const handleBrandChange = (brand: string) => {
        setSelectedBrands(prev =>
            prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
        );
    };

    const handleColorChange = (color: string) => {
        setSelectedColors(prev =>
            prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
        );
    };

    const handleTypeChange = (type: string) => {
        setSelectedTypes(prev =>
            prev.includes(type) ? prev.filter(d => d !== type) : [...prev, type]
        );
    };

    const handlePriceChange = (min: number, max: number) => {
        setPriceRange([min, max]);
    };

    const filteredItems = items.filter(item => {

        const genderMatch = (gender === "Male" || gender === "Female")
            ? (item.gender === gender || item.gender === "Unisex")
            : (gender === "Kids" ? item.gender === "Kids" : true);
        const brandMatch = selectedBrands.length ? selectedBrands.includes(item.brand) : true;
        const colorMatch = selectedColors.length ? selectedColors.includes(item.color) : true;
        const typeMatch = selectedTypes.length ? selectedTypes.includes(item.type) : true;
        const priceMatch = item.price >= priceRange[0] && item.price <= priceRange[1];
        return genderMatch && brandMatch && colorMatch && priceMatch && typeMatch;
    });

    return (
        <>
            {filteredItems ? <Root>
                <div className={'list-items-wrapper'}>
                    <Sidebar selectedBrands={selectedBrands}
                             onChangeBrand={handleBrandChange}
                             selectedColors={selectedColors}
                             onChangeType={handleTypeChange}
                             onChangeColor={handleColorChange}
                             selectedTypes={selectedTypes}
                             onChangePrice={handlePriceChange}/>
                    <section className={'list-items'}>
                        <h2 className={'list-items-title'}>{gender && `${gender}`}</h2>
                        <div className={'items'}>
                            {filteredItems.map((item, index) => (
                                <Link key={index} to={`/items/${item.id}`}>
                                    <Card
                                        index={index}
                                        title={item.title}
                                        img={item.img_url}
                                        price={item.price}
                                        currency={item.currency}
                                        gender={item.gender}
                                    />
                                </Link>
                            ))}
                        </div>
                    </section>
                </div>
            </Root> : <div>There are no items</div>}
        </>


    );
}

export default List;
