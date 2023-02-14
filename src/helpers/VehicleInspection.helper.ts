export class VehicleInspection {
  
  public checkIsValid = (lastDate: string | Date, nextDate: string | Date): boolean => {
   
    const currentDate: Date = new Date();
    const last: Date = new Date(lastDate);
    const next: Date = new Date(nextDate);
  
    return currentDate >= last && currentDate <= next;
    }
  
  public countDaysToEnd = (nextInspectionDate: string | Date): number => {
    
    const currentDate: Date = new Date();
 
  const next: Date = new Date(nextInspectionDate);
  
  // liczba milisekund w jednym dniu
  const oneDay: number = 24 * 60 * 60 * 1000;
  
  // różnica w czasie w milisekundach między datą dzisiejszą a datą przeglądu
  const timeDiff: number = next.getTime() - currentDate.getTime();
  
  // liczba dni pozostałych do przeglądu
  const daysToInspection: number = Math.ceil(timeDiff / oneDay);
    
    return daysToInspection;
  }
 
} 