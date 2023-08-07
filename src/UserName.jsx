import { useUserQuery } from './hooks/useUsers';

function UserName() {
	const { data, isSuccess } = useUserQuery();

	return <>{isSuccess && <h2>Name : {data.name}</h2>}</>;
}

export default UserName;
