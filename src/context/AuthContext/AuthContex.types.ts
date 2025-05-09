
export interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  isVerified: boolean;
  verifyOTP: () => void;
}
