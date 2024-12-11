import { Link } from "react-router-dom";
import LogoIcon from "../../assets/logo.png";


function Logo({Ref="/",className}) {
    return (
        <Link to={Ref} className={`flex items-center justify-start gap-2 ${className}`}>
            <img src={LogoIcon} alt="Code Clip" className='size-10' />
            <h1 className='uppercase tracking-tight text-2xl font-bold text-violet-600'>Code <span className='text-gray-500/60'>Clip</span></h1>
        </Link>
    )
}

export default Logo