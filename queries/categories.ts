import { gql } from "@apollo/client";

const GET_CATEGORIES = (type: string) => {
  return gql`
    {
      categories(type: "${type}") {
        id
        name
        months {
          name
          value
        }
      }
    }
  `;
};

export default GET_CATEGORIES
