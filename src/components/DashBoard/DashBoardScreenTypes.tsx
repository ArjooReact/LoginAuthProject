export  interface DashBoardScreenTypes{
title?:string
}

export type UserDetailsDataModel={
    address:AddressType,
    firstName:string,
    lastName:string,
    gender:string,
    email:string,
    hair:HairType,
    weight:number,
    macAddress:string
}

export type AddressType={
    address:string,  
    city:string,
    coordinates:AddressCoordinates,
    country:string,
    state:string,
    

}
export type AddressCoordinates={
     lat:number,
     lng:number,
}
export type HairType={
    color:string,
    type:string
}

export const setUserDataModel={
    address: {
        address: '',
        city: '',
        country: '',
        state: '',
        coordinates: {
          lat: 0.0,
          lng: 0.0,
        },
      },
      firstName: '',
      lastName: '',
      gender: '',
      email: '',
      hair: {
        color: '',
        type: '',
      },
      weight: 0.0,
      macAddress: '',
    
}
