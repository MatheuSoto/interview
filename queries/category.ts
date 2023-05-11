import { gql } from "@apollo/client";

const GET_CATEGORY = gql`
  query category($id: Int!, $month: String!) {
    category(id: $id, month: $month)
  }
`;

export default GET_CATEGORY;
