import React from 'react';

import {  Container, 
          Retweeted,
          RocketseatIcon, 
          Body, 
          Avatar, 
          Content, 
          Header,
          Dot,
          Description,
          ImageContent,
          Icons,
          Status,
          CommentIcon,
          RetweetIcon,
          LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        You retweeted
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Flávio Áquila</strong>
            <span>@icegreen</span>
              <Dot /> 
            <time>July 27th</time>
          </Header>

          <Description>Imitation is the sincerest form of praise.</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon /> 
                18
            </Status>

            <Status>
              <RetweetIcon />
                12
            </Status>

            <Status>
              <LikeIcon />
                954
            </Status>
          </Icons>
        
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;