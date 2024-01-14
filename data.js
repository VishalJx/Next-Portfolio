
export let basics=[]

export const resume = "https://drive.google.com/file/d/1M4LRwFn0Ds0cPCjzwc8Gw0PVwzM5fk-I/view?usp=sharing"
    
export let about="I am a passionate computer science enthusiast and a full stack developer(MERN + NextJs) at IIIT-Bhopal pursuing CSE. I have a strong interest in technology and I am always eager to learn new things. As a learner, I constantly seek out challenges and opportunities to grow both personally and professionally. My fields of interest includes Web Development, Cybersecurity, AI and Robotics.";

export let bannerAbout="A Computer Science Engineering undergrad and Robotics enthusiast.";
/*SkillSet Data */
export const skillData = [
{ category: "Frontend",
 skills:[
    "ReactJs",
    "NextJs",
    "Redux",
    "TailwindCSS",
    "HTML",
    "CSS"
 ]},
 { category: "Backend",
 skills:[
    "NodeJs",
    "ExpressJs",
    "MongoDB",
 ]},
 { category: "Languages",
 skills:[
     "C/C++",
     "JavaScript",
     "Python",
     "SQL",
 ]},
 { category: "Others",
 skills:[
    "Git/Github",
    "Apollo(GraphQL)",

 ]}
]

/* Work Experience Data */
export const works= [
[      {
         id : 1,
         title: "Full Stack Developer",
         company: "RA Creators",
         date: "June 2023 - Aug 2023",
         points : [
            "Spearheaded the development of an impactful e-commerce website, SutPitaara, as a key member of RA Creators firm.            ",
            "Leveraged ReactJs for the dynamic front-end and harnessed Python’s Django for the robust back-end for JWT authentication.",
         ]
      }],
[      {
         id : 2,
         title: "Contributor",
         company: "GSSoC",
         date: "May 2023 - Aug 2023",
         points : [
            "Actively participated in multiple MERN stack projects under the prestigious GSSoC program.",
            "Demonstrated expertise in resolving issues for open-source websites and driving website enhancements.",
         ]  
      }],

]

export const workPlaces = [
   {
      id : 1,
      company: "RA Creators"
   },
   {
      id : 2,
      company: "GSSoC"
   },
]

export const projects =[
   {
      id : 1,
      title: "Real Time Code Editor",
      description: "Developed a Real-time coding editor using NextJs for the frontend, incorporating TailwindCSS and leveraging web sockets for seamless real-time communication. The backend, powered by NodeJs and ExpressJs, ensures a robust foundation",
      github: "https://github.com/VishalJx/Real-T-Editor",
      deploy: "https://real-t.onrender.com/",
      image: "/realt.png",
      tech: ["NextJs", "NodeJs", "ExpressJs","TailwindCSS", "Framer"]

   },
   {
      id : 2,
      title: "Chat-Us",
      description: "Developed a real-time chatting application using NodeJs and ReactJs, with Web-Socket support for seamless messaging. Implemented essential features such as user authentication, profile picture uploads, and logout functionality.",
      github: "https://github.com",
      deploy: "https://chat-us.onrender.com/",
      image: "/ChatUs.png",
      tech: ["ReactJs", "NodeJs", "ExpressJs", "MongoDB","CSS"]

   },
   {
      id : 3,  
      title: "Instagram-Clone",
      description: "Engineered an authentic Instagram clone with user authentication using NodeJS for the backend and ReactJS for the frontend. Employed JSON Web Tokens (JWT) for secure user authentication and stored user data in a MongoDB database.",
      github: "https://github.com",
      deploy: "https://thankful-shorts-tuna.cyclic.app/signup",
      image: "/Insta.png",
      tech: ["ReactJs", "NodeJs", "ExpressJs", "MongoDB","CSS"]
   },
   {
      id : 4,  
      title: "Book-CRUD",
      description: "Developed a cutting-edge REST API to showcase the seamless CRUD functionality of websites. Implemented with NodeJS as the backend and MongoDB as the database, eliminating the need for user signup or login. Created a user-friendly frontend using ReactJS and Bootstrap, ensuring an attractive user interface.",
      github: "https://github.com",
      deploy: "https://book-crud-app.onrender.com/",
      image: "/Books-CRUD.png",
      tech: ["ReactJs", "NodeJs", "ExpressJs", "MongoDB","BootStrap"]
   },
   {
      id : 5,  
      title: "React-Portfolio",
      description: "Designed and crafted an impressive Personal Web Portfolio using ReactJS and CSS, showcasing skills and achievements. Elevated the presentation of the resume, capturing attention with an attractive and modern layout.",
      github: "https://github.com",
      deploy: "https://vishaljxo.netlify.app/",
      image: "/Portfolio.png",
      tech: ["ReactJs", "CSS"]
   },

]
