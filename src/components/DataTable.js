import React, { useContext, useEffect, useState } from "react"
import Table from "./Table"
import { UserContext } from "../context"



function DataTable() {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [searchByName, setSearchByName] = useState('')
    const [users, setUsers] = useState([])

    const { state, dispatch } = useContext(UserContext)

    const style = {
        container: "w-full h-screen bg-red-400",
        add_container: "w-full text-center",
        info_container: "w-full text-center pt-[20px]",
        addBtn: 'mt-[20px] bg-blue-400 px-[15px] py-[6px] text-white border rounded-t-[7px] rounded-b-[7px]',
        input: 'mx-[10px] p-[5px]',
        search_table_container: 'text-center mt-[10px]'
    }

    const handleDispatch = (e) => {
        console.log("dispatch function");
        dispatch({ type: 'ADD', payload: { name: name, age: age, gender: gender } })
        setName('')
        setAge('')
        setGender('')
    }
    

    useEffect(() => {
        setUsers(state)

    }, [state])


    return (
        <div className={style.container}>
            <div className={style.add_container}>
                <div className={style.info_container}>
                    <input className={style.input} type="text" value={name} name="name" placeholder="Enter your Name" onChange={(e) => setName(e.target.value)} />
                    <input type="text" className={style.input} value={age} placeholder="Enter your Age" onChange={(e) => setAge(e.target.value)} />
                    <input type="text" className={style.input} value={gender} placeholder="Enter your Gender" onChange={(e) => setGender(e.target.value)} />
                </div>
                <button className={style.addBtn} onClick={handleDispatch}>add</button>
            </div>
            <div className={style.search_table_container}>
                <input type="text" placeholder="Search by Name" value={searchByName} onChange={(e) => setSearchByName(e.target.value)} className="search-input" />
            </div>
            <Table users={users} name={name} age={age} gender={gender} setName={setName} setAge={setAge} setGender={setGender} />
        </div>
    )
}

export default DataTable