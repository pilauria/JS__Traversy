class GitHub {
  constructor() {
    this.client_id = 'CLIENTID';
    this.client_secret = 'APIKEY'; // Replace 'CLIENTID' and 'APIKEY' with your own API key; otherwise, your HTTP request will not work;
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    // Get the profile (using fetch with async/await)
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    // Get the repo (using fetch with async/await)
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
