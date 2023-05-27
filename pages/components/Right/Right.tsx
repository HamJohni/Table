import r from './Right.module.scss'


import { useState} from "react";

import Process from "@/pages/components/Process/Process";
import Done from "@/pages/components/Done/Done";
import Pending from "@/pages/components/Pending/Pending";
import Thead from "@/pages/components/Thead/Thead";


const Right = () => {

    const [toggle,setToggle] = useState('')

    return(
        <div className={r.right}>
            <p className={r.right__title}>
                Задачи
            </p>
                <table className={r.table}>
                    <Thead/>

                    <tbody>

                        <tr onClick={() => setToggle(() => toggle === 'done'? '': 'done' ) }>
                            <td colSpan={13} className={r.table__accordion}>
                                Выполненные задания
                            </td>
                        </tr>
                        <Done toggle={toggle}/>


                        <tr onClick={() => setToggle(() => toggle === 'today'? '': 'today' ) } >
                            <td colSpan={13} className={r.table__accordion}>
                                Задачи в процесса
                            </td>
                        </tr>
                        <Process toggle={toggle}/>


                        <tr onClick={() => setToggle(() => toggle === 'future'? '': 'future' ) }>
                            <td colSpan={13} className={r.table__accordion}>
                                Задачи в ожидании
                            </td>
                        </tr>
                        <Pending toggle={toggle}/>


                    </tbody>
                </table>
        </div>
    )
}

export default Right