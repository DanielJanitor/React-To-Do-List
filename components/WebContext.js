import { useState, createContext, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const WebContext = createContext()
const WebContextProvider = (props) => {
    const [tasks, setTask] = useState([
        {
            id: '',
            title: '',
            category: '',
            content: ''
        }]
    )

    const categories = ['IT', 'Traveling', 'Business']
    const [alertShow, setAlertShow] = useState(false)
    const [alertmessage, setAlertmessage] = useState('')


    useEffect(() => {
        setTask(JSON.parse(localStorage.getItem('tasks')))
    }, [])

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    })

    const handleAlert = (message) => {
        setAlertShow(true)
        setAlertmessage(message)
        setTimeout(() => {
            setAlertShow(false)
        }, 1500);
    }

    const addTask = (title, category, content) => {
        setTask([...tasks, { id: uuidv4(), title, category, content }])
    }

    const updateTask = (id, updatedTask) => {
        setTask(tasks.map(task => task.id === id ? updatedTask : task))
    }

    const deleteTask = (id, message) => {
        setTask(tasks.filter(task => task.id !== id))
        handleAlert(message)
    }

    return (
        <WebContext.Provider value={{ tasks, categories, addTask, updateTask, deleteTask, alertShow, handleAlert, alertmessage }}>
            {props.children}
        </WebContext.Provider>
    )
}

export default WebContextProvider;
