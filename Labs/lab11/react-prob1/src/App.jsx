function GitHubAvatar() {
  return(
    <img src="https://github.com/Lunjapruch.png"
    alt="picture of lunjapruch"
    style={{width:"150px",borderRadius: "50%"}}/>
  )
}

function GitHubRepoURL() {
  return (
    <a
      href="https://github.com/Lunjapruch"
      target="_blank"
      rel="noopener noreferrer"
      >
      My GitHub repository
    </a>
  )
}

export default function GitHubInfo() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh"
    }}>
      <h1>My GitHub Information</h1>
      <GitHubAvatar />
      <GitHubRepoURL />
    </div>
  )
}

