import authors from '../../../modules/Authors/authors.director'

export default class TableDirector {
    constructor(builder) {
      this.builder = builder;
    }
  
    authors(){
        authors.makeTable(this.builder)
    }

  }
