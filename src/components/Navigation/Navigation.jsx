import { List, Item, Link, Icon, Text } from './Navigation.styled.js';
import Icons from 'images/icons.svg';

export const Navigation = () => {
  return (
    <List>
      <Item>
        <Link to="/">
          <Icon>
            <use href={`${Icons}#icon-home`}></use>
          </Icon>
          <Text>Home</Text>
        </Link>
      </Item>

      <Item>
        <Link to="diagram">
          <Icon>
            <use href={`${Icons}#icon-statistics`}></use>
          </Icon>
          <Text>Statistics</Text>
        </Link>
      </Item>
    </List>
  );
}