import { gql } from "@apollo/client";

const GET_RECORDS = (categoryID: number, month: string) => {
  return gql`
    {
      records(categoryID: ${categoryID}, month: "${month}") {
        id
        name
        date
        amount
        description
      }
    }
  `;
};


export default GET_RECORDS;
