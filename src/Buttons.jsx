export default function Buttons ({handleSubmit, handleEdit}) {
    return (
        <div>  
            <button type="submit" onClick={handleEdit}>Edit</button> 
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    );    
}