import react_portfolio_website from '../../assets/react_portfolio_website.jpg'
import CSharp_portfolio_logo from '../../assets/CSharp_portfolio.jpg'
import Pyhton_portfolio_logo from '../../assets/Python_portfolio.jpg'
import SQL_portfolio_logo from '../../assets/MS_SQL.jpg'
import Uni_logo from '../../assets/Uni.jpg'
import Capstone_project from '../../assets/Capstone_project.jpg'

const data = [
    {
        id: 1,
        category: 'React',
        image: react_portfolio_website,
        title: "Portfolio Website",
        desc: "I created my portfolio website using React from a Udemy tutorial I intitially followed then applied some of my own touches. The site is deployed to Githib pages and I'm using my own custom domain.",
        demo: 'https://portfolio.neopulse.com',
        github: 'https://github.com/xcfor/portfoliowebsite'
    },
    {
        id: 2,
        category: 'C#',
        image: CSharp_portfolio_logo,
        title: "C# Code",
        desc: "Description goes here.",
        demo: 'https://portfolio.neopulse.com',
        github: 'https://github.com/xcfor/CSharp'
    },
    {
        id: 3,
        category: 'Python',
        image: Pyhton_portfolio_logo,
        title: "Python Code",
        desc: "Description goes here.",
        demo: 'https://portfolio.neopulse.com',
        github: 'https://github.com/xcfor/Python'
    },
    {
        id: 4,
        category: 'SQL',
        image: SQL_portfolio_logo,
        title: "SQL Code",
        desc: "Description goes here.",
        demo: 'https://portfolio.neopulse.com',
        github: 'https://github.com/xcfor/SQL'
    },
    {
        id: 5,
        category: 'University Assignments',
        image: Uni_logo,
        title: "University Assignments",
        desc: "I have made this repo of some of my coding university assignments private by default because of academic integrity - I don't want students cheating with my code.",
        demo: 'https://portfolio.neopulse.com',
        github: 'https://github.com/xcfor/SQL'
    },
    {
        id: 6,
        category: 'Masters Degree Capstone Project',
        image: Capstone_project,
        title: "Masters Capstone",
        desc: "Description goes here.",
        demo: 'https://portfolio.neopulse.com',
        github: 'https://github.com/xcfor/Masters_Capstone'
    },
]


export default data