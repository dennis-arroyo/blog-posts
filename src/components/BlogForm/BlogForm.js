import React, { useState, useEffect } from "react";
import { Grid, TextField, Button } from '@mui/material'
import axios from "axios";

const userName = 'drivera'

const client = axios.create({
  baseURL: `https://us-central1-mbtcandidate.cloudfunctions.net/posts/${userName}` 
});


const BlogForm = props => {

    const [blog, setBlog] = useState('');
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        props.onGetAllBlogs(blogs);
    }, [blogs]);

    const handleBlogSubmit = event => {
        event.preventDefault();

        const newBlog = {
            id: Math.round(Math.random() * 10),
            name: blog
        }

        setBlog('');
        props.onBlogAdded(newBlog);
    }

    const textChangeHandler = event => {
        setBlog(event.target.value);
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