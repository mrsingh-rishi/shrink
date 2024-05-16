import { GoogleOAuthProvider } from "@react-oauth/google";
import { SignIn } from "../../../components/SignIn";

export default function Page() {
  const clientId: string = process.env.GOOGLE_CLIENT_ID || "";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <SignIn />
    </GoogleOAuthProvider>
  );
}
