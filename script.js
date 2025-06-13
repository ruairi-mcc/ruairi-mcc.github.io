const username = "ruairi-mcc";
const projectContainer = document.getElementById('github-projects');

fetch(`https://api.github.com/users/${username}/repos`)
  .then(res => res.json())
  .then(data => {
    data.slice(0, 6).forEach(repo => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || 'No description'}</p>
        <a href="${repo.html_url}" target="_blank">View on GitHub</a>
      `;
      projectContainer.appendChild(card);
    });
  })
  .catch(err => console.error(err));
