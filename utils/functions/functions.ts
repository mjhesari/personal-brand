export const convertToObjectLocation = (location: string) => { 
    const [lat, lng] = location ? convertToEnglishDigits(location).normal.split(',') : [32, 54]; 
   
    return { 
      lat: Number(lat), 
      lng: Number(lng), 
    }; 
  };
  export const convertToEnglishDigits = (number: number | string) => { 
    const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']; 
    const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 
    return { 
        normal: String(number).replace(/[۰-۹]/g, (match) => { 
          return englishNumbers[persianNumbers.indexOf(match)]; 
        }), 
        separated: Number( 
          String(number).replace(/[۰-۹]/g, (match) => { 
            return englishNumbers[persianNumbers.indexOf(match)]; 
          }) 
        ).toLocaleString(), 
      }; 
}

export const convertToPhoneNumber = (number: string) =>
  number.replace(/(\d{2})(\d{3})(\d{3})(\d{4})/, "$1 $2 $3 $4");
