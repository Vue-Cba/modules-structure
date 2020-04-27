import Authors from '../Authors.vue'
import TableDirector from '../../../core/builders/table/table.director'
import TableBuilder from '../../../core/builders/table/table.builder'

const AuthorsComponents = {
  AuthorsTable: new TableDirector(
    new TableBuilder
  ).authors(),
  AuthorsDetail: new TableDirector(
    new TableBuilder
  ).authors(),
  AuthorsUpdate: new TableDirector(
    new TableBuilder
  ).authors(),
  AuthorsCreate: new TableDirector(
    new TableBuilder
  ).authors(),
  }

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
      component: AuthorsComponents.AuthorsTable,
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
      component: AuthorsComponents.AuthorsDetail,
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
      component: AuthorsComponents.AuthorsUpdate,
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
      component: AuthorsComponents.AuthorsCreate,
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