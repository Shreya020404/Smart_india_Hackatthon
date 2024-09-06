// dataService.js
export const fetchCourses = async () => {
  // Simulating fetching data from multiple sources
  return {
    gfg: [
      { id: 1, title: "DSA Basics", progress: 75 },
      { id: 2, title: "Advanced Algorithms", progress: 50 },
    ],
    leetcode: [
      { id: 3, title: "Array Problems", progress: 85 },
      { id: 4, title: "Graph Theory", progress: 30 },
    ],
    github: [
      { id: 5, title: "Open Source Contribution", progress: 40 },
      { id: 6, title: "Portfolio Project", progress: 60 },
    ],
  };
};



export const fetchRewards = async () => {
  // Simulate an API call with static data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "First Reward", status: "Completed" },
        { id: 2, title: "Second Reward", status: "Pending" },
        { id: 3, title: "Third Reward", status: "Completed" },
      ]);
    }, 1000); // Simulate network delay
  });
};

// Example static data
export const staticData = {
  "2024-09-01": { score: 85, badge: "/badges/badge1.png" },
  "2024-09-03": { score: 150, badge: "/badges/badge2.png" },
  "2024-09-05": { score: 600, badge: "/badges/badge3.png" },
  "2024-09-02": { score: 85, badge: "/badges/badge1.png" },
  "2024-09-04": { score: 150, badge: "/badges/badge2.png" },
  "2024-09-06": { score: 600, badge: "/badges/badge3.png" },
};


// Example badges based on score ranges
export const badges = [
  { min: 0, max: 100, name: "Bronze", image: "/badges/badge1.png" },
  { min: 101, max: 499, name: "Silver", image: "/badges/badge2.png" },
  { min: 500, max: 1000, name: "Gold", image: "/badges/badge3.png" },
];
