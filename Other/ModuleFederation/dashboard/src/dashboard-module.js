import NavMenu from './components/NavMenu/NavMenu';

const navLinks = [
  {
    url: '/users',
    title: 'Users',
  },
  {
    url: '/movies',
    title: 'Movies',
  },
];

const navMenu = new NavMenu();
navMenu.render(navLinks);

if (window.location.pathname === '/users') {
  import('UsersApp/Users').then((UsersModule) => {
    const Users = UsersModule.default;
    const users = new Users();
    users.render();
  });
} else {
  import('MoviesApp/Movies').then((MoviesModule) => {
    const Movies = MoviesModule.default;
    const movies = new Movies();
    movies.render();
  });
}
