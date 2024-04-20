import { useEffect } from "react";
import { resolveMethod } from "thirdweb";
import { useReadContract } from "thirdweb/react";

export function Component({ contract }) {
  const { data, isLoading } = useReadContract({ 
    contract, 
    method: resolveMethod("getBeefs"), 
    params: [] 
  });

  useEffect(() => {
    console.log(data)
  }, [data]);

  if (isLoading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (!data) {
    return <div className="text-center mt-8">No data available</div>;
  }

  return (
    <div className="grid grid-cols-2 gap-4">
        {Object.keys(data).map(cowKey => (
            <div key={cowKey} className="p-4 border border-gray-300 rounded">
                <div className="mb-2 font-bold">Owner: {data[cowKey].owner}</div>
                <div className="mb-2">Cow ID: {data[cowKey].cowId.toString()}</div> {/* Convert to string */}
                <div className="mb-2">Grade: {data[cowKey].gradeLetter}{data[cowKey].gradeNumber.toString()}</div>
                <div className="mb-2">Farm Name: {data[cowKey].farmName}</div>
                <div className="mb-2">Farm Location: {data[cowKey].farmLocation}</div>
                {/*<div>Tracker: {data[cowKey].tracker}</div>*/}
                <div className="mb-2">Destination: {data[cowKey].destination}</div>
            </div>
        ))}
    </div>
  );
}
