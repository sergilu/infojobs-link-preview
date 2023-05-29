import { Offer } from "@/models/Offer"

const token = 'bWlkdWdhOnFzNW5LcHAzOE4oSA=='

export function getOffer(id: string): Promise<Offer> {
    return fetch(`https://api.infojobs.net/api/7/offer/${id}`,{
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${token}`}
      })
      .then(r => r.json())
      .then(mapToOffer)
}

function mapToOffer(apiResponse: any): Offer {
    return {
        title: apiResponse.title,
        company: apiResponse.profile.name,
        logo: apiResponse.profile.logoUrl,

        city: apiResponse.city,
        privince: apiResponse.province.value,
        country: apiResponse.country.value,

        vacancies: apiResponse.vacancies,
        applications: apiResponse.applications,

        jobLevel: apiResponse.jobLevel.value,
        studiesMin:  apiResponse.studiesMin.value,
        experienceMin: apiResponse.experienceMin.value,
    
        contractType: apiResponse.contractType.value,
        workingHours: apiResponse.journey.value,
        salaryDescription: apiResponse.salaryDescription,
        

        description: apiResponse.description,
    } as any
}