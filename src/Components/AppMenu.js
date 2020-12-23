import React from 'react';
import {
    Container,
    Button,
    Icon,
    Menu,
    Label,
  } from 'semantic-ui-react'

const AppMenu = () => (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          SOAINT
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
          <Button as='div' labelPosition='right'>
            <Button icon>
              <Icon name='shopping cart' />
            </Button>
            <Label as='a' basic pointing='left'>
              2,048
            </Label>
          </Button>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
);

export default AppMenu;