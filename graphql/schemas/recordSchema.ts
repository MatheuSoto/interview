
const recordSchema = /* GraphQL */`
  type Record {
    id: Int!
    category_id: Int
    name: String
    amount: Int
    month: String
    date: String
    description: String
    year: Int
  }

  extend type Query {
    records(categoryID: Int!, month: String!): [Record]!
  }

  type Mutation {
    moveRecord(categoryID: Int!, recordID: Int!, month: String!): Boolean
  }
`

export default recordSchema