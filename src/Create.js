import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('wilson');
    

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
                <label>Blog Title:</label>
                <input 
                type="text" 
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog:</label>
                <textarea 
                required
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author:</label>
                <select
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="wilson">Wilson</option>
                    <option value="pogi">Pogi</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
      );
}
 
export default Create
;