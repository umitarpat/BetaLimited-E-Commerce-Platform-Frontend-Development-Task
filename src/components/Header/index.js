import { Box, Container, Grid } from "@mui/material";
import { Logos } from "../../styles/theme";
import Search from "../Search";
export default function Header() {
    return(
        <>
        <Box sx={{ bgcolor: '#fff', pt: 2, pb: 2 }}>
        <Container maxWidth="xl">
            <Grid container spacing={0}>
                <Grid item xs={4}>
                    <img src={Logos.headerLogo} width={150}></img>
                </Grid>
                <Grid item xs={4}>
                    <Search></Search>
                </Grid>
            </Grid>
        </Container>
        </Box>
        </>
    );
};