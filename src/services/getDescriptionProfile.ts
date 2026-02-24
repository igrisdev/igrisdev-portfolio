import {
  NotionProjectRepository,
  type INotionProjectRepository,
} from "./notionProjectRepository";

export const getDescriptionProfile = async (): Promise<any> => {
  const repository: INotionProjectRepository = new NotionProjectRepository();

  const descriptionProfile = await repository.getDescriptionProfile();

  return descriptionProfile;
};
