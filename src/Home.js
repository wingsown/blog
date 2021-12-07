import { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My New Website', body: 'This is my new website', author: 'Wilson', id: 1},
        { title: 'New Blog', body: 'This is a new blog', author: 'Jeffrey', id: 2},
        { title: 'New Blog 2', body: 'This is another blog', author: 'Buena', id: 3}
    ]);


    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by: { blog.author}</p>
                </div>
            ))}
        </div>
      );
}
 
export default Home;
