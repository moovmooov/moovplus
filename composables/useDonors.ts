import type { Donor, DonorResponse } from '~/types/donor'

export function useDonors(query: Ref<string>, page: Ref<number>, itemsPerPage: number) {
  const { data, status, error } = useFetch<DonorResponse>('/users/search', {
    baseURL: 'https://dummyjson.com',
    params: {
      sortBy: 'firstName',
      order: 'asc',
      limit: itemsPerPage,
      skip: computed(() => (page.value - 1) * itemsPerPage),
      q: computed(() => query.value || '')
    }
  })

  const donors = computed<Donor[]>(() => {
    if (!data.value?.users) return []

    return data.value.users.map((user) => ({
      id: user.id,
      image: user.image,
      firstName: user.firstName,
      lastName: user.lastName,
      fullName: `${user.firstName} ${user.lastName}`,
      address: user.address,
      birthDate: new Date(user.birthDate).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }),
      gender: user.gender.charAt(0).toUpperCase() + user.gender.slice(1),
      location: `${user.address.city}, ${user.address.state}`,
      coordinates: {
        lat: user.address.coordinates.lat,
        lng: user.address.coordinates.lng
      },
      bloodGroup: user.bloodGroup
    }))
  })

  const currentPageStart = computed(() => (page.value - 1) * itemsPerPage + 1)
  const currentPageEnd = computed(() => Math.min(page.value * itemsPerPage, data.value?.total || 0))
  const totalResults = computed(() => data.value?.total || 0)

  return {
    donors,
    data,
    status,
    error,
    currentPageStart,
    currentPageEnd,
    totalResults
  }
}
