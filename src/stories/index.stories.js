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
      return <form-component onSubmit={this.logEvent}/>
    },
    methods: { logEvent: action('submited!') }
  }))

storiesOf('components/ButtonItem', module)
  .addDecorator(CenterDecorator)
  .add('normal', () => ({
    components,
    render (h) {
      return <button-item onClick={this.logEvent}>{text('label', 'SUBMIT')}</button-item>
    },
    methods: { logEvent: action('clicked!') }
  }))

storiesOf('components/InputItem', module)
  .addDecorator(CenterDecorator)
  .add('normal', () => ({
    components,
    render (h) {
      return <input-item onInput={this.logEvent} label={text('label', 'Field name')} />
    },
    methods: { logEvent: action('inputed!') }
  }))
