import React, { useState, useContext } from 'react'
import { Form, Button, Modal } from "react-bootstrap"
import { WebContext } from './WebContext'

const AddForm = ({ handleClose }) => {
    const { addTask, handleAlert, categories } = useContext(WebContext)
    const [newTask, setNewTask] = useState(
        {
            title: '',
            category: '',
            content: ''
        }
    )

    const InputNew = (e) => {
        e.preventDefault()
        let value = e.target.value;
        let name = e.target.name;
        setNewTask({ ...newTask, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(newTask.title, newTask.category, newTask.content)
        handleAlert('Task Added to List')
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Task title"
                    required
                    name='title'
                    value={newTask.title}
                    onChange={(e) => InputNew(e)}
                />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Category</Form.Label>
                <Form.Select className="me-sm-2" name='category' onChange={(e) => InputNew(e)}>
                    <option value='Choose'>Choose...</option>
                    {categories.map((cat, index) => {
                        return (
                            <option key={index} value={cat}>{cat}</option>
                        )
                    })}
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea" rows={3}
                    placeholder="Task description"
                    required
                    name='content'
                    value={newTask.content}
                    onChange={(e) => InputNew(e)}
                />
            </Form.Group>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" type='submit'>Save Task</Button>
            </Modal.Footer>

        </Form >
    )
}

export default AddForm
