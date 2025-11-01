const hamburgerBtn = document.getElementById("ham-btn");
const navBtn = document.getElementById("nav-bar");

const navList = document.querySelectorAll("a");
const h1 = document.querySelector("h1");

const homePage = document.getElementById("home-pg");
const discoveryPage = document.getElementById("discovery-pg");
const directoryPage = document.getElementById("directory-pg");
const joinUsPage = document.getElementById("join-pg");

hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("show");
    navBtn.classList.toggle("show");
});


addClassName(navList);

function addClassName(allClass) {
    
    allClass.forEach(navItem => {
        
        navItem.addEventListener("click", () => {
            
            h1.innerText = navItem.innerText;
            navItem.classList.toggle("current");
        });
    });
}


// Bellow is the code for manipulating the <main> element and its innerHtml.

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
];



const allCourses = document.getElementById("all-courses");
const cseCourses = document.getElementById("cse");
const wddCourses = document.getElementById("wdd");

createCourseCard(allCourses, courses);


allCourses.addEventListener("click", () => {

    createCourseCard(allCourses, courses);
});


cseCourses.addEventListener("click", () => {
    createCourseCard(cseCourses, courses.filter(c => c.subject.toLowerCase() === "cse"));
});

wddCourses.addEventListener("click", () => {
    createCourseCard(wddCourses, courses.filter(c => c.subject.toLowerCase() === "wdd"));
});


function createCourseCard(clicked, course) {
    document.querySelector(".course-box").innerHTML = "";
    const courseBox = document.querySelector(".course-box");
    let heading = document.createElement("h3");
    heading.innerText = clicked.innerText;
    courseBox.appendChild(heading);

    course.forEach(innerCourse => {
        let card = document.createElement("div");
        let thirdHead = document.createElement("Button");
        let p = document.createElement("p");
        

        let courseCode = `${innerCourse.subject}${innerCourse.number}`;
        let courseTitle = innerCourse.title;
        let credit = innerCourse.credits;
        let certification = innerCourse.certificate;
        let discribe = innerCourse.description;
        let tech = innerCourse.technology;
        let attrInfo = `${courseCode.toLowerCase()}-info`;

        card.setAttribute("class", `${courseCode.toLowerCase()}-course-card`);
        thirdHead.setAttribute("class", courseCode.toLowerCase());
        p.setAttribute("id", attrInfo);
        thirdHead.innerText = `${courseCode} - ${courseTitle}`;
        p.innerHTML = `<strong>Credit: ${credit}<br>Certificate: ${certification}<br>Technology Used: ${tech}</strong> <br> ${discribe}`;
        card.appendChild(thirdHead);
        card.appendChild(p);
        document.querySelector(".course-box").appendChild(card);
    });
    

};

/* ========== Set Id attribute for use in css file to display hidden info on mouse click =========== */

const cseOneTen = document.querySelector(".cse110");
const cseOneTenP = document.querySelector("#cse110-info");

const cseOneEle = document.querySelector(".cse111-info");
const cseTwoTen = document.querySelector(".cse210-info");
const wddOneThirty = document.querySelector(".wdd130-info");
const wddOneThreeOne = document.querySelector(".wdd131-info");
const wddTwoThreeOne = document.querySelector(".wdd231-info");





