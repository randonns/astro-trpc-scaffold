export function formatTime(time: number | string): string {
  return new Date(time).toLocaleString("ko-KR")
}
