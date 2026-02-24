import type { IDescriptionProfile } from "@types/DescriptionProfile";

export function DescriptionProfileMapper(data: any[]) {
  const descriptionProfileMapper = data.map(
    ({ properties }): IDescriptionProfile => {
      return {
        descriptionProfile:
          properties["Descripción"].rich_text[0]?.plain_text || "",
      };
    },
  );

  return descriptionProfileMapper;
}
