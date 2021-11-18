import React, { useState, useContext } from 'react'
import { Form, Button, Modal } from "react-bootstrap"
import { WebContext } from './WebContext'

const EditForm = ({ handleClose, theTask }) => {
    const { updateTask, handleAlert, categories } = useContext(WebContext)
    const id = theTask.id

    const [title, setTitle] = useState(theTask.title)
    const [category, setCategory] = useState(theTask.category)
    const [content, setContent] = useState(theTask.content)

    const updatedTask = { id, title, category, content }

    const handleUpdate = (e) => {
        e.preventDefault()
        updateTask(id, updatedTask)
        handleAlert('Task Edited Sucessfully')
    }

    return (
        <Form onSubmit={handleUpdate}>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="task title"
                    required
                    name='title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Category</Form.Label>
                <Form.Select className="me-sm-2" name='category' onChange={(e) => setCategory(e.target.value)}>
                    <option value='Choose'>Choose...</option>
                    {categories.map((cat, index) => {
                        return (
                            <option key={index} value={cat}>{cat}</option>
                        )
                    })}
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control
                    as="textarea" rows={3}
                    placeholder="task description"
                    required
                    name='content'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </Form.Group>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" type='submit'>Edit Task</Button>
            </Modal.Footer>

        </Form>
    )
}

export default EditForm
