import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage } from './styles'

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
       {/* <EditButton outline>Edit profile</EditButton>  */}

        <h1>Flávio Áquila</h1>
        <h2>@Icegreen</h2>

        <p>
          Developer at <a href="https://pt.wikipedia.org/wiki/USS_Callister">USS Callister</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Bahia, Brasil
          </li>
          <li>
            <CakeIcon />
            Born May 31, 2000
          </li>
        </ul>

        <Followage>
          <span>
            Following <strong>143</strong>
          </span>
          <span>
            <strong>61 </strong> Followers
          </span>
        </Followage>

      </ProfileData>
    </Container>
  );
}

export default ProfilePage;