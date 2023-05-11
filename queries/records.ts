import { gql } from "@apollo/client";

const GET_RECORDS = gql`
  query records($categoryID: Int!, $month: String!) {
    records(categoryID: $categoryID, month: $month) {
      id
      name
      date
      amount
      description
    }
  }
`;

export default GET_RECORDS;
