import { Button, ButtonBase, InputBase, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Colors } from "../../styles/theme";

const SearchContainer = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      border: '1px solid',
      borderRadius: '20px 0px 0px 20px', 
      width: '100%',
      borderColor: Colors.borderColor,
    },
  }));

  const StyledButton = styled(ButtonBase)(({ theme }) => ({
    padding: '0px 30px',
    borderRadius: '0px 20px 20px 0px',
    background: Colors.primary,
    color: Colors.white,
    height: '41px',
    border: '1px solid #c24b5a',
  }));

export default function Search() {
  return(
    <SearchContainer>
        <SearchIconWrapper>
          <SearchIcon></SearchIcon>
        </SearchIconWrapper>
        <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            />
          <StyledButton>Search</StyledButton>
    </SearchContainer>
);
};