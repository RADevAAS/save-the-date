import homeTextFr from "./homeTextFr";
import homeTextEn from "./homeTextEn";
import homeTextHe from "./homeTextHe";

var langDetect = () => {
    switch (navigator.language) {
    case "fr-FR":
      return homeTextFr;

    case "en":
      return homeTextEn;

    case "he":
      return homeTextHe;

    default:
      return homeTextEn;
  }
};

export default { lang: langDetect() };
