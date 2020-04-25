import Tags from '../Tags.vue'
import TagsTable from '../Views/TagsTable'
import TagsCreate from '../Views/TagsCreate'
import TagsEdit from '../Views/TagsEdit'

const AuthorRoute =
{
  path: '/tags',
  meta: {
    name: {
      en: 'Tags',
      es: 'Autores',
    }
  },
  component: Tags,
  children: [
    {
      path: '/',
      component: TagsTable,
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
            text: 'Tags',
            disabled: true
          },
        ]
      }   
    },
    {
      path: 'update',
      component: TagsEdit,
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
            text: 'Tags',
            href: '/#/tags',
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
      component: TagsCreate,
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
            text: 'Tags',
            href: '/#/tags',
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