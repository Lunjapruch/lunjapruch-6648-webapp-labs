 const username = "lunjapruch";

    async function getGithubInfo() {
      try {

        const response = await fetch(`https://api.github.com/users/${username}`);

        const data = await response.json();

        document.getElementById("github-name").textContent = data.name;
        document.getElementById("github-link").href = data.html_url;
        document.getElementById("avatar-img").src = data.avatar_url;

      } catch (error) {

        console.error("เกิดข้อผิดพลาด:", error);
        document.getElementById("github-name").textContent = "โหลดข้อมูลไม่สำเร็จ";
      }
    }

getGithubInfo();