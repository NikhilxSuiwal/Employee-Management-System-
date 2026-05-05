const employees = [
  {
    id: 1,
    firstname: "Rahul",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Login Page UI",
        description: "Design login page UI in React",
        date: "2026-04-25",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        title: "Navbar Component",
        description: "Create responsive navbar",
        date: "2026-04-20",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "API Integration",
        description: "Connect login API",
        date: "2026-04-22",
        category: "Backend"
      }
    ]
  },
  {
    id: 2,
    firstname: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Dashboard UI",
        description: "Create dashboard layout",
        date: "2026-04-26",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Sidebar Menu",
        description: "Build sidebar navigation",
        date: "2026-04-21",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Bug Fix",
        description: "Fix login redirect issue",
        date: "2026-04-23",
        category: "Bug"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Profile Page",
        description: "Develop profile UI",
        date: "2026-04-27",
        category: "Frontend"
      }
    ]
  },
  {
    id: 3,
    firstname: "Lucky",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Database Setup",
        description: "Setup MongoDB",
        date: "2026-04-25",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Schema Design",
        description: "Design user schema",
        date: "2026-04-20",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Auth System",
        description: "Implement JWT auth",
        date: "2026-04-22",
        category: "Backend"
      }
    ]
  },
  {
    id: 4,
    firstname: "Pawan",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      newTask: 1,
      completed: 1,
      active: 2,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Testing",
        description: "Write unit tests",
        date: "2026-04-26",
        category: "QA"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Bug Report",
        description: "Report UI bugs",
        date: "2026-04-21",
        category: "QA"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Automation",
        description: "Setup automation scripts",
        date: "2026-04-27",
        category: "QA"
      }
    ]
  },
  {
    id: 5,
    firstname: "Bixi",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "SEO Optimization",
        description: "Improve page SEO",
        date: "2026-04-25",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Content Writing",
        description: "Write blog content",
        date: "2026-04-20",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Ad Campaign",
        description: "Run Google Ads",
        date: "2026-04-22",
        category: "Marketing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Social Media",
        description: "Handle Instagram posts",
        date: "2026-04-27",
        category: "Marketing"
      }
    ]
  }
];


const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage= ()=>{
  localStorage.setItem("Employees", JSON.stringify(employees))
  localStorage.setItem("admin", JSON.stringify(admin))
}


export const getLocalStorage= ()=>{
  const employees= JSON.parse(localStorage.getItem('Employees'));  
  const admin= JSON.parse(localStorage.getItem('admin'));

  return {employees,admin}
}