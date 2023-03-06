const checkDate = (date: string) => {
  const dateRegex = /^\d{4}\d{2}\d{2}$/;
  return dateRegex.test(date);
};

class Util {
  static checkDate(date: string) {
    return checkDate(date);
    }
    
}
export default Util;
export { checkDate };
