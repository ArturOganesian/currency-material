import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoindages } from "features/slices/coindagesSlice";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import uniqid from "uniqid";
const columns = [
  { id: "currency", label: "Currency", minWidth: 100 },
  { id: "time", label: "Time", minWidth: 100 },
  {
    id: "value",
    label: "Value",

    minWidth: 100,
    align: "right",
  },
];

const AppTable = () => {
  const dispatch = useDispatch();
  const coindages = useSelector((state) => state.coindagesData.coindages);

  const currencyTypes = {
    currency: "USD",
    toFirst: "GBP",
    toSecond: "CHF",
    toThird: "EUR",
  };

  useEffect(() => {
    dispatch(getCoindages(currencyTypes));
  }, []);
  const data = coindages?.map((coindage) =>
    Object.entries(coindage.results).map((current) => {
      return {
        key: current[0],
        currency: current[0],
        time: new Date().toLocaleDateString(),
        value: current[1],
      };
    })
  );

  return (
    <>
      <Paper sx={{ width: "100%" }}>
        <TableContainer
          sx={{ maxHeight: 440, width: "100%", marginBottom: "2rem" }}
        >
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data[0]?.map((coindage) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={uniqid()}>
                    {columns.map((column) => {
                      const value = coindage[column.id];
                      return (
                        <TableCell key={uniqid()} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default AppTable;
