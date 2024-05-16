import { CredentialResponse } from "@react-oauth/google";
import verifyGoogleAuth from "auth/googleVerify";
import prisma from "db/client";
import bcrypt from "bcrypt";

async function handleGoogleLogin(token: string) {
  try {
    const result = await verifyGoogleAuth(
      process.env.GOOGLE_CLIENT_ID || "",
      process.env.GOOGLE_CLIENT_SECRET || "",
      token
    );
    const { user: userData } = result;

    const user = await prisma.user.findUnique({
      where: {
        email: userData?.email || "",
      },
    });
    let userToBeReturn = user;
    if (user) {
      const existingSocialLogin = await prisma.socialLogin.findFirst({
        where: {
          userId: user.id,
          provider: "google",
        },
      });

      if (existingSocialLogin) {
        // If a social login with the same provider exists, update it
        await prisma.socialLogin.update({
          where: {
            id: existingSocialLogin.id,
          },
          data: {
            sub: userData?.sub,
            name: userData?.name,
            familyName: userData?.family_name,
            givenName: userData?.given_name,
            email: userData?.email,
            profile: userData?.picture,
          },
        });
      } else {
        await prisma.socialLogin.create({
          data: {
            user: {
              connect: {
                id: user.id,
              },
            },
            provider: "google",
            sub: userData?.sub || "",
            name: userData?.name,
            familyName: userData?.family_name,
            givenName: userData?.given_name,
            email: userData?.email,
            profile: userData?.picture,
          },
        });
      }
    }
    // User Does not exist in the database
    else {
      const dummyPassword = await generateDummyHashedPassword();
      const newUser = (userToBeReturn = await prisma.user.create({
        data: {
          name:
            userData?.name ||
            (userData?.given_name + " " + userData?.family_name).trim(),
          email: userData?.email || "",
          password: dummyPassword,
        },
      }));

      await prisma.socialLogin.create({
        data: {
          user: {
            connect: {
              id: newUser.id,
            },
          },
          provider: "google",
          sub: userData?.sub || "",
          name: userData?.name,
          familyName: userData?.family_name,
          givenName: userData?.given_name,
          email: userData?.email,
          profile: userData?.picture,
        },
      });
    }

    return { success: true, user: userToBeReturn };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.message };
  }
}

async function generateDummyHashedPassword(): Promise<string> {
  const password = "ajsjndjkaskdnkasnkcnqnwnjkcnjknwniwieeiuni";

  const hashedPassword = await bcrypt.hash(password, 10);

  return hashedPassword;
}

export { handleGoogleLogin };
