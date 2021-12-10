import { useEffect, useState} from 'react';
import { useHistory } from 'react-router';
import BlogList from './BlogList';
import useFetch from './useFetch';
import { db } from './firebase-config';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

  const [blogss, setBlogss] = useState([]);
  const blogsRef = collection(db, "blogs");
  const history = useHistory();

  useEffect(() => {
    
    const getBlogs = async () => {
      const data = await getDocs(blogsRef);
      setBlogss(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    }

    getBlogs();

  }, []);

//   const updateBlog = async (id, title, body, author) => {
//     const blogDoc = doc(db, "blogs", id);
//     const newFields = {
//         title: title,
//         body: body,
//         author: author
//     }

//     await updateDoc(blogDoc, newFields)
    
// }

    const deleteBlog = (id) => {
      const blogDoc = doc(db, "blogs", id);
       deleteDoc(blogDoc)
       .then(() => {
         history.push('/');
       })
    }

    return (
        <div className="home">

            {blogss.map((blog) => { return <div>
              <h1>{ blog.title }</h1>
              <h2>{ blog.body }</h2>
              <h3>{ blog.author }</h3>
              {/* <button onClick={() => {updateBlog(blog.id, blog.title, blog.body, blog.author)}}>Edit</button> */}
              <button onClick={() => deleteBlog(blog.id)}>Delete</button>
              </div>})}

            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
      );
}
 
export default Home;
