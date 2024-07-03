import {useContext} from "react";
import {ItemStoreContext} from "../src/stores/ItemStoreContext.tsx";


export const GetUniqueAttributes = () => {

    const itemStore = useContext(ItemStoreContext);

    const brands = Array.from(new Set(itemStore?.items.map(item => item.brand)));
    const colors = Array.from(new Set(itemStore?.items.map(item => item.color)));
    const types = Array.from(new Set(itemStore?.items.map(item => item.type)));

    // Define price ranges (example ranges, adjust as needed)
    const priceRanges = [
        {label: "Under 2000 UAH", range: [0, 2000]},
        {label: "2000 UAH - 4000 UAH", range: [2000, 4000]},
        {label: "4000 UAH - 6000 UAH", range: [4000, 6000]},
        {label: "Above 6000 UAH", range: [6000, Infinity]}
    ];

    return {brands, colors, types, priceRanges};
};
