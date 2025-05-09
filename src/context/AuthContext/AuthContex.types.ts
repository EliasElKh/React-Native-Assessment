// AuthContex.types.ts
export interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  isVerified: boolean; // Track OTP verification status
  verifyOTP: () => void; // Function to set the user as verified
}
