import TableProvider from './Providers/TableProvider'

export default{
    makeTable(tableBuilder){
        
        return tableBuilder
            .withProvider(TableProvider)
            .showActions()
            .build()
    }
}