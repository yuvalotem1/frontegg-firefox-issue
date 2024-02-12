"use client";
import { useAuth, useLoginWithRedirect } from "@frontegg/nextjs";
import { useRouter } from "next/navigation";

export const ClientComponent = ({ baseUrl }: { baseUrl?: string }) => {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const loginWithRedirect = useLoginWithRedirect();

  const logout = () => {
    router.replace("/account/logout");
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <div>
          <div>
            <img src={user?.profilePictureUrl} alt={user?.name} />
          </div>
          <div>
            <span>Logged in as: {user?.name}</span>
          </div>
          <div>
            <button onClick={() => alert(user?.accessToken)}>
              What is my access token?
            </button>
          </div>
          <div>
            <button onClick={() => logout()}>Click to logout</button>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => loginWithRedirect()}>Click me to login</button>
        </div>
      )}
    </div>
  );
};
