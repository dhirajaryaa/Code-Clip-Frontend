import LogoIcon from "../../assets/logo.png";


function Logo() {
    return (
        <div className='flex items-center justify-start gap-2'>
            <img src={LogoIcon} alt="Code Clip" className='size-10' />
            <h1 className='uppercase tracking-tight text-2xl font-bold text-violet-600'>Code <span className='text-gray-500/60'>Clip</span></h1>
        </div>
    )
}

export default Logo