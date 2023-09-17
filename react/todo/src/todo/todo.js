import React, { useState, useEffect } from 'react';
import { 
  Container, Form, TextInput, 
  SubmitInput, UnorderdList, ListItem,
  TodoText, TodoDelete ,BorderedBox,To,Bigbox} from './styledComponents'
import './todo.css'
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';

export default function TodoApp() {
  const [todo, setTodo] = useState([]);
  const [todoId, setTodoId] = useState(0);
  const [todoCount, setTodoCount] = useState(0);

  const handleSubmit = (todoText) => {
    if(todo.length < 3)
    { 
    setTodo([
      ...todo,
      {
        todoId: todoId,
        todoText: todoText,
        todoDone: false
      }
    ])
    setTodoId(todoId + 1)
}
  }

  const plus = () => {
    if(todoCount < 3)
        setTodoCount(todoCount + 1);
  }

  const minus = () => {
    if(todoCount >= 0)
        setTodoCount(todoCount - 1);
  }

  const handleDelete = (todoId) => {
    setTodo(todo.filter(item => item.todoId !== todoId))
  }

  const handleToggle = (todoId) => {
    setTodo(todo.map(item => item.todoId === todoId ? { ...item, todoDone: !item.todoDone } : item))
  }

  useEffect(() => {
    const defaultTodo = window.localStorage.getItem("todo");
    setTodo(JSON.parse(defaultTodo));
  },[])

  useEffect(() => {
    const strTodo = JSON.stringify(todo);
    window.localStorage.setItem("todo",strTodo);
  }, [todo]);

  return (
    <Container>
        <Bigbox>
      <Form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e.target.todo.value);
        plus();
        e.target.todo.value = '';
      }}>
        <TextInput type='text' placeholder='할일 쓰기' name='todo' />
        <SubmitInput type='submit' value='추가' />
      </Form>
      <To>🐘오늘의 할 일 남은 갯수: {todo.length}</To>
      <BorderedBox/>
      <UnorderdList>
        {todo.map((item, index) => 
        <ListItem key={index}>
          <TodoText onClick={() => handleToggle(item.todoId)} style={item.todoDone ? { textDecoration: 'line-through'} : {} }>
            {item.todoText}
          </TodoText>
          <TodoDelete onClick={() => {handleDelete(item.todoId); minus()}}>X</TodoDelete>
        </ListItem>)} 
      </UnorderdList>
      </Bigbox>
    </Container>
  );
}