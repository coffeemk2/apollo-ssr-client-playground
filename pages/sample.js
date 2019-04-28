import React from "react";
import { useQuery } from "react-apollo-hooks";
import gql from "graphql-tag";

const GET_DOGS = gql`
  {
    getUsers {
      userName
      email
    }
  }
`;

const Sample = props => {
  const { data, loading } = useQuery(GET_DOGS);
  return loading ? (
    <div>loading...</div>
  ) : (
    <ul>
      {data.getUsers.map((user, id) => (
        <li key={id}>{user.userName}</li>
      ))}
    </ul>
  );
};

export default Sample;
