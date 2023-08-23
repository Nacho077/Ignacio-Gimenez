import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import common_es from './translations/es/common.json';
import common_en from './translations/en/common.json';
import common_br from './translations/br/common.json'

i18next.init({
	interpolation: {
		escapeValue: false
	},
	lng: 'es',
	resources: {
		es: {
			common: common_es
		},
		en: {
			common: common_en
		},
		br: {
			common: common_br
		}
	}
})

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
	<I18nextProvider i18n={i18next}>
		<App />
	</I18nextProvider>,
	
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
