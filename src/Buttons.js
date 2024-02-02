export default function Button(props){
    const {text, textCopy, handleUpdate } = props

    const handleUpperCase = () =>{
        handleUpdate(text.toUpperCase())
    }

    const handleLowerCase =()=>{
        handleUpdate(text.toLowerCase())
    }

    const handleCapitalize = ()=>{
        const textValue = text.split(' ').map((ele)=>{
            return ele[0].toUpperCase()+ele.slice(1,).toLowerCase()
        })
        handleUpdate(textValue.join(' '))
    }
    
    const handleReset = ()=>{
        handleUpdate(textCopy)
    }

    const handleExtraSpaces = ()=>{
        const textValue = []
        text.trim().split(' ').forEach((ele)=>{
            if(ele !== ''){
                textValue.push(ele)
            }
        })
        handleUpdate(textValue.join(' '))
    }

    const handleClear = ()=>{
        handleUpdate('')
    }

    const handleCopy = ()=>{
        navigator.clipboard.writeText(text)
        alert('Copied to clipboard')
    }

    const arr = [
                    {function:handleUpperCase,name:'UpperCase'}, 
                    {function:handleLowerCase,name:'LowerCase'},
                    {function:handleCapitalize,name:'Capitalize'},
                    {function:handleExtraSpaces,name:'Remove Extra Space'},
                    {function:handleCopy,name:'Copy to Clipboard'},
                    {function:handleReset,name:'Reset'},
                    {function:handleClear,name:'Clear'}, 
                ]     
    return(
        <>
        <div className="m-3">
            {arr.map((ele,i)=>{
                    return (
                        <button key={i} type="button" className="btn btn-primary m-2" onClick={ele.function} disabled={!text}>{ele.name}</button>
                    )
            })}
        </div>
        </>
    )
}