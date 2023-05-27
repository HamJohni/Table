import r from "@/pages/components/Right/Right.module.scss";
import {useEffect, useState} from "react";
import axios from "axios";

const Pending = ({toggle} : string) => {

    const [pending,setPending] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:4080/pending')
            .then(({data}) => {
                setPending(data)
            })
    },[])

    return(
        <>
            {
                pending.map(item => (
                    <tr key={item.id} style={{display: toggle === 'future' ? "table-row" : "none"}}>
                        <td className={r.table__td}>{item.date}</td>
                        <td className={r.table__td}>{item.cipherTask}</td>
                        <td className={r.table__td}>{item.cipherProject}</td>
                        <td className={r.table__td}>{item.task}</td>
                        <td className={r.table__td}>
                            <select value={item.status} className={r.table__select}>
                                <option value="done">Выполнено</option>
                                <option value="process">В процессе</option>
                                <option value="pending">Ожидание</option>
                            </select>
                        </td>
                        <td className={r.table__td}>{item.who}</td>
                        <td className={r.table__td}>{item.reassign}</td>
                        <td className={r.table__td}>{item.priority}</td>
                        <td className={r.table__td}>{item.comment}</td>
                        <td className={r.table__td}>{item.timePlan}</td>
                        <td className={r.table__td}>{item.timeFact}</td>
                        <td className={r.table__td}>{item.start}</td>
                        <td className={r.table__td}>{item.finish}</td>
                    </tr>
                ))
            }
        </>
    )
}

export default Pending