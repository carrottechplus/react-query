import { useUserQuery } from './hooks/useUsers';

function UserAddress() {
	const { data, isSuccess } = useUserQuery();

	return (
		<>
			{isSuccess && (
				<h2>
					Address : {data.address.street} - {data.address.suite}
				</h2>
			)}
		</>
	);
}

export default UserAddress;
