import type { ICV } from "@types/CV";
import type { FeaturedProjects } from "@types/featuredProjects";
import type { IDescriptionProfile } from "@types/DescriptionProfile";

import { createUrlDatabase } from "src/lib/create_url_database";
import { formatToUuid } from "src/lib/format_to_uuid";
import { notion } from "./notion";
import { ProjectsForCardMapper } from "src/mappers/projects_for_card.mapper";
import { CVMapper } from "src/mappers/cv.mapper";
import { DescriptionProfileMapper } from "src/mappers/description_profile.mapper";

const messageError = "Error al obtener proyectos de Notion";

export interface INotionProjectRepository {
  getAllProjects(): Promise<FeaturedProjects[]>;
  getCV(): Promise<ICV | {}>;
  getDescriptionProfile(): Promise<IDescriptionProfile | {}>;
}

export class NotionProjectRepository implements INotionProjectRepository {
  async getDescriptionProfile(): Promise<IDescriptionProfile | {}> {
    const rawId = import.meta.env.NOTION_DB_PROFILE;
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

      const descriptionProfile = DescriptionProfileMapper(data.results);

      return descriptionProfile[0];
    } catch (error) {
      return {};
    }
  }

  async getCV(): Promise<ICV | {}> {
    const rawId = import.meta.env.NOTION_DB_CV;
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

      const cvMapper = CVMapper(data.results);

      return cvMapper[0];
    } catch (error) {
      return {};
    }
  }

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
