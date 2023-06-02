const currentDate: Date = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, "0");
const day = String(currentDate.getDate()).padStart(2, "0");
export const currentDateWithoutTime: string = `${year}-${month}-${day}`;


const futureDate: Date = new Date();
futureDate.setDate(currentDate.getDate() + 7);
const fyear = futureDate.getFullYear();
const fmonth = String(futureDate.getMonth() + 1).padStart(2, "0");
const fday = String(futureDate.getDate()).padStart(2, "0");
export const futureDateWithoutTime: string = `${fyear}-${fmonth}-${fday}`;



// const oneWeekLater: Date = new Date(currentDate);
// oneWeekLater.setDate(currentDate.getDate() + 7);

// export const oneWeekLaterString: string = oneWeekLater.toLocaleDateString(
//   undefined,
//   options
// );