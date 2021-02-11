const BASE_URL = "http://127.0.0.1:5000";

// AUTH STUFF
export const getLoginUrl = () => {
  return `${BASE_URL}/login`;
}

export const getSignUpUrl = () => {
  return `${BASE_URL}/signup`;
}

// GET REQUESTS
export const getAlgorithmsUrl = () => {
  return `${BASE_URL}/algorithms`;
};

export const getDataStructuresUrl = () => {
  return `${BASE_URL}/datastructures`;
}

export const getProblemStatisticsUrl = (problemId, userId) => {
  return `${BASE_URL}/problem/statistics?problemId=${problemId}&userId=${userId}`
}

export const getPerformanceOverviewUrl = (problemId, userId) => {
  return `${BASE_URL}/problem/performance-overview?problemId=${problemId}&userId=${userId}`
}

// POST REQUEST
export const getSubmitProblemUrl = () => {
  return `${BASE_URL}/problem/submit`
}

 