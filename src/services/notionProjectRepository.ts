import type { FeaturedProjects } from "@types/featuredProjects";

import { createUrlDatabase } from "src/lib/create_url_database";
import { formatToUuid } from "src/lib/format_to_uuid";
import { notion } from "./notion";
import { ProjectsForCardMapper } from "src/mappers/projects_for_card.mapper";

const messageError = "Error al obtener proyectos de Notion";

export interface INotionProjectRepository {
  getAllProjects(): Promise<FeaturedProjects[]>;
}

export class NotionProjectRepository implements INotionProjectRepository {
  async getAllProjects(): Promise<FeaturedProjects[]> {
    const rawId = import.meta.env.NOTION_DB_PROJECTS;
    const token = import.meta.env.NOTION_TOKEN;

    if (!token || !rawId) {
      throw new Error(messageError);
    }

    const databaseId = formatToUuid(rawId);

    const url = createUrlDatabase(databaseId);

    const body = {
      filter: {
        property: "Estado",
        status: {
          equals: "Listo",
        },
      },
    };

    try {
      const response = await notion(url, token, body);

      if (!response.ok) {
        throw new Error(messageError);
      }

      const data = await response.json();

      const projectsMapper = ProjectsForCardMapper(data.results);

      return projectsMapper;
    } catch (error) {
      return [];
    }
  }
}
