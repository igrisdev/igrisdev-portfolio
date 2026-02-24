import type { ICV } from "@types/CV";

export function CVMapper(data: any[]) {
  const cvMapped = data.map(({ properties }): ICV => {
    return {
      name: properties["Nombre"].title[0]?.plain_text || "",
      cv: properties["CV"].files[0]?.file.url || "",
    };
  });

  return cvMapped;
}
