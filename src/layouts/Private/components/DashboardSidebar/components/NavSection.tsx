import { useState } from 'react';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';
import { alpha, useTheme } from '@mui/material/styles';
import { Box, List, Collapse, ListItemText } from '@mui/material';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import Scrollbar from 'components/Scrollbar';
import { NavItemProps, NavSectionProps } from 'interfaces/global';
import { ListItemIconStyle, ListItemStyle } from 'components/styled';

function NavItem({ item, active }: NavItemProps) {
  const isActiveRoot = active(item.path);
  const [open, setOpen] = useState(isActiveRoot);
  const navigate = useNavigate();
  const theme = useTheme();
  const { title, path, icon, info, children } = item;
  const handleOpen = () => setOpen((prev: boolean) => !prev);

  const activeRootStyle = {
    color: 'primary.main',
    fontWeight: 'fontWeightMedium',
    bgcolor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
  };

  const activeSubStyle = {
    color: 'text.primary',
    fontWeight: 'fontWeightMedium',
  };

  const handleRedirect = (href: string) => () => navigate(href);

  if (children) {
    return (
      <>
        <ListItemStyle onClick={handleOpen} sx={{ ...(isActiveRoot && activeRootStyle) }}>
          <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
          <ListItemText disableTypography primary={title} />
          {info && info}
          {open ? <ArrowDropUp /> : <ArrowDropDown />}
        </ListItemStyle>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children.map((item) => {
              const { title, path } = item;
              const isActiveSub = active(path);

              return (
                <ListItemStyle key={title} onClick={handleRedirect(path)} sx={{ ...(isActiveSub && activeSubStyle) }}>
                  <ListItemIconStyle>
                    <Box
                      component="span"
                      sx={{
                        width: 4,
                        height: 4,
                        display: 'flex',
                        borderRadius: '50%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'text.disabled',
                        transition: (theme) => theme.transitions.create('transform'),
                        ...(isActiveSub && {
                          transform: 'scale(2)',
                          bgcolor: 'primary.main',
                        }),
                      }}
                    />
                  </ListItemIconStyle>
                  <ListItemText disableTypography primary={title} />
                </ListItemStyle>
              );
            })}
          </List>
        </Collapse>
      </>
    );
  }

  return (
    <ListItemStyle onClick={handleRedirect(path)} sx={{ ...(isActiveRoot && activeRootStyle) }}>
      <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
      <ListItemText disableTypography primary={title} />
      {info && info}
    </ListItemStyle>
  );
}

export default function NavSection({ navConfig }: NavSectionProps) {
  const { pathname } = useLocation();

  const match = (path: string) => (path ? !!matchPath({ path, end: false }, pathname) : false);

  return (
    <Scrollbar sx={{ height: 'calc((100vh) - 95px)' }}>
      <List disablePadding sx={{ p: 1 }}>
        {navConfig.map((item) => (
          <NavItem key={item.title} item={item} active={match} />
        ))}
      </List>
    </Scrollbar>
  );
}
