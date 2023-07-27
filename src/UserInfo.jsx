import { useQuery } from '@tanstack/react-query';

function UserInfo() {
	const fetchUser = async ({ queryKey }) => {
		console.log(queryKey[1]);
		const response = await fetch(`https://jsonplaceholder.typicode.com/users/${queryKey[1]}`);
		return await response.json();
	};

	const { data, isLoading, isSuccess, isError } = useQuery(['user', 2], fetchUser, {
		// 기본값은 true이나 false로 설정해주는게 좋다
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		//

		staleTime: 1000 * 5, // default : 0ms, 처음에 fresh 였다가 5초 후 refetch 되어 stale 상태로
		cacheTime: 1000 * 5, // 캐시에 데이터 유지시키는 시간, 위와 세트로 다님, default: 5m, 해당 시간 뒤에 가비지컬렉터에 의해 메모리에거 값 제거.
	});

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
