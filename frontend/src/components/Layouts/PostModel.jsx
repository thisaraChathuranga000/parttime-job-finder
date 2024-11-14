import React from "react";
import Card from "@mui/material/Card";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
};

function PostModel({children, open, onclose}){
    return(
        <Modal
          open={open}
          onClose={onclose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{backdrop:{timeout: 500}}}
          style={{overflow:"scroll"}}
        >
            <Fade in={open}>
                <Card sx={style}>
                    {children}
                </Card>
            </Fade>
        </Modal>
    );
}

export default PostModel;