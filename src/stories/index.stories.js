import { storiesOf, addDecorator } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import * as components from 'src/components'
import * as modals from 'src/modals'
import * as decorators from './decorators'
import 'src/styles/_global.scss'

function storyFrom (render) {
  return () => ({
    components: {
      ...components,
      ...modals,
    },
    render,
    methods: {
      logEvent (actionName) {
        return action(actionName)
      },
    },
  })
}

addDecorator(withKnobs)

storiesOf('widgets/FormComponent', module)
  .addDecorator(decorators.minWidth(400))
  .addDecorator(decorators.center)
  .add('normal', storyFrom(function (h) { return <form-component onSubmit={this.logEvent('submit')}/> }))

storiesOf('components/ButtonItem', module)
  .addDecorator(decorators.center)
  .add('normal', storyFrom(function (h) { return <button-item onClick={this.logEvent('click')}>{text('label', 'SUBMIT')}</button-item> }))

storiesOf('components/InputItem', module)
  .addDecorator(decorators.center)
  .add('normal', storyFrom(function (h) { return <input-item onInput={this.logEvent('input')} label={text('label', 'Field name')} /> }))
