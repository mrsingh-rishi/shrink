// import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
interface DecodedToken {
  iss: string;
  sub: string;
  azp: string;
  email: string;
  aud: string;
  iat: number;
  exp: number;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
  jti: string;
}
export default async function verifyGoogleAuth(
  clientId: string,
  clientSecret: string,
  token: string
) {
  try {
    const decode: DecodedToken = await jwt.decode(token);
    return {
      success: true,
      message: "Token verified",
      user: decode,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Internal Server Error",
    };
  }
}
