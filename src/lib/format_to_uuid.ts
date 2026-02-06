export function formatToUuid(id: string): string {
  if (!id) return ''
  const cleanId = id.trim()
  if (cleanId.includes('-')) return cleanId
  return `${cleanId.substring(0, 8)}-${cleanId.substring(8, 12)}-${cleanId.substring(12, 16)}-${cleanId.substring(16, 20)}-${cleanId.substring(20)}`
}
