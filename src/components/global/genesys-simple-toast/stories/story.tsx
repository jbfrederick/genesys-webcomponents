import { checkA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { select, text, withKnobs } from '@storybook/addon-knobs/polymer';
import { storiesOf } from '@storybook/polymer';
import { html, render } from 'lit-html';
import { withReadme } from 'storybook-readme';

import README from '../readme.md';

storiesOf('Genesys Components', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .add(
    'Genesys Simple Toast',
    withReadme(README, () => {
      const el = document.createElement('div');
      render(
        html`
        <h2>Basic samples</h2>
        <br/><i>For Light Theme</i><br/><br/>
        <genesys-simple-toast
          toast-title='Holiday approved'
          icon='genesys-icon-calendar-generic'
          accent='neutral'
          message='Family vacation on 06/24/16 approved'
        >
        </genesys-simple-toast>
        <br/><i>For Dark Theme</i><br/><br/>
        <genesys-simple-toast
          class='genesys-dark-theme'
          toast-title='Holiday approved'
          icon='genesys-icon-calendar-generic'
          accent='neutral'
          message='Family vacation on 06/24/16 approved'
        >
        </genesys-simple-toast>
        <h2>Interactive sample</h2>
        <genesys-simple-toast
          id='interactive'
          toast-title=${text('toastTitle', 'title')}
          icon=${text('icon', 'genesys-icon-alert-octo')}
          accent=${select(
            'accent',
            ['neutral', 'positive', 'alert', 'warning'],
            'neutral'
          )}
          message=${text('message', 'message')}
          close-label=${text('closeLabel', 'close')}
        >
        </genesys-simple-toast>
      `,
        el
      );
      setTimeout(() => {
        const it = document.getElementById('interactive');
        it.addEventListener('custom', e => action('custom')(e.detail));
      }, 100);
      document.getElementsByTagName('html')[0].className =
        'genesys-' + select('theme', ['dark', 'default'], 'default') + '-theme';
      return el;
    })
  );
