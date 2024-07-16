import React, { useState } from "react";
import {  Col, Row } from "antd";

const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.id);
      };
  return (
    <Row>
    <Col xs={24} sm={24} md={6} lg={8} xl={24}>
      <form className="todo-form"  onSubmit={handleSubmit}>
        <div className="todo-inner">
          <input
            placeholder='Update task' 
            className="todo-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="todo-btn " type="submit">
            Update
          </button>
        </div>
      </form>
    </Col>
  </Row>
  )
}

export default EditTodoForm