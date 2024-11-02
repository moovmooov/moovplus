export type Donor = {
  id: number
  image: string
  firstName: string
  lastName: string
  fullName: string
  birthDate: string
  gender: string
  location: string
  address: {
    city: string
    state: string
    coordinates: {
      lat: number
      lng: number
    }
  }
  bloodGroup: string
}

export interface DonorResponse {
  users: Donor[]
  total: number
  skip: number
  limit: number
}
