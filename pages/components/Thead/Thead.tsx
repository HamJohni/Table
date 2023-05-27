import r from "@/pages/components/Right/Right.module.scss";

const Thead = () => {
    return (
        <thead className={r.table__thead}>
        <tr>
            <th className={r.table__thead_th}>Дата</th>
            <th className={r.table__thead_th}>Шифр<br/>задачи</th>
            <th className={r.table__thead_th}>Шифр <br/>проекта</th>
            <th className={r.table__thead_th}>Задача</th>
            <th className={r.table__thead_th}>Статус</th>
            <th className={r.table__thead_th}>Ответственный</th>
            <th className={r.table__thead_th}>Переназначить</th>
            <th className={r.table__thead_th}>Приоритет</th>
            <th className={r.table__thead_th}>Комментарий</th>
            <th className={r.table__thead_th}>План <br/>время</th>
            <th className={r.table__thead_th}>Факт <br/>время</th>
            <th className={r.table__thead_th}>Начал</th>
            <th className={r.table__thead_th}>Завершил</th>
        </tr>
        </thead>
    );
};

export default Thead;