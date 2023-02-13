import React from 'react'
import {GetOneVehResponse} from 'types'

export const VehicleProfilePageBasicInfo = (props: GetOneVehResponse ) => {
  
  const {vehicle} = props;
  
  return(
    <>
      id pojazdu: {vehicle.id}
    </>
    )
}