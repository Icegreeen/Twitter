import React from 'react';

import { Container, Header, BackIcon, ProfileInfo, BottomMenu, HomeIcon, SearchIcon, EmailIcon, BellIcon } from './styles';

import ProfilePage from '../ProfilePage'

const Main: React.FC = () => {
  return (
    <Container>
        <Header>
          <button>
            <BackIcon />
          </button>

          <ProfileInfo>
            <strong>Flávio Áquila</strong>
            <span>34 Tweets</span>
          </ProfileInfo>
        </Header>

        <ProfilePage />

        <BottomMenu>
            <HomeIcon className="active" /> 
            <SearchIcon />
            <BellIcon />
            <EmailIcon />
        </BottomMenu>
    </Container>
  )
}

export default Main;