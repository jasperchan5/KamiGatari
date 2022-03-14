import './Header.css';
export default () => {
    const navigations = [
        "Home", "About", "Links"
    ]
    return(
        <div className="header_frame" style={{display: "flex"}}>
            {navigations.map((e) => {
                return <>
                    <div style={{width: `${30/navigations.length}%`}}>
                        <div className='header_navigation'>{e}</div>
                    </div>
                </>
            })}
        </div>
    )
}