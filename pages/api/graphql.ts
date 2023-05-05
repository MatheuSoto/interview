// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createYoga, createSchema } from "graphql-yoga";
import type { NextApiRequest, NextApiResponse } from "next";
import recordResolvers from "../../graphql/resolvers/recordResolvers";
import recordSchema from "../../graphql/schemas/recordSchema";
import { mergeQueries } from "../../helpers/mergeQueries";
import categorySchema from "../../graphql/schemas/categoryShema";
import categoryResolvers from "../../graphql/resolvers/categoryResolvers";

// Docs: https://vercel.com/docs/concepts/functions/serverless-functions

export const config = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false,
  },
};

export default createYoga<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  graphqlEndpoint: "/api/graphql",
  schema: createSchema({
    typeDefs: mergeQueries([recordSchema, categorySchema]),
    resolvers: [recordResolvers, categoryResolvers],
  }),
});