export const addWaterParams = {
  amount: 250,
}

export const addWaterWithTimeParams = {
  amount: 250,
  time: '22/01/2026T13:17',
}

export const addCaffeineParams = {
  amount: 115,
}

export const addCaffeineWithTimeParams = {
  amount: 115,
  time: '09/04/2026T13:17',
}

export const addOtherParams = {
  amount: 250,
  type: 'carbonated_water' as const,
}

export const addOtherWithTimeParams = {
  amount: 200,
  type: 'coffee' as const,
  time: '09/04/2026T13:17',
}

export const logCupParams = {
  amount: 250,
  cupName: 'my mug',
}

export const logCupWithTimeParams = {
  amount: 300,
  cupName: 'Morning Glass',
  time: '22/01/2026T08:00',
}
