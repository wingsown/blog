const Create = () => {
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
                <label>Blog Title:</label>
                <input type="text" required/>
                <label>Blog:</label>
                <textarea required></textarea>
                <label>Blog Author:</label>
                <select>
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