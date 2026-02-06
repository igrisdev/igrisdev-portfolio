import type { FeaturedProjects } from "@types/featuredProjects";

import {
  NotionProjectRepository,
  type INotionProjectRepository,
} from "./notionProjectRepository";

export const getAllProjects = async (): Promise<FeaturedProjects[]> => {
  const repository: INotionProjectRepository = new NotionProjectRepository();

  const projects = await repository.getAllProjects();

  return projects;
};
