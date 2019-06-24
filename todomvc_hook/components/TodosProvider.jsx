import React, {useContext,useReducer} from 'react'


const todosReducer = (todos, action)=>{
    const {type, text, id, checked} = action

    switch (type){
        case 'add':
            return [
                ...todos,
                {
                    text:text,
                    completed:false,
                    id:+new Date()
                }
            ]
    }
}

export const TodosContext = React.createContext(null)

/**
 * use TodosContext
 */
export const useTodos = ()=>{
    const contextValue = useContext(TodosContext)
    return contextValue
}

export const  TodosProvider = (props)=>{
    const {children} = props
    const contextValue = useReducer(todosReducer)
    const [todos] = contextValue

    return (
        <TodosContext.Provider value={contextValue}>
            {children}
        </TodosContext.Provider>
    )
}