export interface Contact {
  id: string,
  icon: string,
  firstName: string,
  lastName: string,
  dateOfBirth: Date | null,
  favoritesRanking: number | null,
  phones: Phone[],
  address: Address,
}

export interface Phone {
  phoneNumber: string,
  phoneType: string,
}

export interface Address {
  streetAddress: string,
  city: string,
  state: string,
  postalCode: string,
  addressType: string,
}

export const phoneTypeValues = [
  { title: 'Mobile', value: 'mobile' },
  { title: 'Work', value: 'work' },
  { title: 'Other', value: 'other' },
]
