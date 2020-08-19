import asc_icon from "./assets/images/asc_icon.png";
import desc_icon from "./assets/images/desc_icon.png";
import guestData from "./assets/mock/guestsData.json";
import budgetData from "./assets/mock/budgetData.json";
import houseData from "./assets/mock/houseData.json"; 

export const getDateFromFirebaseDate = (date) => {
  return new Date(date._seconds * 1000);
};

export const trueCounter = (data, toCount) => {
  return data.map((line) => line[toCount]).filter(Boolean).length;
};

export const sortBy = (data, asc, key, icon) => {
  this.setState({
    data: data.sort((a, b) => (asc[key] ? a[key] - b[key] : b[key] - a[key])),
    asc: {
      [key]: asc[key] ? false : true,
    },
    icon: {
      [key]: icon[key] ? desc_icon : asc_icon,
    },
  });
};

// GUESTS CALCULATOR

//how many answer wet get
export const totalAnswer = guestData.length;

//only positive answer
export const trueAnswer = trueCounter(guestData, "answer");

//total of number guest who answer
 export const totalOfGuest = guestData.reduce((prev, guestData) => {
  return prev + guestData.numberOfGuests;
}, 0);

//total of positive guest
export const guestSum = guestData.reduce((prev, guestData) => {
  return guestData.answer ? prev + guestData.numberOfGuests : prev;
}, 0);

// BUDGET CALCULATOR

export const trueCounterBudget = trueCounter(budgetData, "payed");

export const budgetSum = budgetData.reduce((prev, budgetData) => {
  return budgetData.payed
    ? prev + budgetData.amount
    : prev + budgetData.advance;
}, 0);

export const budgetTotal = budgetData.reduce(
  (prev, budgetData) => prev + budgetData.amount,
  0
);

export const percentOfTotalBudget = ((budgetSum / budgetTotal) * 100).toFixed(
  2
);

// HOUSE CALCULATOR

 export const trueCounterHouse = trueCounter(houseData, "payed");

 export const houseSum = houseData.reduce((prev, houseData) => {
   return houseData.payed
     ? prev + houseData.amount
     : prev + houseData.advance;
 }, 0);

 export const houseTotal = houseData.reduce(
   (prev, houseData) => prev + houseData.amount,
   0
 );
 export const percentOfTotalHouse = ((houseSum / houseTotal) * 100).toFixed(
   2
 );