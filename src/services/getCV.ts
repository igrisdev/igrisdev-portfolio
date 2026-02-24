import {
  NotionProjectRepository,
  type INotionProjectRepository,
} from "./notionProjectRepository";

export const getCV = async (): Promise<any> => {
  const repository: INotionProjectRepository = new NotionProjectRepository();

  const cv = await repository.getCV();

  return cv;
};
