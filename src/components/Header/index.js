import { Box, useTheme } from "@mui/material";
import { Logos } from "../../styles/theme";
import Search from "../Search";

export default function Header() {
    const theme = useTheme();
    return(
        <>
        <Box sx={{ bgcolor: '#fff', pt: 2, pb: 2 }}>
            <img src={Logos.headerLogo} width={150}></img>
            <Search/>
        </Box>
        </>
    );
};