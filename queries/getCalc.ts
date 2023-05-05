import { gql } from "@apollo/client";

const GET_CALC = (name: string) => {
  return gql`
    {
      getCalcs(name: "${name}") {
        name
        value
      }
    }
  `;
};

export default GET_CALC;
