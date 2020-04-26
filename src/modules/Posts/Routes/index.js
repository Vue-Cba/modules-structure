import Posts from '../Posts.vue'
import PostsTable from '../Views/PostsTable'
import PostsCreate from '../Views/PostsCreate'
import PostsEdit from '../Views/PostsEdit'

const AuthorRoute =
{
  path: '/posts',
  meta: {
    name: {
      en: 'Posts',
      es: 'Posts',
    }
  },
  component: Posts,
  children: [
    {
      path: '/',
      component: PostsTable,
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
            text: 'Posts',
            disabled: true
          },
        ]
      }   
    },
    {
      path: 'update',
      component: PostsEdit,
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
            text: 'Posts',
            href: '/#/posts',
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
      component: PostsCreate,
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
            text: 'Posts',
            href: '/#/posts',
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