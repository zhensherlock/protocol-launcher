export const tableproConnectionId = '9f1f0c3e-2e3d-4b14-9c3a-1d2f4ad1f6f1'

export const connectParams = {
  connectionId: tableproConnectionId,
}

export const openTableParams = {
  connectionId: tableproConnectionId,
  database: 'app',
  schema: 'reporting',
  table: 'daily_events',
}

export const openQueryParams = {
  connectionId: tableproConnectionId,
  sql: 'SELECT * FROM users LIMIT 10',
}
