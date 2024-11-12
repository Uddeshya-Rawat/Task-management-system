// set data in local storage

const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskNumber": 1,
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Complete Project Report",
        "date": "2024-10-01",
        "description": "Complete the detailed project report, summarizing the progress, challenges, and next steps for the current project. This includes gathering data from team members and compiling it into a cohesive document.",
        "category": "Work"
      },
      {
        "taskNumber": 2,
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Attend Team Meeting",
        "date": "2024-09-15",
        "description": "Participate in the weekly team meeting to discuss ongoing tasks, update on project progress, and align on key deliverables. Contribute to discussions and provide input on key decisions.",
        "category": "Work"
      },
      {
        "taskNumber": 3,
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Prepare Presentation Slides",
        "date": "2024-10-05",
        "description": "Design and prepare a set of slides for an upcoming presentation. The slides should summarize project milestones, data insights, and key recommendations for stakeholders.",
        "category": "Work"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Vihaan",
    "email": "employee2@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskNumber": 1,
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Update Client on Project Status",
        "date": "2024-10-02",
        "description": "Send a detailed update to the client, outlining the current status of the project, key achievements, and any potential delays or challenges that need attention. Include timelines and deliverables.",
        "category": "Communication"
      },
      {
        "taskNumber": 2,
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Review Budget for Upcoming Quarter",
        "date": "2024-10-03",
        "description": "Analyze and review the budget for the upcoming quarter, ensuring that all planned expenses align with the financial goals and available resources. Highlight any discrepancies and suggest adjustments if needed.",
        "category": "Finance"
      },
      {
        "taskNumber": 3,
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Conduct Market Research",
        "date": "2024-09-20",
        "description": "Conduct a comprehensive market research study to understand current trends, customer preferences, and competitive analysis. Use this data to provide actionable insights for the marketing team.",
        "category": "Research"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Reyansh",
    "email": "employee3@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    },
    "tasks": [
      {
        "taskNumber": 1,
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Finalize Design Mockups",
        "date": "2024-10-04",
        "description": "Finalize the design mockups for the new product interface, ensuring that all visual elements meet the user experience requirements. Coordinate with the development team to ensure feasibility of the designs.",
        "category": "Design"
      },
      {
        "taskNumber": 2,
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Conduct User Testing",
        "date": "2024-10-05",
        "description": "Conduct user testing on the latest version of the product to gather feedback on usability, functionality, and overall user experience. Document the findings and work with the design team to address any issues.",
        "category": "User Experience"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Saanvi",
    "email": "employee4@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskNumber": 1,
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Set Up Server Infrastructure",
        "date": "2024-10-06",
        "description": "Set up the server infrastructure for a new project, including configuring hardware, installing necessary software, and ensuring secure network access. This setup will support the product launch and future scalability.",
        "category": "IT"
      },
      {
        "taskNumber": 2,
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Install Software Updates",
        "date": "2024-09-18",
        "description": "Install the latest software updates across the company’s systems, ensuring that all security patches are applied and performance enhancements are implemented. Test all systems post-update to ensure smooth operation.",
        "category": "IT"
      },
      {
        "taskNumber": 3,
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Backup Data",
        "date": "2024-10-08",
        "description": "Perform a full backup of company data to ensure data security. Verify that all critical files and documents are included, and store them in a secure, easily accessible location.",
        "category": "IT"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Kaira",
    "email": "employee5@example.com",
    "password": "123",
    "taskCounts": {
      "active": 3,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskNumber": 1,
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Write Blog Post",
        "date": "2024-10-09",
        "description": "Write a detailed blog post on the latest trends in digital marketing, including key strategies for growing online presence and increasing engagement. Research and provide insights backed by data and examples.",
        "category": "Content"
      },
      {
        "taskNumber": 2,
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Publish Newsletter",
        "date": "2024-09-25",
        "description": "Prepare and publish the monthly newsletter, which includes company updates, recent achievements, and upcoming events. Ensure that the content is engaging and relevant to the audience.",
        "category": "Marketing"
      },
      {
        "taskNumber": 3,
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Plan Social Media Strategy",
        "date": "2024-10-10",
        "description": "Develop a comprehensive social media strategy to increase brand awareness, engagement, and followers. Plan content calendar, define key performance indicators, and allocate resources for execution.",
        "category": "Marketing"
      }
    ]
  }
];



  
  const admin = [{
    "id": 1,
    "firstName":"admin",
    "email": "admin@example.com",
    "password": "123",
    "tasks": []
  }];
  

  export const setLocalStorage=()=>{
        localStorage.setItem("employees",JSON.stringify(employees))
        localStorage.setItem("admin",JSON.stringify(admin));
  }

  export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem("employees"))
    const admin=JSON.parse(localStorage.getItem("admin"))
   return {employees,admin};
    
  }