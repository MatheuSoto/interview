import { useQuery } from "@apollo/client";
import GET_RECORDS from "../../queries/records";
import RecordLoading from "./RecordLoading";
import RecordError from "./RecordsError";
import Record from "./Record";

const RecordsList = ({ record }) => {
  const {
    loading,
    error,
    data: records,
  } = useQuery(GET_RECORDS, {
    variables: {
      categoryID: parseInt(record.categoryID),
      month: record.month,
    },
    fetchPolicy: 'network-only'
  });

  if (error) return <RecordError />;
  if (loading) return <RecordLoading />;
  return (
    records &&
    records.records.map((record) => (
      <Record key={JSON.stringify(record)} record={record} />
    ))
  );
};

export default RecordsList;
