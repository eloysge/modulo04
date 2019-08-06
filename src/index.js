/**
 * INICIANDO PROJETO MODULO04
 *
 * Na pasta raiz (modulo04)
 *
 * yarn init -y
 * yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli -D
 * (-D dependencia de desenvolvimento)
 *
 * yarn add react react-dom
 * (dependencia normal)
 *
 * COLOCAR NA PASTA RAIZ:
 * .prettierrc (veja exemplo de outros projetos)
 * .gitignore  (veja exemplo de outros projetos)
 *
 * CRIAR CONFIGURAÇÅO DO BABEL: (na raiz)
 * babel.config.js (veja modelo)
 *
 * CRIAR PASTA scr
 *
 * CRIAR CONFIGURAÇÅO DO WEBPACK
 * webpack.config.js (veja modelo)
 *
 * INSTALAÇÅO DO WEBPACK-DEV-SERVER (auto carregamento da pagina após alteraçåo)
 * yarn add webpack-dev-server -D
 *
 * adcionar no webpack.config.js:
 * devServer: {
 *   contentBase: path.resolve(__dirname, 'public'),
 * }
 *
 * CRIAR "scripts" no package.json:
 * "scripts": {
 *   "build": "webpack --mode production"
 *   "dev": "web-dev-server --mode development"
 * }
 *
 * INSTALAÇÅO:
 * yarn add style-loader css-loader -D (para importar styles e css)
 *
 * CONFIGURAR NO webpack.config.js:
 * module: {
 *   rules: [
 *     {
 *       test: /\.js$/,
 *       exclude: /node_modules/,
 *       use: {
 *         loader: 'babel-loader',
 *       },
 *     },
 *     {
 *       test: /\.css$/,
 *       use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
 *     },
 *   ],
 * },
 *
 * IMPORTAÇÅO DE ARQUIVOS DE IMAGEM
 * yarn add file-loader -D
 *
 * webpack-config.js:
 *
 * PARA O REACT ENTENDER STATE NAS CLASSES:
 * yarn add @babel/plugin-proposal-class-properties -D
 *
 * AJUSTAR babel.config.js: adicionar plugins:
 * plugins: [
 *   "@babel/plugin-proposal-class-properties"
 * ]
 *
 * PARA VALIDAÇÅO DOS TIPO DE PROPRIEDADES (prop-types)
 * yarn add prop-types
 *
 */

import React from 'react';
import { render } from 'react-dom';
import App from './app';

render(<App />, document.getElementById('app'));
