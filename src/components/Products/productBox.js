import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Rating, Typography } from "@mui/material";
import { Star, Remove, Add, Visibility, ShoppingCart, Favorite } from "@mui/icons-material";
import { Colors, Utils } from "../../styles/theme";
import { useState } from "react";
import styled from "@emotion/styled";

const AcitonButtonsArea = styled('div')(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '-100%',
    left: 0,
    width: '100%',
    transition: "ease-in-out 200ms all",
    ' > button': {
        background: Colors.white,
        color: Colors.oldPriceColor,
        margin: 1,
        borderRadius: 0,
        minWidth: 'auto',
        padding: theme.spacing(0.5,1.5),
    },
    ' > button:first-child,': {
        borderRadius: theme.spacing(1, 0, 0, 1),
    },
    ' > button:last-child,': {
        borderRadius: theme.spacing(0, 1, 1, 0),
    },
    ' > button:hover': {
        background: Colors.primary,
        color: Colors.white
    }
}));

const ProductBox = ({product}) => {
    const [qty, setQty] = useState(0);

    const inCreaseHandler = () => {
        setQty(qty+1);
    }

    const deCreaseHandler = () => {
        setQty(qty-1);
    }
    
    return(
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 3, boxShadow: '0px 1px 0px 1px rgba(0, 0, 0, 0.02)' }}
          >
            <CardMedia
              component="div"
              sx={{
                position: 'relative',
                height: '300px',
                overflow: 'hidden'
              }}
              image={product.image}
            >
                <span style={{
                    padding: '0px 10px',
                    background: Colors.primary,
                    color: Colors.white,
                    left: 20,
                    top: 20,
                    borderRadius: 20,
                    position: 'absolute',
                    lineHeight: '32px',
                    height: '30px',
                }}>{product.discount}</span>
                <AcitonButtonsArea>
                    <Button size="small">
                        <Visibility></Visibility>
                    </Button>
                    <Button size="small">
                        <Favorite></Favorite>
                    </Button>
                    <Button size="small">
                        <ShoppingCart></ShoppingCart>
                    </Button>
                </AcitonButtonsArea>
            </CardMedia>
            <CardContent sx={{ flexGrow: 1, padding: 2 }}>
            <Grid container spacing={0} sx={{ alignItems: 'end' }}>
                <Grid item xs={10} sm={10} md={10}>
                    <Typography sx={{ mb: 1 }}>
                        {product.name}
                    </Typography>
                    <Box
                    sx={{
                        width: 200,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                    >
                        <Rating
                            name="hover-feedback"
                            value={product.rating}
                            precision={0.5}
                            readOnly
                            emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        <Box sx={{ ml: 1 }}>({product.rating})</Box>
                    </Box>
                    <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: 1,
                    }}>
                        <span style={{ color: Colors.primary }}>{Utils.currencySymbol}{product.price}</span>
                        <span style={{ marginLeft: 5, color: Colors.oldPriceColor, textDecoration: 'line-through' }}>{Utils.currencySymbol}{product.originalPrice}</span>
                    </Box>
                </Grid>
                <Grid item xs={2} sm={2} md={2} sx={{ textAlign: 'center' }}>
                    { qty > 0 && (
                        <>
                        <Button variant="outlined" sx={{ minWidth: 'auto', padding: 0.2 }} onClick={deCreaseHandler}>
                            <Remove></Remove>
                        </Button>
                        <span style={{ padding: 1, marginTop: 2, marginBottom: 2, display: 'block', fontWeight: 'bold' }}>{qty}</span>
                        </>
                    )} 
                    <Button variant="outlined" sx={{ minWidth: 'auto', padding: 0.2 }} onClick={inCreaseHandler}>
                        <Add></Add>
                    </Button>
                </Grid>
            </Grid>
            
            </CardContent>
          </Card>
        </Grid>
    )
}

export default ProductBox;