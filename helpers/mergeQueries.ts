const mergeQueries = (queries: String[]): string => {
  const combinedQuery = `
      type Query

      ${queries.join('\n')}
  `;
  return combinedQuery.trim();
}


export {mergeQueries}