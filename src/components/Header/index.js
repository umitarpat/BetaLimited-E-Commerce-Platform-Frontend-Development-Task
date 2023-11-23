import { Box, Grid, useTheme } from "@mui/material";
import { Logos } from "../../styles/theme";
import Search from "../Search";

export default function Header() {
    const theme = useTheme();
    return(
        <>
        <Box sx={{ bgcolor: '#fff', pt: 2, pb: 2 }}>
        <Grid container spacing={0}>
            <Grid item xs={4}>
                <img src={Logos.headerLogo} width={150}></img>
            </Grid>
            <Grid item xs={4}>
                <Search></Search>
            </Grid>
        </Grid>
        </Box>
        </>
    );
};