export interface FeaturedProjects {
  name: string
  projects: FeaturedProject[]
}

export interface FeaturedProject {
  title: string
  description: string
  github: string
  url: string
  icon_technology: any
  url_technology: string
  tags: string[]
  logo: string
}
