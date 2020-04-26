import Menu from '../Menu.vue'

const MenuRoute =
{
  path: '/',
  meta: {
    name: {
      en: 'Menu',
      es: 'Menu',
    },
    breadcrumb: [
      {
        text: 'Inicio',
        href: '/',
        disabled: true
      },
    ]
  },
  component: Menu
};

export default MenuRoute