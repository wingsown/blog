import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My New Website', body: 'This is my new website', author: 'Wilson', id: 1},
        { title: 'New Blog', body: 'This is a new blog', author: 'Jeffrey', id: 2},
        { title: 'New Blog 2', body: 'This is another blog', author: 'Buena', id: 3}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }


    return (
        <div className="home">
           <BlogList
            blogs={blogs}
            title="All Blogs"
            handleDelete={handleDelete}
           />
        </div>
      );
}
 
export default Home;
