import React, { useState } from 'react'

const TodoInput = (props) => {
    const [inputText, setInputText] = useState("");
    const handleEnterPress = (e) => {
        if (e.keyCode === 13) {
            props.addList(inputText);
            setInputText("")
        }
    }
    return (
        <div className='container fixed-top text-center p-3 bg-info'>
            <h1>To Do App</h1>
            <input type='text' className='px-3 fs-2' placeholder='Enter your todo' value={inputText} onChange={(e) => { setInputText(e.target.value) }}
                onKeyDown={handleEnterPress} />

            <button className='btn btn-danger m-1 ' onClick={() => {
                props.addList(inputText)
                setInputText("")
            }}>Add Todo</button>
        </div>
    )
}

export default TodoInput