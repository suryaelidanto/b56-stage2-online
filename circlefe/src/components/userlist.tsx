import { useFetchData } from "../hooks/use-fetch-data";
import { User } from "../entities/user";

export function UserList() {
  const { data: users } = useFetchData<User>({
    url: "https://jsonplaceholder.typicode.com/users",
  });

  return (
    <ul>
      {users.map((user, index) => {
        return (
          <div key={index}>
            <li>Name: {user.name}</li>
            <li>Username: {user.username}</li>
            <hr />
          </div>
        );
      })}
    </ul>
  );
}
