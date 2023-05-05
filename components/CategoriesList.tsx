import { useQuery } from "@apollo/client";
import GET_CATEGORIES from "../queries/categories";
import Category from "./Category";
import CategoryLoading from "./CategoryLoading";
import CategoryError from "./CategoryError";

const CategoriesList = ({name}) => {
  const {
    loading,
    error,
    data,
  } = useQuery(GET_CATEGORIES(name));

  if(error) return <CategoryError />
  if(loading) return [0,1,2,3,4].map(loadCell => <CategoryLoading key={loadCell} />)
  return data && data.categories.map(category => <Category key={JSON.stringify(category)} category={category} />)
    
};

export default CategoriesList