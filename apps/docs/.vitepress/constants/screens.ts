export const savedScreenParams = {
  target: 'Johns-MacBook-Pro.local',
  guest: true,
} as const

export const vncParams = {
  host: '192.168.1.14',
  port: 5900,
  username: 'john',
  observe: true,
} as const

export const sshParams = {
  host: 'server.example.com',
  username: 'john',
  port: 22,
  sshKey: 'My Work Key',
} as const
