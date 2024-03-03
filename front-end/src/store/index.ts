import {createStore} from "vuex";

const store = createStore({
	state() {
		return {
			userProfile: {
				name: "Jacob Anderson",
				age: 23,
				interests: ["Music", "Programming", "Chess", "Playing Piano"],
				about: "My name is Jacob Anderson, I am from Georgia and absolutely love music!",
				education: [
					{
						degree: "Major: Computer Engineering, Minor: Computer Science",
						institution: "Brigham Young University, Provo, UT",
						description: "Current GPA: 3.77, August 2020 to Present",
					},
					{
						degree: "College classes while in HS",
						institution: "Georgia State University",
						description: "GPA 3.52, Aug 2017 to May 2018",
					}
				],
				work: [
					{
						role: "Undergrad Research",
						company: "Brigham Young University",
						description: "Assisted in developing a non-invasive glucose device with Dr. Chiang and Dr. Davis, focusing on system integration and data analysis. Sep 2022 to Present",
					},
					{
						role: "Private Instructor and Instructor Success Trainer (IST)",
						company: "Juni Learning",
						description: "Taught youth (7-18) programming, math, and science 1-on-1. May 2021 to Present",
					},
					{
						role: "Full-Time Service Volunteer in Ecuador",
						company: "The Church of Jesus Christ of Latter-day Saints",
						description: "Held leadership/manager positions over 12 volunteers. July 2018 to Apr 2020",
					},
					{
						role: "Programmer and Assistant",
						company: "AudioT",
						description: "Worked for the start-up AudioT in programming Raspberry Pi’s using Python and Bash. May 2020 to August 2020",
					},
					{
						role: "Web Designer",
						company: "Freelance",
						description: "Wrote and prepared websites using HTML, CSS, JavaScript and Vue. July 2020 to June 2021",
					}
				],
				skills: [
					"Fluent in Spanish – Reading and Writing proficiency Moderate to High",
					"Programming – C, C++, Java, TypeScript, Python, System Verilog, HTML, CSS, JavaScript (moderate fluency), Scratch, RISC-V Assembly, React, and Vue"
				],
				achievements: [
					"Rank of Eagle Scout in the BSA organization",
					"Phi Eta Sigma Honor Society Member"
				],
				otherActivities: [
					"Study Abroad at Georgia Tech Lorraine in Metz France Winter semesters of 2015 and 2016",
					"First Lego League Robotics Team 2011 to 2014",
					"Shakespeare Tavern of Atlanta, Volunteer"
				],
				experience: [
					{
						role: "Research Assistant",
						location: "BYU",
						description: "Assisting in research for developing a non-invasive glucose monitoring device."
					},
					{
						role: "Employee",
						location: "Chick-Fil-A",
						description: "I worked at Chick-Fil-A for a few years"
					},
					{
						role: "Employee",
						location: "Crumbl",
						description: "I worked at Crumbl over the summer"
					},
					{
						role: "Web Developer",
						location: "Freelance",
						description: "I worked for my dad writing websites over the summer"
					},
					{
						role: "Web Developer",
						location: "Startup",
						description: "I worked for my dad's student's startup over the summer"
					},
				],
				projects: [
					{
						name: "Website for Dad",
						description: "I wrote a basic website for my Dad (With HTML and CSS only)"
					},
					{
						name: "Student Startup Website",
						description: "I wrote and am writing a website for his student's startup he's helping with"
					},
					{
						name: "Eagle Project",
						description: "I did an eagle project creating an orienteering course"
					},
				],
			}
		};
	},
	mutations: {
		updateUserProfile(state, payload) {
			state.userProfile = { ...state.userProfile, ...payload };
		}
	},
	actions: {
		// Actions can remain as placeholders for potential future dynamic updates
	},
});

export default store;