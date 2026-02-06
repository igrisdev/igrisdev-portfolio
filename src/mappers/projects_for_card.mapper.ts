import type { FeaturedProjects } from "@types/featuredProjects";

export function ProjectsForCardMapper(projects: any[]): FeaturedProjects[] {
  const projectsMapped = projects.map(({ properties }): FeaturedProjects => {
    return {
      name: properties["Seleccionar"].select?.name || "",
      projects: [
        {
          title: properties["Titulo"].title[0]?.plain_text || "",
          description: properties["Descripción"].rich_text[0]?.plain_text || "",
          github: properties["Link GitHub"].url || "",
          url: properties["Link Pagina Framework"].url || "",
          icon_technology:
            properties["Icono Framework Principal"].files[0]?.file.url || "",
          url_technology: properties["Link Pagina Framework"].url || "",
          tags:
            properties["Tags"].multi_select?.map(
              ({ name }: { name: string }) => {
                return {
                  tag: name,
                };
              },
            ) || [],
          logo: properties["Logo Empresa"].files[0]?.file.url || "",
          image: properties["Imagen Presentación"].files[0]?.file.url || "",
        },
      ],
    };
  });

  const listProject: FeaturedProjects[] = [];

  projectsMapped.forEach((incomingItem) => {
    const existingCategory = listProject.find(
      (item) => item.name === incomingItem.name,
    );

    if (existingCategory) {
      existingCategory.projects.push(incomingItem.projects[0]);
    } else {
      listProject.push(incomingItem);
    }
  });

  return listProject;
}
