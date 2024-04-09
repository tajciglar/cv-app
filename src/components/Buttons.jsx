export default function Buttons ({handleSubmit, handleEdit}) {
    return (
        <div className="buttons">  
            <button type="submit" onClick={handleEdit}>Edit</button> 
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    );    
}