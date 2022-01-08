import React from "react";
import { Button } from "react-bootstrap";
import XLSX from "xlsx";

function ExportToExcel({ dataSheet, nameButton, nameSheet, nameFile }) {
  //Xuất excel
  const exportToExcel = () => {
    //Tạo các sheet data
    const workSheet = XLSX.utils.json_to_sheet(dataSheet);
    //Tạo workBook mới
    const workBook = XLSX.utils.book_new();
    //Tạo file excel với sheet tên "students"
    XLSX.utils.book_append_sheet(workBook, workSheet, `${nameSheet}`);
    //Buffer
    let buf = XLSX.write(workBook, { bookType: "xlsx", type: "buffer" });
    //Binary,string
    XLSX.write(workBook, { bookType: "xlsx", type: "binary" });
    //Download file xlsx tên StudentsData.xlsx
    XLSX.writeFile(workBook, `${nameFile}.xlsx`);
  };
  return (
    <>
      <Button variant="success" onClick={exportToExcel}>
        Xuất file {nameButton}
      </Button>
    </>
  );
}

export default ExportToExcel;
