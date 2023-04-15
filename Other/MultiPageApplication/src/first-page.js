import _ from 'lodash';
import Header from './components/Header/Header';
import FirstPage from './components/FirstPage/FirstPage';

const header = new Header();
header.render(_.capitalize('first page header'));

const firstPage = new FirstPage();
firstPage.render();
