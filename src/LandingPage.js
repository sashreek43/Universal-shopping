import './Landing.css'
import lp_bg from './images/lp_bg.jpg'

export default function Landing() {
    return (

        <div className='overflow'>
            <img src={lp_bg} className="bg_img" alt="sorry" />
            <h1 className='main_text'>Welcome to <span className='projName'>Universal Shopping</span></h1>
        </div>

    )
}