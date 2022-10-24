import { ReactElement } from 'react';
import { Link, useMatch } from 'react-router-dom';

interface Props {
  children: ReactElement | string,
  to: string,
}

const CustomLink = ({ children, to, ...props }: Props): ReactElement => {
  const match: boolean = Boolean(useMatch({
    path: to,
    end: to.length === 1,
  }));

  const setActive = (match: boolean): string => match ? 'active-link' : '';

  return (
    <Link
      to={to}
      className={setActive(match)}
      {...props}
    >
      {children}
    </Link>
  )
}

export { CustomLink };