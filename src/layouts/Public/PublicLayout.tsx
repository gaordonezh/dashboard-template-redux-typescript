import { Outlet } from 'react-router-dom';
import Logo from 'components/Logo';
import { HeaderStyle } from 'components/styled';

const PublicLayout = () => {

  return (
    <>
      <HeaderStyle>
        <Logo disabledLink />
      </HeaderStyle>
      <Outlet />
    </>
  )
}

export default PublicLayout