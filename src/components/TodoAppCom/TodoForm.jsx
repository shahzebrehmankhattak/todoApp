import React, { useState } from "react";
import { Col, Row } from "antd";

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
          e.preventDefault();
          if (value) {
            addTodo(value);
            setValue('');
          }
        };
  return (
    <>
      <Row>
        <Col xs={18} sm={24} md={6} lg={8} xl={24}>
          <form className="todo-form" onSubmit={handleSubmit}>
            <div className="todo-inner">
              <input
                placeholder="Enter Your Today Task"
                className="todo-input"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button className="todo-btn " type="submit">
                Add Task
              </button>
            </div>
          </form>
        </Col>
      </Row>
    </>
  );
};

export default TodoForm;
