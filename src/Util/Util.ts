
class Util {
  static checkDate(date: string) {
const dateRegex = /^\d{4}\d{2}\d{2}$/;
    return dateRegex.test(date);
  }
    
}
const checkDate=Util.checkDate
export default Util;
export { checkDate };
