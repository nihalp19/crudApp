import React, { useEffect } from 'react'
import { createContext } from 'react'
import { useReducer, useId } from 'react'
import { nanoid } from 'nanoid'


export const UserContext = createContext(null)
export const UsercontextProvider = ({ children }) => {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'ADD':
                const newState = [...state, {
                    id: nanoid(),
                    name: action.payload.name,
                    age: action.payload.age,
                    gender: action.payload.gender,
                }]
                sessionStorage.setItem('users', JSON.stringify(newState))
                return newState

            case 'REMOVE':
                const filteredState = state.filter((user) => user.id !== action.payload.id)
                sessionStorage.setItem('users', JSON.stringify(filteredState))
                return filteredState

            case 'EDIT' :
                const editedState = state.map((user) =>  user.id === action.payload.id ? {
                    ...user,
                    name: action.payload.name,
                    age: action.payload.age,
                    gender: action.payload.gender,
                } : user)
                sessionStorage.setItem('users', JSON.stringify(editedState))
                return editedState 

            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, [], () => {
        const sessionData = sessionStorage.getItem('users');
        return sessionData ? JSON.parse(sessionData) : []
    })


    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    )
}

// user.name: action.payload.name,
// user.age: action.payload.age,
// user.gender: action.payload.gender,