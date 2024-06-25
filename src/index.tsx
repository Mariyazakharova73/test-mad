import { ConfigProvider } from 'antd';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { store } from './store/store';
import { theme } from './utils/theme';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<HashRouter>
		<Provider store={store}>
			<ConfigProvider theme={theme}>
				<App />
			</ConfigProvider>
		</Provider>
	</HashRouter>
);
