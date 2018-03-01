export default {
  props: {
    label: String
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
