import React, { useContext, useState } from 'react'
import { UserContext, } from '../context'
import { type } from '@testing-library/user-event/dist/type'


function Table({ users, name, age, gender, setName, setAge, setGender }) {

    const { state, dispatch } = useContext(UserContext)
    const [edit, setEdit] = useState(false)

    const style = {
        container: 'w-full flex justify-center mt-[20px]',
        table: 'border',
        td: 'border text-center p-[10px]',
        tr: 'border',
        th: 'border  w-[100px]',
        edit: 'border w-[200px] text-center',
        editBtn: 'px-[15px] py-[4px] bg-green-500 rounded-t-[7px] rounded-b-[7px] mx-[5px] text-white',
        deleteBtn: 'px-[15px] py-[4px] bg-red-800 rounded-t-[7px] rounded-b-[7px] mx-[5px] text-white'
    }

    const handleDelete = (id) => {
        dispatch({ type: 'REMOVE', payload: { id: id } })
    }
    const handleEdit = (id) => {
        setEdit(true)
        dispatch({ type: 'EDIT', payload: { name: name, age: age, gender: gender, id: id } })
    }

    return (
        <div className={style.container}>
            <table className={style.table}>
                <thead>
                    <tr className={style.tr}>
                        <th className={style.th}>Name</th>
                        <th className={style.th}>Gender</th>
                        <th className={style.th}>Age</th>
                        <th className={style.edit}>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((user) => {
                        if (edit) {
                            return <tr key={user.id} className={style.tr}>
                                <td className={style.td}>
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                                </td>
                                <td className={style.td}>
                                    <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
                                </td>
                                <td className={style.td}>
                                    <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                                </td>
                                <td className={style.edit}>
                                    <button className={style.editBtn} onClick={() => handleEdit(user)}>Edit</button>
                                    <button className={style.deleteBtn} onClick={() => handleDelete(user.id)}>Delete</button>
                                </td>
                            </tr>
                        } else {return <tr key={user.id} className={style.tr}>
                                <td className={style.td}>{user.name}</td>
                                <td className={style.td}>{user.gender}</td>
                                <td className={style.td}>{user.age}</td>
                                <td className={style.edit}>
                                    <button className={style.editBtn} onClick={() => handleEdit(user)}>Edit</button>
                                    <button className={style.deleteBtn} onClick={() => handleDelete(user.id)}>Delete</button>
                                </td>
                            </tr>
                        }
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table