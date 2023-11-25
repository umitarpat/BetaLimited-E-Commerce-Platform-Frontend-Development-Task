import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Box, Container, Grid } from "@mui/material";
import ProductBox from '../Products/productBox';



export const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  const getData = async () => {
    const { data } = await axios.get(`https://linkedin-cv-crawler.beta-limited.workers.dev/interview/search?name=${query}`);
        setSearchResults(data);
    };

    useEffect(() => {
        getData();        
    },[query]);

  return (
    <>
    <Box sx={{ bgcolor: 'transparent', pt: 4, pb: 4 }}>
    <Container maxWidth="lg">
        <Grid container spacing={4}>
        <Grid item xs={12}>
          <h3 style={{ 
            margin: 0,
            fontWeight: 'normal' 
          }}>Results for search <b>{query}</b></h3>
        </Grid>     
        {searchResults.map((item) => (
          <ProductBox key={item.id} product={item} />
        ))}
        </Grid>
    </Container>
    </Box>
    </>
  )
}

export default SearchResults;