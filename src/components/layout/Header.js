import React from 'react'

export default function Header() {
    return (
        <header style={ headerStyle }>
            <h1>ToDoList</h1>
        </header>
    )
}

const headerStyle = {
    background: '#000000',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}