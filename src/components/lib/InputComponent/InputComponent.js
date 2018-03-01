export default {
  props: {
    label: String
  },
  data: () => ({
    input: ''
  }),
  methods: {
    onInput () {
      this.$emit('input', this.input)
    }
  }
}
