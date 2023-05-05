import { gql } from "@apollo/client";

const GET_TYPE_MONTHS = (type: string) => {
  return gql`
    {
      sectionMonths(name: "${type}") {
        name
        value
      }
    }
  `;
};

export default GET_TYPE_MONTHS;
