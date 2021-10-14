import React from "react";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "No",
    selector: (row) => row.id,
    sortable: true
  },
  {
    name: "Category",
    selector: (row) => row.category,
    sortable: true
  },
  {
    name: "Kind",
    selector: (row) => row.kind,
    sortable: true
  },
  {
    name: "Model",
    selector: (row) => row.model,
    sortable: true
  },
  {
    name: "Version",
    selector: (row) => row.version,
    sortable: true
  },
  {
    name: "Describe",
    selector: (row) => row.describe,
    sortable: true
  }
];

const data = [
  {
    id: 1,
    category: "Vision",
    kind: "Classification",
    model: "Classify_Person.pt",
    version: "1.0.0",
    describe: "classificate people"
  },
  {
    id: 2,
    category: "Vision",
    kind: "Detection",
    model: "Detect_Person.pt",
    version: "1.0.1",
    describe: "Bounding box detect people"
  }
];

// function MyComponent() {
//     return (
//         <DataTable
//             columns={columns}
//             data={data}
//         />
//     );
// };
function Home() {
  return (
    <DataTable columns={columns} data={data} />
    // <div className='home'>
    //   <h1>Home</h1>
    // </div>
  );
}

export default Home;
