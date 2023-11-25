import { Button, ButtonBase, InputBase, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Colors } from "../../styles/theme";
import { useState} from "react";
import { useNavigate  } from "react-router-dom";

  const SearchContainer = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      top: '18px',
      left: 0,
      padding: '0 16px',
      width: 'calc(100% - 32px)',
      background: '#fff',
      zIndex: 9
    }
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
    [theme.breakpoints.down('sm')]: {
      borderRadius: 0,
      ':last-child': {
        borderRadius: '0px 20px 20px 0px',
        borderLeft: '1px solid'
      }
    }
  }));

export default function Search() {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  return(
    <>
    <Button
      variant="outlined" 
      sx={{ 
        display: { xs: 'block', sm: 'none' }, 
        padding: 0,
        width: 32,
        height: 32,
        minWidth: 'auto',
        marginRight: 0.5
      }} 
      onClick={() => setShow(prev => !prev)}
    >
      <SearchIcon 
        color="primary" 
        sx={{ fontSize: 32 }}
      >
      </SearchIcon>
    </Button>
    <SearchContainer style={{
      display: window.innerWidth < 568 && show === false ? 'none' : 'flex'
    }}>
        <SearchIconWrapper>
          <SearchIcon></SearchIcon>
        </SearchIconWrapper>
        <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
        />
        <StyledButton onClick={() => search.length > 0 ? navigate(`/search?query=${search}`) : alert('Please enter search word!')}>Search</StyledButton>
        <StyledButton
          sx={{ 
            display: { xs: 'block', sm: 'none' },
          }}
          onClick={() => setShow(prev => !prev)}>Close</StyledButton>
    </SearchContainer>
    </>
);
};

// TODO: eğer mobilse ve show false ise display none değilse display block