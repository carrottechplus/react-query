import { useQuery } from '@tanstack/react-query';

function UserInfo() {
	const fetchUser = async ({ queryKey }) => {
		console.log(queryKey[1]);
		const response = await fetch(`https://jsonplaceholder.typicode.com/users/${queryKey[1]}`);
		return await response.json();
	};

	const { data, isLoading, isSuccess, isError } = useQuery(['user', 2], fetchUser);
	console.log(data);
	console.log('isLoading', isLoading);
	console.log('isSuccess', isSuccess);
	console.log('isError', isError);

	return (
		<div>
			<h1>user info</h1>
			{isSuccess && <h2>Name : {data.name}</h2>}
		</div>
	);
}

export default UserInfo;
