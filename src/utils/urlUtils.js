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

