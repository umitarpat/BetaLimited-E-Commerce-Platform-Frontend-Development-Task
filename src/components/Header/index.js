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
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                    <Link to="/">
                        <img src={Logos.headerLogo} width={150}></img>
                    </Link>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={'auto'} sx={{
                    lineHeight: 0,
                }}>
                    <Grid container spacing={0} sx={{ justifyContent: 'space-between' }}>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={'auto'}>
                            <Search></Search>
                        </Grid>
                        <Grid item xl={'auto'} lg={'auto'} md={'auto'} sm={'auto'} xs={'auto'}>
                            <Link to="cart">
                                <Cart></Cart>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
        </Box>
        </>
    );
};