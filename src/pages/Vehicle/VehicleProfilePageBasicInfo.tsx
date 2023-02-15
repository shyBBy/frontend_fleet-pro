import React from 'react'


export const VehicleProfilePageBasicInfo = (props: any) => {
  
  const {vehicle} = props;
  
  return(
    <>
      id pojazdu: {vehicle.id}
    </>
    )
}