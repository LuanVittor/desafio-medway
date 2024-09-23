"use client";

import { useRouter } from 'next/navigation';
import { NavContainer, Logo, NavItems, Nav, Letter, StyledLink } from './style';
import { signOut } from 'next-auth/react';

const Navbar: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    signOut({
      redirect: false,
    }).then(() => {
      router.push('/');
    });
  };
  
  return (
    <Nav>
      <NavContainer>
        <Logo>
          <Letter $delay="0s" secondaryColor="#001e56">m</Letter>
          <Letter $delay="0.3s" secondaryColor="#001e56">e</Letter>
          <Letter $delay="0.6s" secondaryColor="#001e56">d</Letter>
          <Letter $delay="0.9s" secondaryColor="#01cfb5">w</Letter>
          <Letter $delay="1.2s" secondaryColor="#01cfb5">a</Letter>
          <Letter $delay="1.5s" secondaryColor="#01cfb5">y</Letter>
        </Logo>
        <NavItems>
          <StyledLink href="/about">Sobre Mim</StyledLink>
          <StyledLink href="/hobbies">Hobbies</StyledLink>
          <StyledLink href="/projects">Projetos</StyledLink>
          <StyledLink href="/contact">Contato</StyledLink>
          <StyledLink href="/" onClick={handleLogout}>Logout</StyledLink>
        </NavItems>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
