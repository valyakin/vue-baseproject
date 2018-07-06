import * as components from 'src/components'
import { BaseModal } from 'src/modals'
import { mapActions } from 'vuex'

export default {
  components: {
    ...components,
  },
  methods: {
    ...mapActions({
      openModal: 'modals/open',
    }),
    submit (data) {
      this.openModal({
        factory: () => BaseModal,
        data,
      })
    },
  },
}
