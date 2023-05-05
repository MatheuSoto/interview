
const categorySchema = /* GraphQL */`
  type Month {
    name: String
    value: Int
  }

  type Category {
    id: ID!
    name: String
    type: String
    months: [Month]
  }

  extend type Query {
    categories(type: String): [Category]!
    sectionMonths(name: String): [Month]!
    getCalcs(name: String): [Month]!
  }
`

export default categorySchema