const username = "ruairi-mcc"; // Your GitHub username
const projectContainer = document.getElementById('github-projects');

fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => response.json())
  .then(data => {
    data.slice(0, 6).forEach(repo => { // show latest 6 repos
      const projectCard = document.createElement('div');
      projectCard.classList.add('card');
      projectCard.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description ? repo.description : "No description provided."}</p>
        <a href="${repo.html_url}" target="_blank">View on GitHub</a>
      `;
      projectContainer.appendChild(projectCard);
    });
  })
  .catch(error => console.error('Error fetching repos:', error));
