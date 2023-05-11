import { gql } from "@apollo/client";

const GET_CATEGORIES = gql`
  query categories($type: String) {
    categories(type: $type) {
      id
      name
      months {
        name
        amount
      }
    }
  }
`;

export default GET_CATEGORIES;
