import { gql } from "@apollo/client";

const MOVE_RECORD = gql`
  mutation MoveRecord($categoryID: Int!, $recordID: Int!, $month: String!) {
    moveRecord(categoryID: $categoryID, recordID: $recordID, month: $month)
  }
`

export default MOVE_RECORD
