import React from "react"

function DataTable()
{
    return(
        <div className="container">
            <div className="add-container">
                <div className="info-conatiner">
                    <input type="text" value={} name="name" placeholder="Enter your Name" onChange={() => {}}/>
                    <input type="text" value={} name="age" placeholder="Enter your Age" onChange={() => {}}/>
                    <input type="text" value={} name="gender" placeholder="Enter your Gender" onChange={() => {}}/>
                </div>
                <button>add</button>
            </div>
            <div className="search-table-container">
                <input type="text" placeholder="Search by Name" value={""} onChange={() => {}} className="search-input"/>
            </div>
        </div>
    )
}

export default DataTable