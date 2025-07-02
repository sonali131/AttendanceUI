// // src/components/DataGridDemo.jsx
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
// import { DataGrid } from "@mui/x-data-grid";

// const columns = [
//   {
//     field: "id",
//     headerName: "ID",
//     width: 90,
//     headerAlign: "center",
//     align: "center",
//   },
//   {
//     field: "name",
//     headerName: "Name",
//     width: 150,
//     editable: true,
//     headerAlign: "center",
//     align: "center",
//   },
//   {
//     field: "role",
//     headerName: "Role",
//     width: 150,
//     editable: true,
//     headerAlign: "center",
//     align: "center",
//   },
//   {
//     field: "mail",
//     headerName: "Mail",
//     width: 200,
//     editable: true,
//     headerAlign: "center",
//     align: "center",
//   },
// ];

// export default function DataGridDemo({ rows, onRowSelect }) {
//   const handleRowClick = (params) => {
//     onRowSelect(params.id); // Notify parent component which row was clicked
//   };

//   return (
//     <Box sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
//       <Paper
//         elevation={4}
//         sx={{
//           width: "90%",
//           maxWidth: 900,
//           borderRadius: 4,
//           overflow: "hidden",
//           p: 3,
//           bgcolor: "#fafafa",
//         }}
//       >
//         <Typography
//           variant="h6"
//           component="div"
//           color="primary"
//           fontWeight={600}
//           gutterBottom
//           sx={{ textAlign: "center", mb: 2 }}
//         >
//           👥 Employee Directory
//         </Typography>

//         <Box
//           sx={{
//             height: 320,
//             bgcolor: "#fff",
//             borderRadius: 2,
//             boxShadow: 2,
//           }}
//         >
//           <DataGrid
//             rows={rows}
//             columns={columns}
//             pageSize={5}
//             onRowClick={handleRowClick}
//             checkboxSelection
//             disableRowSelectionOnClick
//             sx={{
//               ".MuiDataGrid-columnHeaders": {
//                 backgroundColor: "#e3f2fd",
//               },
//               ".MuiDataGrid-row:hover": {
//                 backgroundColor: "#f1f8ff",
//               },
//             }}
//           />
//         </Box>
//       </Paper>
//     </Box>
//   );
// }
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "id",
    headerName: "ID",

    width: 90,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "name",
    headerName: "Name",
    width: 180,
    editable: true,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "role",
    headerName: "Role",
    width: 180,
    editable: true,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "mail",
    headerName: "Mail",
    width: 240,
    editable: true,
    headerAlign: "center",
    align: "center",
  },
];

export default function DataGridDemo({ rows, onRowSelect }) {
  const handleRowClick = (params) => {
    onRowSelect(params.id);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        mt: 3,
        mb: 3,
        ml: 4,
      }}
    >
      <Paper
        elevation={2}
        sx={{
          width: "92%", // ⬅️ slightly wider than 85%
          maxWidth: 760, // ⬅️ increased max width
          borderRadius: 2,
          bgcolor: "#fff",
          p: 2,
          boxShadow: 2,
        }}
      >
        <Typography
          variant="h6"
          component="div"
          color="primary"
          fontWeight={600}
          textAlign="center"
          mb={2}
        >
          👥 Employee Added
        </Typography>

        <Box sx={{ height: 300 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            onRowClick={handleRowClick}
            checkboxSelection
            disableRowSelectionOnClick
            sx={{
              ".MuiDataGrid-columnHeaders": {
                backgroundColor: "#e3f2fd",
              },
              ".MuiDataGrid-row:hover": {
                backgroundColor: "#f1f8ff",
              },
              fontSize: "0.875rem",
            }}
          />
        </Box>
      </Paper>
    </Box>
  );
}
