import { useEffect, useState } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

  const [blogss, setBlogss] = useState([]);
  const blogsRef = collection(db, "blogs");

  useEffect(() => {
    
    const getBlogs = async () => {
      const data = await getDocs(blogsRef);
      setBlogss(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    }

    getBlogs();

  }, []);

    return (
        <div className="home">

            {blogss.map((blog) => { return <div>
              <h1>{ blog.title }</h1>
              <h2>{ blog.body }</h2>
              <h3>{ blog.author }</h3>
              
              </div>})}

            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
      );
}
 
export default Home;
