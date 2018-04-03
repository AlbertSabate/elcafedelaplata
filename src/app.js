import 'babel-polyfill'
import ReactDOM from 'react-dom'
import { polyfill } from 'smoothscroll-polyfill'

import App from './components/App'

import './assets/styles/app.sass'


polyfill()
ReactDOM.render(App(), document.getElementById('app'))
