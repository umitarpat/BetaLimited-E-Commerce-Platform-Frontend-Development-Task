import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Box, Container, Grid } from "@mui/material";
import CartItem from "./cartItem";
import '../../styles/cartItem.css';


const ViewCart = () => {

    const [cartItems, setCartItems] = useState([]);
    const sessionID = useSelector(state => state.auth.sessionID);

    const getData = async () => {
        const { data } = await axios.get(`https://linkedin-cv-crawler.beta-limited.workers.dev/interview/view-cart`,{
            headers: {
                'Session-ID': sessionID,
            }
        });
        if(Array.isArray(data)) setCartItems(data);
    };

    useEffect(() => {
        getData();        
    },[]);

    return(
        <>
        <Box sx={{ bgcolor: 'transparent', pt: 4, pb: 4 }}>
        <Container maxWidth="lg">
            <Grid container spacing={0}>
            {
            cartItems && cartItems.length > 0 ?
            cartItems.map((item) => (
                <Grid item xs={12} sm={12} md={12}>
                    <CartItem item={item}></CartItem>
                </Grid>
            ))
            : 
            (
                <Grid item xs={12} sm={12} md={12}>
                    <div className="cart-item" style={{ textAlign: 'center', marginTop: 30 }}>
                        Cart is empty!
                    </div>
                </Grid>
            )
            }
            </Grid>
        </Container>
        </Box>
        </>
    )

};

export default ViewCart;