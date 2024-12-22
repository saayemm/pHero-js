const today = new Date()
// console.log(today); // 2021-08-02T14:00:00.000Z
const date = new Date('2021-08-02')
// console.log(date.getMonth()); // 2021-08-02T00:00:00.000Z

const specialDate = new Date(2021, 0, 1, 12, 0, 0)  
specialDate.setMonth(9)
specialDate.setDate(31)

// UNIX EPOCH
const unixEpoch = new Date(0)

