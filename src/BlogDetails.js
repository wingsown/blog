import { useHistory } from "react-router";
import { useState, useEffect } from 'react';
import { db } from './firebase-config';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';


const BlogDetails = () => {
    // const { id } = useParams();
    // const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    
    const [blogs, setBlogs] = useState([]);
    const blogsRef = collection(db, "blogs");
    const history = useHistory();

  useEffect(() => {
    
    const getBlogs = async () => {
      const data = await getDocs(blogsRef);
      setBlogs(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
    }

    getBlogs();

  }, [blogsRef]);

    // const handleClick = () => {
    //     fetch('http://localhost:8000/blogs/' + blog.id, {
    //         method: 'DELETE'
    //     }).then(() => {
    //         history.push('/');
    //     })
    // }

    const deleteBlog = (id) => {
        const blogDoc = doc(db, "blogs", id);
         deleteDoc(blogDoc)
         .then(() => {
           history.push('/');
         })
      }



    return (  
        <div className="blog-details">
            {blogs.map((blog) => (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={() => deleteBlog(blog.id)}>Delete</button>
                </article>
            ))}
        </div>
    );
}
 
export default BlogDetails;