import React from 'react';

import { Container, Header, BackIcon, ProfileInfo } from './styles';

const Main: React.FC = () => {
  return (
    <Cantainer>
        <Header>
          <button>
            <BackIcon />
          </button>

          <ProfileInfo>
            <strong>Flávio Áquila</strong>
            <span>34 Tweets</span>
          </ProfileInfo>
        </Header>

        {/* <Profile></Profile> */}

        {/* <BottomMenu>
            <HomeIcon /> 
            <SearchIcon />
            <BellIcon />
            <EmailIcon />
        </BottomMenu> */}
    </Cantainer>
  )
}

export default Main;