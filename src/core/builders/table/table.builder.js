import EntityTable from "../../components/entities/EntityTable";

export default class TableBuilder {
  constructor() {
    this.props = {};
  }

  withProvider(provider) {
    this.provider = provider;
    return this;
  }

  withListingItem(item) {
    this.item = item;
    return this;
  }

  showActions() {
    this.props.showActions = true;
    return this;
  }

  build() {
    const provider = this.provider
    const props = this.props
    const Item = this.item

    return {
      render(h) {
        return h(provider,[
          h(
            EntityTable,
            {
              props,
              scopedSlots: { default: props => h(Item, { props }) }
            },
          )
        ]);
      }
    };
  }
}
