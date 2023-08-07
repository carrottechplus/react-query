import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// 데이터를 가져오는 커스텀 훅
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

// 데이터를 변경 요청 후 가져오는 커스텀 훅
export const updateUserName = async (userName, num) => {
	const response = await fetch(`https://jsonplaceholder.typicode.com/users/${num}`, {
		method: 'PUT',
		body: JSON.stringify({
			name: userName,
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	});

	return await response.json();
};

// 기존 서버데이터를 변경 요청하는 커스텀 훅
export const useUserMutation = () => {
	// useQueryClient로 부터 객체값을 반환받은 후
	const queryClient = useQueryClient();

	return useMutation(updateUserName, {
		// mutation 요청이 성공적으로 실행이 되면 파라미터값을 기존 query key에 추가해서 데이터 변경 처리하는 setQueryData 함수 호출
		onSuccess: (userName, num) => {
			queryClient.setQueryData(['user'], userName, num);
		},
	});
};
