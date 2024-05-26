import './sidebar.scss'
function Sidebar() {
    return(
        <>
            <aside className={'aside'}>
                <div className={'aside-option'}>
                    <p className={'aside-title'}>
                        Collection
                    </p>
                    <div className={'aside-option-type'}>
                        <input type={"checkbox"}/>
                        <label>Air Jordan</label>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Sidebar;