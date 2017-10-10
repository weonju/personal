import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';

import { Button, Welcome } from '@storybook/react/demo';
import Header from '../components/header';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Header', module)
  .add('standard header', withInfo()(()=> {
    const displayStyle = {
      padding: '20px 20px 0 20px',
      backgroundColor: '#e5e5e5',
    };

  return (
    <Header />
  )}
));
