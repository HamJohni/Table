import r from "@/pages/components/Right/Right.module.scss";
import {useEffect, useState} from "react";
import axios from "axios";


const Done = ({toggle} : string) => {

    const [done,setDone] = useState([])

    const [select,setSelect] = useState('')

    useEffect(() =>{
        axios.get('http://localhost:4080/done')
            .then(({data}) => {
                setDone(data)
            })
    },[])


    return(
        <>
            {
                done.map(item => (
                    <tr key={item.id} style={{display: toggle === 'done' ? "table-row" : "none"}}>
                        <td className={r.table__td}>{item.date}</td>
                        <td className={r.table__td}>{item.cipherTask}</td>
                        <td className={r.table__td}>{item.cipherProject}</td>
                        <td className={r.table__td}>{item.task}</td>
                        <td className={r.table__td}>
                            <select onChange={(e) => setSelect(e.target.value)} value={item.status} className={r.table__select}>
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

export default Done