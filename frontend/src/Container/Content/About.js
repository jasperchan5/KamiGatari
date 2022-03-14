import './About.css';
export default () => {
    const content_text = [
        "2002",
        "Taiwan / Taoyuan",
        "National Taiwan University / Department of Information Management"
    ]
    return(
        <>
            <div className='about_title'>
                About me
            </div>
            <div className='about_content_frame'>
                {content_text.map((e) => {
                    return <div className='about_content_text'>{e}</div>
                })}
            </div>
        </>
        
    )
}