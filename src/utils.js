import asc_icon from "./assets/images/asc_icon.png";
import desc_icon from "./assets/images/desc_icon.png";



export const getDateFromFirebaseDate = (date) => {
 return(
     new Date(date._seconds * 1000)
 )};

export const trueCounter = (data, toCount) => { 
    return (
 data.map((line) => line[toCount]).filter(Boolean).length
 )};

 export const sortBy = (data, asc, key, icon) => {
    this.setState({
      data: data.sort((a, b) =>
        asc[key] ? a[key] - b[key] : b[key] - a[key]
      ),
      asc: {
        [key]: asc[key] ? false : true,
      },
      icon: {
        [key]: icon[key] ? desc_icon : asc_icon,
      },
    });
  }