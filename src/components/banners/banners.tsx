import './banners.scss'
function Banners() {
    return (
        <>
            <section className={'section-banners'}>
                <figure className={'banner-figure a'}>
                    <img alt={'banner1'}/>
                </figure>
                <figure className={'banner-figure b'}>
                    <img alt={'banner2'}/>
                </figure>
                <figure className={'banner-figure c'}>
                    <img alt={'banner3'}/>
                </figure>
            </section>
        </>
    )
}

export default Banners;