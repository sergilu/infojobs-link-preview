export interface Offer {
    title: string;
    company: string;
    logo: string;

    city: string;
    province: string;
    country: string;

    vacancies: number;
    applications: number;

    jobLevel: string;
    studiesMin: string;
    experienceMin: string;

    contractType: string;
    workingHours: string;
    salaryDescription: string;

    description: string;
}