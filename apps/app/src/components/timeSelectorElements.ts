export const possibleHours: Array<number> = []
for (let i = 1; i <= 12; i++) {
    possibleHours.push(i)
}

export const possibleMinutes: Array<number> = []
for (let i = 0; i <= 59; i++) {
    possibleMinutes.push(i)
}

export const hoursLines: Array<Array<number>> = [[0, 4], [4, 8], [8, 12]]

export const minutesLines: Array<Array<number>> = [[0, 10], [10, 20], [20, 30], [30, 40], [40, 50], [50, 60]]