import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { Modal, Card } from 'react-bootstrap';
import { WebContext } from './WebContext'
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import EditForm from './EditForm';


const Task = () => {
    const { tasks, deleteTask } = useContext(WebContext)
    const [show, setShow] = useState(false)
    const [editTask, setEditTask] = useState('')
    const handleClose = () => { setShow(false) }


    const handleShow = (task) => {
        setShow(true)
        setEditTask(task)
    }

    useEffect(() => {
        handleClose()
    }, [tasks])

    return (
        <div className='content-content d-flex h-100'>
            {tasks.map(task => {
                return (
                    // {`btn ${index === value && 'active-btn'}`}
                    <Card.Body key={task.id}
                        className={`task d-flex taskcard ${task.category === 'IT' ? 'it' : (task.category === 'Traveling' ? "traveling" : "business")}`}>
                        <Card.Title className='taskt-title'>{task.title}</Card.Title>
                        <Card.Subtitle className={`mb-2 task-subtitle ${task.category === 'IT' ? 'it-sub' : (task.category === 'Traveling' ? "traveling-sub" : "business-sub")}`}>{task.category}</Card.Subtitle>
                        <Card.Text className='task-text'>
                            {task.content}
                        </Card.Text>
                        <div className="task-btn-container">
                            <button onClick={() => handleShow(task)}><FaPencilAlt color='orange' /></button>
                            <button onClick={() => deleteTask(task.id, 'Task Deleted Sucessfully')}><FaTrashAlt color="red" /></button>
                        </div>
                    </Card.Body>
                )
            })}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditForm handleClose={handleClose} theTask={editTask} />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Task
