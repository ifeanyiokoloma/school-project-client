import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";
import Student from "./Student";
import DrawerAppBar from "../components/Navbar";

function StudentRecord() {
  return (
    <Container my={5}>
      <DrawerAppBar />
      <h1>Student Registration Detail</h1>
      <Student />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: "100%" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Resume</TableCell>
              <TableCell>Exit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>Empty</TableCell>
              <TableCell>Empty</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default StudentRecord;
