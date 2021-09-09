import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import { 
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search on Twitter" />
          <SearchIcon />
      </SearchWrapper>

    <StickyBox>
      <Body>
          <List 
            title="Maybe you like"
            elements={[
              <FollowSuggestion name="Elon Musk" nickname="@elonmusk" />,

              <FollowSuggestion name="Bill Gates" nickname="@billgates" />,

              <FollowSuggestion name="Nikola Tesla" nickname="@nikolatestla" />
            ]}
          />

          <List 
            title="Maybe you like"
            elements={[
              <News />,
              <News />,
              <News />
            ]}
          />

          <List 
            title="Maybe you like"
            elements={[
              <News />,
              <News />,
              <News />
            ]}
          />

          <List 
            title="Maybe you like"
            elements={[
              <News />,
              <News />,
              <News />
            ]}
          />
      </Body>
    </StickyBox>
    </Container>
  );
}

export default SideBar;