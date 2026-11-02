/** Mock Data for Profile Page  */

import { aboutData, overviewAboutMe, ProfileBaseData } from "./profile.type";

export const mockProfileData:ProfileBaseData = {

id:1,
name:'Mohamed Farouk',
userName:'Moo Roka',
avatar:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&utm_source=chatgpt.com',
coverImage:'https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=1200&utm_source=chatgpt.com',
bio:'Front-end Developer | Biotechnologiest student at Agricultural Saba Basha',
jobTitle:'Student'

}

/** Mock Data for overView in profile  */

export const mockOverview:overviewAboutMe = {

description:'Passionate Front-End Developer and Biotechnology student.   Interested in building modern and interactive web experiences.',
location:'Alexandria, Egypt',
education:'Agricultural Saba Basha',
jobTitle:'student',
skill:'HTML', 
activity:'Working on a new Front-End project.'

}

/** Mock Data for about in profile  */

export const mockAbout:aboutData = {

    fullName:'Mohamed Farouk',
    userName:'@mohamed',
    emailAddress:'mohamed@example.com',
    location:'Alexandria, Egypt',
    phone:'+20 100 000 0000',
    date_of_birth:'3 March 2006',
jobTitle:'Front-End Developer',
department:'Development',
education:'University Student',
experienceLevel:'Beginner'

}