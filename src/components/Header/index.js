import { Box, Container, Grid } from "@mui/material";
import { Logos } from "../../styles/theme";
import Cart from "../Cart";
import Search from "../Search";
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <>
        <Box sx={{ bgcolor: '#fff', pt: 2, pb: 2 }}>
        <Container maxWidth="xl">
            <Grid container spacing={0} sx={{
                alignItems: 'center'
            }}>
                <Grid item xs={4}>
                    <Link to="/">
                        <img src={Logos.headerLogo} width={150}></img>
                    </Link>
                </Grid>
                <Grid item xs={4}>
                    <Search></Search>
                </Grid>
                <Grid item xs={4} sx={{
                    lineHeight: 0,
                    textAlign: 'right'
                }}>
                   <Link to="cart">
                    <Cart></Cart>
                   </Link>
                </Grid>
            </Grid>
        </Container>
        </Box>
        </>
    );
};