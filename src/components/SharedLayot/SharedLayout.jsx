import { Container } from 'BaseStyled/Container.styled';
import { Suspense } from 'react';
import {  Outlet } from 'react-router-dom';
import { NavItem } from './SharedLayout.styled';

const NavItems = [
  {
    name: 'Home',
    path: '/',
  },
  { name: 'Events', path: '/events' },
  { name: 'Search', path: '/search' },
];

export const SharedLayout = () => {
  return (
    <>
      <header>
        <Container>
          <nav>
            {NavItems.map(({ name, path }) => {
              return (
                <NavItem key={name} to={path}>
                  {name}
                </NavItem>
              );
            })}
          </nav>
        </Container>
      </header>
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
