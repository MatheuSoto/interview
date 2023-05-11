
const categorySchema = /* GraphQL */`
  type Month {
    name: String
    amount: Int
  }

  type Category {
    id: Int!
    name: String
    type: String
    months: [Month]
  }

  extend type Query {
    category(id: Int, month: String): Int
    categories(type: String): [Category]!
    sectionMonths(name: String): [Month]!
    getCalcs(name: String): [Month]!
  }
`

export default categorySchema