export const connectParams = {
  host: '192.168.1.100',
  protocol: 'rdp' as const,
  port: 3389,
  username: 'admin',
  password: 'password',
}

export const connectVNCParams = {
  host: 'server.company.com',
  protocol: 'vnc' as const,
  port: 5903,
  depth: 16 as const,
}

export const connectFluidParams = {
  host: 'mycomputer.jumpdesktop.com',
  protocol: 'fluid' as const,
}
