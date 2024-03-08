import React, { useState, useEffect } from 'react'
import Editor from './Components/Editor';

const App = () => {
  const [html, sethtml] = useState('')
  const [css, setcss] = useState('')
  const [javascript, setjavascript] = useState('')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
   const timeout = setTimeout(()=> {
    setSrcDoc(`
  <html>
  <body>${html}</body>
  <style>${css}</style>
  <sript>${javascript}</script>
  </html>
  `)
   },250)
   return () => clearTimeout(timeout)
  },[html,css,javascript])

  return (
    <>
    <div className='pane top-pane'>
      <Editor language="xml"
       displayName="HTML" 
       value={html}
       onChange={sethtml} 
       />
      <Editor 
      language="CSS"
      displayName="CSS" 
      value={css}
      onChange={setcss} 
      />
      <Editor
      language="javascript"
      displayName="javascript" 
      value={javascript}
      onChange={setjavascript}  
      />
    </div>
    <div className='pane'>
      <iframe 
      srcDoc={srcDoc}
      title='output'
      sandbox='allow-scripts'
      frameBorder="0"
      width="100%"
      height="100%"
      />
    </div>
    </>
  )
}

export default App