import { useQuery } from "@apollo/client";
import GET_CATEGORIES from "../../queries/categories";
import Category from "./Category";
import CategoryLoading from "./CategoryLoading";
import CategoryError from "./CategoryError";
import { ICategory } from "./types";

interface ICategoriesList {
  name: string;
}

const CategoriesList = ({ name }: ICategoriesList) => {
  const { loading, error, data } = useQuery(GET_CATEGORIES, {
    variables: { type: name },
  });

  if (error) return <CategoryError />;
  if (loading)
    return [0, 1, 2, 3, 4].map((loadCell) => (
      <CategoryLoading key={loadCell} />
    ));
  return (
    data &&
    data.categories.map((category: ICategory) => (
      <Category key={JSON.stringify(category)} category={category} />
    ))
  );
};

export default CategoriesList;
