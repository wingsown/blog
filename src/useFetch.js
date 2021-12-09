import { useState, useEffect } from 'react';



const useFetch = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            if (!res.ok) {
                throw new Error('Could not fetch data');
            }

            return res.json();
        })
        .then(data => {
            setBlogs(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            setIsPending(false);
            setError(err.message);
        })
    }, []);
}

export default useFetch;