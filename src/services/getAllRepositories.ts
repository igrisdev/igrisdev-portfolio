import type { GithubResultAPI } from "@types/GithubResultAPI"

export const getAllRepositories = async () => {
  const githubUrl =
    'https://api.github.com/users/igrisdev/repos?type=owner&sort=updated&per_page=4'

  const res = await fetch(githubUrl)
  const data = await res.json()

  if (!res.ok) {
    throw Error('🚧 Could not fetch GitHub repos.')
  }

  const projects: GithubResultAPI[] = data.map((repo: GithubResultAPI) => ({
    name: repo.name.toLocaleLowerCase(),
    description: repo.description,
    topics: repo.topics.slice(0, 5),
    html_url: repo.html_url,
    icon: repo.language,
    stargazers_count: repo.stargazers_count,
  }))

  return {
    repos: projects,
  }
}