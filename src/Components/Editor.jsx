import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlleEditor } from "react-codemirror2";

const Editor = (props) => {
    const {
        language,
        displayName,
        value,
        onChange
    } = props

     const [open, setopen] = useState(true)

    function handleChange(editor, data, value) {
        onChange(value)
    }
  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
        <div className='editor-title'>
         {displayName}
         <button
         onChange={()=> setopen(prevopen => !prevopen)}
         >
        O/C
         </button>
        </div>   
        <ControlleEditor
        onBeforeChange={handleChange} 
        value={value}
        className='code-mirror-wrapper'
        options={{
            lineWrapping: true,
            lint: true,
            theme:'material',
            mode: language,
            lineNumbers: true
        }}
        />
    </div>
  )
}

export default Editor