import { storiesOf, addDecorator } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import * as components from 'src/components'
import { CenterDecorator, MinWidth } from './decorators'
import 'src/styles/_global.scss'

addDecorator(withKnobs)

storiesOf('widgets/FormComponent', module)
  .addDecorator(MinWidth(400))
  .addDecorator(CenterDecorator)
  .add('normal', () => ({
    components,
    render (h) {
      return <form-component />
    }
  }))

storiesOf('components/ButtonComponent', module)
  .addDecorator(CenterDecorator)
  .add('normal', () => ({
    components,
    render (h) {
      return <button-component onClick={this.logEvent} label={text('label', 'Нажать на кнопку')} />
    },
    methods: { logEvent: action('clicked') }
  }))

storiesOf('components/InputComponent', module)
  .addDecorator(CenterDecorator)
  .add('normal', () => ({
    components,
    render (h) {
      return <input-component onInput={this.logEvent} label={text('label', 'Поле')} />
    },
    methods: { logEvent: action('input') }
  }))
