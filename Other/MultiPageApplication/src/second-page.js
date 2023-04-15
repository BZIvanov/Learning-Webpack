import _ from 'lodash';
import Header from './components/Header/Header';
import SecondPage from './components/SecondPage/SecondPage';

const header = new Header();
header.render(_.capitalize('second page header'));

const secondPage = new SecondPage();
secondPage.render();
