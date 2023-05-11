import { gql } from "@apollo/client";

const GET_CALC = gql`
  query getCalcs($name: String) {
    getCalcs(name: $name) {
      name
      amount
    }
  }
`;

export default GET_CALC;
