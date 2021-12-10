import { useEffect, useState} from 'react';
import BlogList from './BlogList';
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';

const Home = () => {
  // const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

  const [blogs, setBlogs] = useState([]);
  const blogsRef = collection(db, "blogs");
  

  useEffect(() => {
    
    const getBlogs = async () => {
      const data = await getDocs(blogsRef);
      setBlogs(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
    }

    getBlogs();

  }, [blogsRef]);

//   const updateBlog = async (id, title, body, author) => {
//     const blogDoc = doc(db, "blogs", id);
//     const newFields = {
//         title: title,
//         body: body,
//         author: author
//     }

//     await updateDoc(blogDoc, newFields)
    
// }

    return (
        <div className="home">
            { blogs && <BlogList blogs={blogs} title="Blogs"/>}
        </div>
      );
}
 
export default Home;
