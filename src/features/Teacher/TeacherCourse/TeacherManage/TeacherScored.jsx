import userApi from "apis/userApi";
import React from "react";
import { useEffect } from "react";
import { Tab, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

function TeacherScored() {
  const { id } = useParams();

  useEffect(() => {
    getGrades();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getGrades = async () => {
    const params = { classCode: id };
    try {
      const response = await userApi.get_TeacherGrades(params);
      console.log(response);
      const { result, structs } = response;
    } catch (error) {
      console.log("lỗi rồi", { error });
    }
  };
  return (
    <div>
      <Table bordered hover striped>
        <thead>
          <tr>
            <th>Test</th>
            <th>Test</th>
            <th>Test</th>
            <th>Test</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Table>
                <tr>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                </tr>
              </Table>
            </td>

            <td>
              <Table>
                <tr>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                </tr>
              </Table>
            </td>

            <td>
              <Table>
                <tr>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                </tr>
              </Table>
            </td>
            <td>
              <Table>
                <tr>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                </tr>
              </Table>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
export default TeacherScored;
