import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

const PasswordProtectPage = () => {
  const [password, setPassword] = useState("@Password123");
  const [error, setError] = useState("");
  const router = useRouter();
  const callbackUrl = decodeURI((router.query?.callbackUrl as string) ?? "/");

  console.log(callbackUrl);
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    console.log("Logging in");
  };
  return (
    <div className="container">
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center card shadow-md">
          <form className="card-body w-96" onSubmit={handleSubmit}>
            <h1 className="text-4xl my-8">Sign In</h1>
            {!!error && <p className="text-error">ERROR: {error}</p>}
            <input
              type="password"
              className="input input-bordered"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button className="btn" type="submit">
              Enter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordProtectPage;
