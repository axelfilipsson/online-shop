import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
import styled from "styled-components";

export default function User() {
  const route = useRouter();
  const { user, error, isLoading } = useUser();
  if (!user)
    return (
      <div onClick={() => route.push(`/api/auth/login`)}>
        <FaUserCircle className="profile" />
        <h5>Logga in</h5>
      </div>
    );
  return (
    <Profile onClick={() => route.push(`/profile`)}>
      <img src={user.picture} alt={user.name} />
      <h5>{user.name}</h5>
    </Profile>
  );
}

const Profile = styled.div`
  img {
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
  }
`;