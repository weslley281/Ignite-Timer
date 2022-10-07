import { HeaderContainer } from './styles';
import logoIgnite from '../../assets/logo-ignite.svg';
import { Timer, Scroll } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={logoIgnite}
        alt="Logo do Ignite com dois triangulo um dentro do outro apontando para a horizontal"
      />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
