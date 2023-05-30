import { Offer } from "@/models/Offer"


export function getOffer(id: string): Promise<Offer> {
    return fetch(`https://api.infojobs.net/api/7/offer/${id}`,{
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${process.env.API_TOKEN}`}
      })
      .then(r => r.json())
      .then(mapToOffer)
}

function mapToOffer(apiResponse: any): Offer {
    return {
        id: apiResponse.id,
        title: apiResponse.title,
        company: apiResponse.profile.name,
        logo: apiResponse.profile.logoUrl,

        city: apiResponse.city,
        province: apiResponse.province.value,
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
    }
}