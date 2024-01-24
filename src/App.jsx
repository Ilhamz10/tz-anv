import { RouterProvider, createHashRouter } from 'react-router-dom';
import Root from './routes/Root';
import Main from './routes/Main/Main';
import Users from './routes/Users/Users';
import { Provider } from 'react-redux';
import store from './store';
import User from './routes/User/User';
import Settings from './routes/Settings/Settings';

const router = createHashRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '/',
				element: <Main />,
				children: [
					{ path: '/', element: <Users /> },
					{ path: '/settings', element: <Settings /> },
				],
			},
			{
				path: '/:id',
				element: <User />,
			},
		],
	},
]);

function App() {
	return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	);
}

export default App;
