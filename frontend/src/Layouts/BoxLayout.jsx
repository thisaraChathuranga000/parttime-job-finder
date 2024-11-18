import * as React from "react";
import Box from "@mui/material/Box";

function BoxLayout({children}){
    return(
        <Box
            pt={2} pl={4} pb={2} pr={4}
            sx={{ backgroundColor: "#C5EDE7",fontSize: "14px",borderRadius: "6px",marginBottom:2}}
        >
            {children}
        </Box>
    )

}

export default BoxLayout;