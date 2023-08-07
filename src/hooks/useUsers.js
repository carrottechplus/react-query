import { useQuery } from '@tanstack/react-query';

const fetchUser = async ({ queryKey }) => {
	console.log(queryKey[1]);
	const response = await fetch(`https://jsonplaceholder.typicode.com/users/${queryKey[1]}`);
	return await response.json();
};

export const useUserQuery = () => {
	return useQuery(['user', 1], fetchUser, {
		refetchOnWindowFocus: false,
		refetchOnMount: false,

		staleTime: 1000 * 5,
		cacheTime: 1000 * 5,
	});
};