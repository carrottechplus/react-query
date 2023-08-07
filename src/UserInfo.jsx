import UserAddress from './UserAddress';
import UserName from './UserName';

function UserInfo() {
	return (
		<div>
			<h1>user info</h1>
			<UserName />
			<UserAddress />
		</div>
	);
}

export default UserInfo;
