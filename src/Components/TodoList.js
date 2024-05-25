import React from 'react'

const TodoList = (props) => {
    return (
        <div className='fs-2'>
            <div>
                <li className='d-inline'>{props.index + 1} ) {props.item}</li>
                <span className='btn btn-danger  mx-1 float-end'>
                    <i class="bi bi-trash" onClick={(e) => {
                        props.deleteItem(props.index);
                    }}></i>
                </span>

            </div>
            <hr/>

        </div>

    )
}

export default TodoList