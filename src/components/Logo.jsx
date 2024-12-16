import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { logoLight, logoDark } from '../assets/assets';

const Logo = ({ className = '' }) => {
  return (
    <Link
      to='/'
      className={`mix-w-max max-w-max h-[24px] ${className}`}
    >
      <img
        src={logoLight}
        width={133}
        height={24}
        alt='phoenix logo'
        className='dark:hidden'
      />
      <img
        src={logoDark}
        width={133}
        height={24}
        alt='phoenix logo'
        className='hidden dark:block'
      />
    </Link>
  );
};

Logo.propTypes = {
  classes: PropTypes.string,
};

export default Logo;