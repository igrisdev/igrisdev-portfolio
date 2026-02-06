export function createUrlDatabase(databaseId: string) {
  return `https://api.notion.com/v1/databases/${databaseId}/query`
}
