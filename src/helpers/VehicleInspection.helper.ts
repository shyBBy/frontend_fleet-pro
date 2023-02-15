import {GetListOfVehiclesResponse} from 'types'

export class VehicleInspection {

    public static checkIsValid = (lastDate: string | Date, nextDate: string | Date): boolean => {
   
    const currentDate: Date = new Date();
    const last: Date = new Date(lastDate);
    const next: Date = new Date(nextDate);
  
    return currentDate >= last && currentDate <= next;
    }

    public static countDaysToEnd = (nextInspectionDate: string | Date): number => {
    
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
  
 public static checkAllCars = (vehicles:GetListOfVehiclesResponse ): number => {
    let invalidCount = 0;
    vehicles.forEach((vehicle) => {
      if (!this.checkIsValid(vehicle.lastDateOfVehicleInspection, vehicle.nextDateOfVehicleInspection)) {
        invalidCount++;
      }
    });
    return invalidCount;
  };


    public static countVehiclesDueForInspection = (vehicles: GetListOfVehiclesResponse): number => {
        const currentDate = new Date();
        let count = 0;
        vehicles.forEach((vehicle) => {
            const nextInspectionDate = new Date(vehicle.nextDateOfVehicleInspection);
            const daysToEnd = Math.floor((nextInspectionDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24));
            if (daysToEnd <= 7 && daysToEnd >= 0) {
                count++;
            }
        });
        return count;
    };
 
 
} 