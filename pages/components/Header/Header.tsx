import h from './Header.module.scss'
import {IoIosNotificationsOutline} from "react-icons/io";
import {Avatar} from "@chakra-ui/react";

const Header = () => {
    return(
        <header className={h.header}>
            <div className="container">
                <nav className={h.header__nav}>
                    <div className={h.header__left}>
                        <span className={h.header__left_block}></span>

                        <p className={h.header__left_text}>Проект</p>
                    </div>

                    <div className={h.header__right}>
                        <IoIosNotificationsOutline size={30} fill='#9A9AB0'/>

                        <div className={h.header__right_info}>
                            <Avatar size='lg' name='Christian Nwamba' src='https://bit.ly/code-beast' />
                            <div>
                                <p className={h.header__right_info_name}>Иванов В. А.</p>
                                <p className={h.header__right_info_category}>Должность</p>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header