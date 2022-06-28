import { Input, Slide, Button, IconButton, InputAdornment, ClickAwayListener } from '@mui/material';
import { Search } from '@mui/icons-material';
import { SearchbarStyle } from 'components/styled';
import { toggleSearchBar } from 'store/slices/navbar';
import { useDispatch, useSelector } from 'react-redux';
import { StateGlobalProps } from 'interfaces/state';

export default function Searchbar() {
  const dispatch = useDispatch();
  const { search } = useSelector((state: StateGlobalProps) => state.navbar);

  const handleOpen = () => dispatch(toggleSearchBar());
  const handleClose = () => search.open && dispatch(toggleSearchBar());

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        {!search.open && (
          <IconButton onClick={handleOpen}>
            <Search />
          </IconButton>
        )}

        <Slide direction="down" in={search.open} mountOnEnter unmountOnExit>
          <SearchbarStyle>
            <Input
              autoFocus
              fullWidth
              disableUnderline
              placeholder="Search…"
              startAdornment={
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              }
              sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
            />
            <Button variant="contained" onClick={handleClose}>
              Search
            </Button>
          </SearchbarStyle>
        </Slide>
      </div>
    </ClickAwayListener>
  );
}
