import './App.css';
import { GitHubInfo } from './GitHubInfo.jsx';
import { users } from '../shared/users.js';

export default function App() {
  const popularUsers = users.filter((user) => user.followers > 10000);

  return (
    <>
      <h1>Popular GitHub Repositories</h1>
      <ol>
        {popularUsers.map((user) => (
          <GitHubInfo key={user.url} userInfo={user} />
        ))}
      </ol>
    </>
  );
}