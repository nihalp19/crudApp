import React, { useContext, useState } from 'react'
import { UserContext, } from '../context'
import { type } from '@testing-library/user-event/dist/type'


function Table({ users, }) {

    const { state, dispatch } = useContext(UserContext)
    const [editId, setEditId] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')

    const style = {
        container: 'w-full flex justify-center mt-[20px]',
        table: 'border',
        td: 'border text-center p-[10px]',
        tr: 'border',
        th: 'border  w-[100px]',
        edit: 'border w-[200px] text-center',
        editBtn: 'px-[15px] py-[4px] bg-green-500 rounded-t-[7px] rounded-b-[7px] mx-[5px] text-white',
        editSaveBtn: 'px-[15px] py-[4px] bg-green-500 rounded-t-[7px] rounded-b-[7px] mx-[5px] text-white',
        deleteBtn: 'px-[15px] py-[4px] bg-red-800 rounded-t-[7px] rounded-b-[7px] mx-[5px] text-white',
        input: 'bg-red-400  w-[100px] p-[5px] outline-none'
    }

    const handleDelete = (id) => {
        dispatch({ type: 'REMOVE', payload: { id: id } })
    }
    const handleSaveEdit = (id) => {
        dispatch({ type: 'EDIT', payload: { name: name, age: age, gender: gender, id: id } })
        setEditId('')
    }

    const handleEdit = (user) => {
        setEditId(user.id)
        setName(user.name)
        setAge(user.age)
        setGender(user.gender)
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
                        if (editId === user.id) {
                            return <tr key={user.id} className={style.tr}>
                                <td className={style.td}>
                                    <input type="text" className={style.input} value={name} onChange={(e) => setName(e.target.value)} />
                                </td>
                                <td className={style.td}>
                                    <input type="text" className={style.input} value={gender} onChange={(e) => setGender(e.target.value)} />
                                </td>
                                <td className={style.td}>
                                    <input type="text" className={style.input} value={age} onChange={(e) => setAge(e.target.value)} />
                                </td>
                                <td className={style.edit}>
                                    <button className={style.editSaveBtn} onClick={() => handleSaveEdit(user.id)}>Save</button>
                                    <button className={style.deleteBtn} onClick={() => handleDelete(user.id)}>Delete</button>
                                </td>
                            </tr>

                        } else {
                            return <tr key={user.id} className={style.tr}>
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