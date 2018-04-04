import { ButtonItem, InputItem } from 'src/components'

export default {
  data () {
    return {
      firstname: '',
      surname: '',
      location: ''
    }
  },
  components: {
    ButtonItem,
    InputItem
  },
  methods: {
    submit () {
      this.$emit('submit', {
        firstname: this.firstname,
        surname: this.surname,
        location: this.location
      })
    }
  }
}
