import { GitHubAvatar } from '../shared/GitHubComponents.jsx';

export function GitHubInfo({ userInfo }) {
  return (
    <li>
      <GitHubAvatar imgURL={userInfo.imgURL} alt={userInfo.alt} size={50} />
      <a href={userInfo.url} target="_blank" rel="noopener noreferrer">
        {userInfo.alt}
      </a>
      {userInfo.followers > 10000 && (
        <span> ({userInfo.followers} followers)</span>
      )}
    </li>
  );
}