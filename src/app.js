import { useState } from "react"
import TextArea from "./TextArea"
import Button from "./Buttons"

export default function App() {
    const [text, setText] = useState('')
    const [textCopy, setTextCopy] = useState('')

    const updateText = (value) => {
        setText(value)
        setTextCopy(value)
    }

    const handleUpdate = (value) => {
        setText(value)
    }

    return (
        <>
            <div className="m-4">
                <h1 className="my-4 text-decoration-underline">TextUtilis App</h1>
                <TextArea text={text} updateText={updateText} />
                <Button text={text} textCopy={textCopy} handleUpdate={handleUpdate} />
                <div className='m-3'>
                    <h3>Your Text Summary</h3>
                    <p>{text.trim().split(' ').length} words and {text.trim().length} characters</p>
                    <p>{((text.trim().split(' ').length) * 0.003).toFixed(2)} minutes read</p>
                    <h3>Text Preview</h3>
                    {text.trim() ? <p>{text}</p> : <p>Enter something in the textbox above to preview here.</p>}
                </div>
            </div>
        </>
    )
}