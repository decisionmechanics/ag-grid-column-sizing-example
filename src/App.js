import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const createAnnualData = () =>
  Array.from({ length: 63 }, (_, i) => i + 1970).reduce((accumlation, year) => {
    accumlation[year] = (1.5 + Math.random()).toFixed(2);
    return accumlation;
  }, {});

const App = () => {
  const columnDefinitions = [
    {
      headerName: "",
      children: [
        {
          field: "ratio",
          headerName: "",
        },
      ],
    },
    {
      headerName: "Dummy",
      children: [
        {
          field: "dummy",
          headerName: "",
        },
      ],
    },
    {
      headerName: "Year",
      children: Array.from({ length: 63 }, (_, i) => i + 1970).map((year) => ({
        field: year.toString(),
      })),
    },
  ];

  const data = [
    {
      ratio: "<12 months on ART",
      dummy: 0,
      ...createAnnualData(),
    },
    {
      ratio: "12+ months on ART",
      dummy: 0,
      ...createAnnualData(),
    },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 800 }}>
      <AgGridReact
        columnDefs={columnDefinitions}
        rowData={data}
        onFirstDataRendered={(params) => {
          params.columnApi.autoSizeAllColumns(false);
        }}
        suppressColumnVirtualisation={true}
        suppressRowVirtualisation={true}
      />
    </div>
  );
};

export default App;
