<script>
import {mapGetters} from 'vuex'

export default {
  name: "TableProvider",
  provide: {
    fetch: () =>
      Promise.resolve([
        { id: 1, name: "Jane Doe" },
        { id: 2, name: "John Doe" }
      ])
  },
  render() {
    return this.$slots.default;
  },
  computed:{
    ...mapGetters([
      'getAllRegisters'
    ])  
  }
};
</script>