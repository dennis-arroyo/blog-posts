import { React, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material'
import BlogTextModal from "../BlogTextModal/BlogTextModal";

const BlogList = props => {

    const [open, setOpen] = useState(false);
    const [blogText, setBlogText] = useState('');
    const [blogTitle, setBlogTitle] = useState('');

    const modalViewHandler = (title, text) => {
        setBlogTitle(title);
        setBlogText(text);
        setOpen(!open);
      }

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow key="id">
                            <TableCell>ID:</TableCell>
                            <TableCell align="left">Title:</TableCell>
                            <TableCell align="left">Text:</TableCell>
                            <TableCell align="left">Timestamp:</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                        props.blogs.map(blog => {
                            return (
                                <TableRow key={blog.id}>
                                    <TableCell component="th" scope="row">{blog.id}</TableCell>
                                    <TableCell align="left">{blog.title}</TableCell>
                                    <TableCell align="left">
                                        <Button variant="text" onClick={() => modalViewHandler(blog.title, blog.text)}>view</Button>
                                    </TableCell>
                                    <TableCell align="left">{blog.timestamp}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
             </TableContainer>
             <BlogTextModal open={open} blogTitle={blogTitle} blogText={blogText} onModalViewHandler={modalViewHandler} />
        </div>
    );
}

export default BlogList;