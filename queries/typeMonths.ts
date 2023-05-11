import { gql } from "@apollo/client";

const GET_TYPE_MONTHS = gql`
  query sectionMonths($name: String) {
    sectionMonths(name: $name) {
      name
      amount
    }
  }
`;

export default GET_TYPE_MONTHS;
