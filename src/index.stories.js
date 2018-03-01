import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import * as components from '../components';

storiesOf('components', module)
  .add('button', () => ({
    components,
    render(h) {
      return <button-component onClick={this.logEvent} label="Нажать на кнопку"></button-component>;
    },
    methods: { logEvent: action('clicked') },
  }))
  .add('input', () => ({
    components,
    render(h) {
      return <input-component onInput={this.logEvent} label="Поле"></input-component>;
    },
    methods: { logEvent: action('input') },    
  }))

