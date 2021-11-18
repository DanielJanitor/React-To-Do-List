import React, { useState, useEffect, useContext } from 'react'

/* Compoments */
import { WebContext } from './WebContext.js';
import Task from './Task.js'
import AddForm from './AddForm'

/* Bootstrap */
import { FaPlus, FaAudible } from "react-icons/fa";
import { Modal, Alert } from 'react-bootstrap';

const Content = () => {
    const { tasks, alertShow, alertmessage } = useContext(WebContext)
    const [show, setShow] = useState(false)
    const handleClose = () => { setShow(false) }
    const handleShow = () => { setShow(true) }

    useEffect(() => {
        handleClose();
    }, [tasks])


    return (
        <>
            <div className="row header-container">
                <div className='header d-flex align-items-center'>
                    <h2><FaAudible /> Task List </h2>
                    <button className='btn btn-secondary btn-sm' onClick={handleShow}><FaPlus className='plus' /> Add Task</button>
                </div>
            </div>
            <div className="row alert-wrapper">
                <div className="alert-container mt-2">
                    <Alert
                        show={alertShow}
                        variant={`${alertmessage === 'Task Added to List' ? 'info' : (alertmessage === 'Task Edited Sucessfully' ? "warning" : "danger")}`}
                        className='text-center '
                    ><p>{alertmessage}</p></Alert>
                </div>
            </div>
            <div className="row">
                <div className='content d-flex justify-content-center align-items-start'>
                    <Task />
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm handleClose={handleClose} />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Content
