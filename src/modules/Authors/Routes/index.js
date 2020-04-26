import Authors from '../Authors.vue'
import AuthorsTable from '../Views/AuthorsTable'
import AuthorsCreate from '../Views/AuthorsCreate'
import AuthorsEdit from '../Views/AuthorsEdit'

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
      component: AuthorsTable,
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
      path: 'update',
      component: AuthorsEdit,
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
      component: AuthorsCreate,
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