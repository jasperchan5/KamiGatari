import './Links.css';
export default () => {
    const content_text = [
        "https://youtube.com",
        "https://facebook.com"
    ]
    return(
        <>
            <div className="links_title">
                Links
            </div>
            <div className='links_content_frame'>
                {content_text.map((e) => {
                    return <p style={{textAlign: "center"}}>
                        <a href={e} className='links_content_text'>{e}</a>
                    </p>
                })}
            </div>
        </>
    )
}