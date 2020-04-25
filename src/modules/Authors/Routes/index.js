import Authors from '../Authors.vue'
//import TableDirector from '../../../core/builders/table/table.director'
//import TableBuilder from '../../../core/builders/table/table.builder'

//const AuthorsComponents = {
//  AuthorTable: new TableDirector(
//      new TableBuilder
//  ).authors()
//}

const AuthorRoute =
{
  path: '/authors',
  meta: {
    name: {
      en: 'Authors',
      es: 'Autores',
    }
  },
  component: Authors,
  children: [
    {
      path: '/',
      component: Authors,
      meta: {
        name: {en: 'Table', es: 'Tabla'},
        type: 'table',
        breadcrumb: [
          {
            text: 'Inicio',
            href: '/',
            disabled: false
          },
          {
            text: 'Autores',
            disabled: true
          },
        ]
      }   
    },
    {
      path: 'detail/:id',
      component: Authors,
      meta: { 
        name: {en: 'Detail', es: 'Detalle'},
        type: 'detail',
        breadcrumb: [
          {
            text: 'Inicio',
            href: '/',
            disabled: false
          },
          {
            text: 'Autores',
            href: '/#/authors',
            disabled: false
          },
          {
            text: 'Detalle',
            disabled: true
          },
        ]
      }
    },
    {
      path: 'update/:id',
      component: Authors,
      meta: { 
        name: {en: 'Update', es: 'Modificacion'},
        type: 'update',
        breadcrumb: [
          {
            text: 'Inicio',
            href: '/',
            disabled: false
          },
          {
            text: 'Autores',
            href: '/#/authors',
            disabled: false
          },
          {
            text: 'Modificación',
            disabled: true
          },
        ]
      }
    },
    {
      path: 'create',
      component: Authors,
      meta: { 
        name: {en: 'Create', es: 'Creacion'},
        type: 'create',
        breadcrumb: [
          {
            text: 'Inicio',
            href: '/',
            disabled: false
          },
          {
            text: 'Autores',
            href: '/#/authors',
            disabled: false
          },
          {
            text: 'Creación',
            disabled: true
          },
        ]
      }
    },
    
  ]
};

export default AuthorRoute