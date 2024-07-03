import './sidebar.scss';
import {GetUniqueAttributes} from "../../../utils/uniqueAttributes.ts";

type SidebarProps = {
    selectedBrands: string[];
    onChangeBrand: (brand: string) => void;
    selectedColors: string[];
    selectedTypes: string[];
    onChangeColor: (color: string) => void;
    onChangeType: (type: string) => void;
    onChangePrice: (min: number, max: number) => void;
};

function Sidebar({
                     selectedBrands,
                     onChangeBrand,
                     onChangeType,
                     selectedTypes,
                     selectedColors,
                     onChangeColor,
                     onChangePrice
                 }: SidebarProps) {
    // const uniqueBrands = Array.from(new Set(items.map(item => item.brand)));
    // const uniqueColors = Array.from(new Set(items.map(item => item.color)));
    const {brands, colors, types} = GetUniqueAttributes();

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (value === "low") onChangePrice(0, 500);
        else if (value === "medium") onChangePrice(500, 2000);
        else if (value === "high") onChangePrice(2000, Infinity);
    };

    return (
        <>
            <aside className={'aside'}>
                <div className={'aside-option'}>
                    <p className={'aside-title'}>Brand</p>
                    {brands.map(brand => (
                        <div key={brand} className={'aside-option-type'}>
                            <input
                                type="checkbox"
                                checked={selectedBrands.includes(brand)}
                                onChange={() => onChangeBrand(brand)}
                            />
                            <label>{brand}</label>
                        </div>
                    ))}
                </div>
                <div className={'aside-option'}>
                    <p className={'aside-title'}>Type</p>
                    {types.map(type => (
                        <div key={type} className={'aside-option-type'}>
                            <input
                                type="checkbox"
                                checked={selectedTypes.includes(type)}
                                onChange={() => onChangeType(type)}
                            />
                            <label>{type}</label>
                        </div>
                    ))}
                </div>
                <div className={'aside-option'}>
                    <p className={'aside-title'}>Color</p>
                    {colors.map(color => (
                        <div key={color} className={'aside-option-type'}>
                            <input
                                type="checkbox"
                                checked={selectedColors.includes(color)}
                                onChange={() => onChangeColor(color)}
                            />
                            <div className={'color'} id={`color-${color}`} style={{
                                width: "50px",
                                height: "20px",
                                backgroundColor: `${color}`,
                                border: '1px solid grey'
                            }}></div>
                        </div>
                    ))}
                </div>
                <div className={'aside-option'}>
                    <p className={'aside-title'}>Price</p>
                    <div className={'aside-option-type'}>
                        <input
                            type="radio"
                            name="price"
                            value="low"
                            onChange={handlePriceChange}
                        />
                        <label>0 - 500</label>
                    </div>
                    <div className={'aside-option-type'}>
                        <input
                            type="radio"
                            name="price"
                            value="medium"
                            onChange={handlePriceChange}
                        />
                        <label>500 - 2000</label>
                    </div>
                    <div className={'aside-option-type'}>
                        <input
                            type="radio"
                            name="price"
                            value="high"
                            onChange={handlePriceChange}
                        />
                        <label>2000+</label>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;





