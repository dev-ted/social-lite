import React from 'react'
import '../css/InputOptions.css'

function InputOptions({Icon,title,color , onClick}) {
    return (
        <div onClick ={onClick} className ="input-options">
            <Icon style={{color: color} } />
            <h4>{title}</h4>
        </div>
    )
}

export default InputOptions
