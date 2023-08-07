import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import UserInfo from './UserInfo';
import { Route, Routes } from 'react-router-dom';
import UserName from './UserName';
import UserAddress from './UserAddress';
import Main from './Main';

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<div className='App'>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/name' element={<UserName />} />
					<Route path='/address' element={<UserAddress />} />
				</Routes>
				{/* <UserInfo /> */}
			</div>
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}

export default App;
