import './gallery.scss'
function Gallery() {
    return (
        <>
            <section className={'section-gallery'}>
                <h3 className={'gallery-title'}>Our photos</h3>
                <ul className={'gallery-list'}>
                    <li className={'galley-item'}><img src="" alt="gallery-photo1"/></li>
                    <li className={'galley-item'}><img src="" alt="gallery-photo2"/></li>
                    <li className={'galley-item'}><img src="" alt="gallery-photo3"/></li>
                </ul>
            </section>
        </>
    )
}

export default Gallery;