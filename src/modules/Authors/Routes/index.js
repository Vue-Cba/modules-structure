import {table} from '@/views'

const AuthorRoute =
{
  path: '/authors',
  meta: {
    name: {
      en: 'Authors',
      es: 'Autores',
    }
  },
  component: table,
  children: [
    /*{
      path: '/',
      component: ExamEnablerTable,
      meta: { name: {en: 'Index', es: 'Lista'}, path: 'examenabler', permission: 'READ' }   
    },
    {
      path: 'update',
      component: ExamEnablerUpdate,
      meta: { name: {en: 'Update', es: 'Modificacion'}, path: 'examenabler', permission: 'UPDATE'}
    },*/
  ]
};

export default AuthorRoute