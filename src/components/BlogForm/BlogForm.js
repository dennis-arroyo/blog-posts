import React, { useState, useEffect } from "react";
import { Grid, Button } from '@mui/material'
import axios from "axios";

const userName = 'drivera'

const client = axios.create({
  baseURL: `https://us-central1-mbtcandidate.cloudfunctions.net/posts/${userName}` 
});


const BlogForm = props => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        props.onGetAllBlogs(blogs);
    }, [blogs]);

    const handleBlogSubmit = event => {
        event.preventDefault();

        const newBlog = {
            title: 'New Blog Post', // event.target.title.value
            text: 'This is the new blog post description' // event.target.text.value
        }

        client.post('', {
                title: newBlog.title,
                text: newBlog.text,
            })
            .then((response) => {
                setBlogs((blogs) => [response.data, ...blogs]);
            });

        props.onBlogAdded(newBlog);
    }

    const handleGetAllBlogs = () => {
        client.get().then((response) => {
            console.log(response.data.response);
            setBlogs(response.data.response);
        });
    }

    return (
        <form onSubmit={handleBlogSubmit}>
            <Grid 
                container 
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '10vh' }}
                spacing={2}>
                    <Grid item xs={1}>
                        <Button fullWidth={true} variant="contained" onClick={handleGetAllBlogs}>Get all</Button>
                    </Grid>
                    <Grid item xs={1}>
                        <Button fullWidth={true} variant="contained" type="submit">Add</Button>
                    </Grid>
            </Grid>
        </form>
    );
}

export default BlogForm;