import { useState } from 'react';
import Logo from '../../assets/Imagenes/logos/AutoRent.svg'
import avatar from '../../assets/Imagenes/logos/avatar.svg'
import IconCart from '../atoms/CartIcons';
import CloseIcon from '../atoms/CloseIcon';
import MenuIcons from '../atoms/MenuIcons';
import NavLink from '../atoms/NavLink';

const MainHeader = () => {

    const [navClass, setNavClass] = useState(
        'hidden gap-y-4 font-bold w-4/5 md:mr-auto md:flex md:flex-row gap-3 md:static md:p-0')   //estado inicial del estado

    const ButtonOPenMenu = () => {
        setNavClass('absolute top-0 left-0 flex flex-col h-full p-8 gap-y-4 font-bold w-4/5 md:mr-auto md:flex md:flex-row gap-3 md:static md:p-0 bg-white') //cuando apreto el boton hamburguesa baja el menu
    };

    const ButtonCloseMenu = () => {
        setNavClass('hidden gap-y-3 font-bold w-4/5 md:mr-auto md:flex md:flex-row gap-3 md:static md:p-0')  //cuando apreto la cruz para cerrar
    }

    return (
        //aca en header con el bg agregas color
        <>
            <header className='  mx-auto flex items-center gap-2 '>
                <button className='md:hidden' onClick={ButtonOPenMenu}>
                    <MenuIcons />
                </button>

                <img src={Logo} alt="" className='w-24 mr-auto md:mr-2 md:ml-1' />

                <nav className={navClass}>
                    <button className='mb-3 md:hidden' onClick={ButtonCloseMenu}>
                        <CloseIcon />
                    </button>
                    <NavLink text="Reserva"/>
                    <NavLink text="Oferta"/>
                    <NavLink text="Oficina"/>
                    {/* <NavLink text="Collecci5"/>
                    <NavLink text="Colleccion6"/> */}
                </nav>
                <div className='flex gap-1'>
                    <button >
                        <IconCart />
                    </button>
                    <img className='mr-12 md:' src={avatar} alt="" />
                </div>
            </header>
            <span className='md:block h-[1px] w-full bg-gray-700'></span>
        </>
    );
};

export default MainHeader

