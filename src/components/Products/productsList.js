import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Box, Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import ProductBox from './productBox'

const ProductList = () => {    

    const [products, setProducts] = useState([]);

    const getData = async () => {
        const { data } = await axios.get(`https://linkedin-cv-crawler.beta-limited.workers.dev/interview/products`);
        setProducts(data);
      };

    useEffect(() => {
        getData();        
    },[]);
      
    return(
        <>
        <Box sx={{ bgcolor: 'transparent', pt: 4, pb: 4 }}>
        <Container maxWidth="lg">
            <Grid container spacing={4}>
            {products.sort((a,b) => a.name > b.name).map((item) => (
              <ProductBox key={item.id} product={item} />
            ))}
            </Grid>
        </Container>
        </Box>
        </>
    );
};

export default ProductList;