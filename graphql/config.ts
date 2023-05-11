import { createSchema, createYoga } from "graphql-yoga";
import { mergeQueries } from "../helpers/mergeQueries";
import recordSchema from "./schemas/recordSchema";
import categorySchema from "./schemas/categoryShema";
import recordResolvers from "./resolvers/recordResolvers";
import categoryResolvers from "./resolvers/categoryResolvers";
import { NextApiHandler, NextApiRequest } from "next";

export default createYoga<{
  req: NextApiRequest;
  res: NextApiHandler;
}>({
  graphqlEndpoint: "/api/graphql",
  schema: createSchema({
    typeDefs: mergeQueries([recordSchema, categorySchema]),
    resolvers: [recordResolvers, categoryResolvers],
  })
})