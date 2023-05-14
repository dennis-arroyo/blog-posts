import React from "react";
import { Box, Typography, Modal } from "@mui/material"


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


const BlogTextModal = props => {

    const handleClose = () => props.onModalViewHandler(!props.open);

    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(props.blogText, "text/html");
    const text = htmlDoc.body.textContent;

    return(
        <div>
            <Modal
                open={props.open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                {props.blogTitle}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {text}
            </Typography>
            </Box>
        </Modal>
        </div>
    );
}

export default BlogTextModal;