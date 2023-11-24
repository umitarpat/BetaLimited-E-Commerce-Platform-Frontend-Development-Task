import { ShoppingCart } from "@mui/icons-material";
import { Colors } from "../../styles/theme"
import { useSelector } from "react-redux";
import { Badge } from '@mui/material';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cart);

    return(
        <>
        
        <Badge badgeContent={cartItems.length} color="secondary">
            <ShoppingCart sx={{
                fontSize: 32,
                color: Colors.primary
            }}></ShoppingCart>
        </Badge>
        </>
    )
}

export default Cart;