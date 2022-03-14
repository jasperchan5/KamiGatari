import { NavLink } from 'react-router-dom';
import './Home.css';
export default () => {
    const content_text = [
        "I am Jasper Chan, a sophomore in NTU",
        "See more in my website!"
    ]
    return(
        <>
            <div className="home_title">
                Welcome to Jasper's personal website!
            </div>
            <div className='home_content_frame'>
                {content_text.map((e) => {
                    return <div className='home_content_text'>{e}</div>
                })}
            </div>
        </>
    )
}