export default function TextArea(props) {
    const {text, updateText} = props

    return (
        <>
            <div className="mx-3 col-10 ">
                <label htmlFor="textArea" className="form-label fs-2 fw-semibold">Enter Text to Analyze below</label>
                <textarea className="form-control" 
                    id="textArea" 
                    rows="6"
                    value={text}
                    onChange={(e)=>updateText(e.target.value)}
                    ></textarea>
            </div>
        </>
    )
}