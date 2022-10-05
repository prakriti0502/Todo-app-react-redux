import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeAllTodo, deleteTodo } from '../actions/index';
import './todo.css';

const Todo = () => {

    const [inputData, setInputData] = useState('');
    const list = useSelector((state)=>state.todoReducers.list);
    const dispatch = useDispatch();

    console.log(list);
  return (
    <>
    <div className='main-div'>
      <div className='child-div'>
        <figure>
          <figcaption>Add your List Here ✌️</figcaption>
        </figure>
        <div className='addItems'>
            <input value={inputData} 
                type='text'
                placeholder='✍️ Add Item'
                onChange={(event)=>setInputData(event.target.value)}
            />
          <i className='fa fa-plus add-btn' 
            onClick={()=>dispatch(addTodo(inputData), setInputData(''))}
          ></i>
        </div>
        <div className='showItems'>
            {
                list.map((elem)=>{
                    return (
                        <div className='eachItem' key={elem.id}>
                        <h3>{elem.data}</h3>
                        <i className='far fa-trash-alt add-btn' title='Delete Item'
                                    onClick={()=>dispatch(deleteTodo(elem.id))}
                        ></i>
                    </div>
                    )
           
                })
            }
        </div>
        <div className='showItems'>
            <button className='btn effect04' 
            data-sm-link-text="remove all"
            onClick={()=>dispatch(removeAllTodo())}
            >
                <span>Check List</span>
            </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Todo