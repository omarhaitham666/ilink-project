/** Mock Data for Profile Page  */

import { aboutData, overviewAboutMe, portfolioData, postsData, ProfileBaseData } from "./profile.type";

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
skill:['HTML','CSS','Javascript','TypeScript','React','Bootstrap'], 
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

/** Mock Data for posts page in profile */

export const mockPosts:postsData[] = [{
        img:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200',
    content:'Just finished working on my latest Front-End project!  Learning something new every day makes the journey exciting.'
},{
    content:'Just finished working on a new frontend project! '
}]


/** Mock Data for portfolio in profile */

export const mockPortfolio:portfolioData[] = [{
    img:"https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800",
    category:'Design',
    calendar:2026,
    title:'Creative Portfolio Design',
    description:'A creative project showcasing modern visual design and unique user experiences.',
    tools:['figma','UI/UX'],
    link:'https://www.facebook.com'
}
,{
  img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
  category: "Web Development",
  calendar: 2025,
  title: "Modern E-Commerce Website",
  description: "A responsive online shopping platform with a clean interface and smooth user experience.",
  tools:['HTML', 'CSS', 'JavaScript', 'TypeScript'],
  link: "https://github.com"
}

]