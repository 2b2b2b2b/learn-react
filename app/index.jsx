import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { hasHistory } from 'react-router';
import RouterMap from './router/routerMap'

//静态
import './static/css/common.less';
import './static/css/font.css';

render(
    <Todo/>,
    document.getElementById('root')
)
