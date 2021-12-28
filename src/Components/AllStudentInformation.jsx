import React from "react";
import { Table } from "antd";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Badge } from "react-bootstrap";
import { Fetch_Students_Data } from "./../Redux/Actions";

const AllStudentInformation = () => {
  const [pageSize, setPageSize] = useState(5);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const { students } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(Fetch_Students_Data()).finally(() => {
      setLoading(false);
    });
  }, [dispatch]);

  const columns = [
    {
      key: "1",
      title: "Roll No.",
      dataIndex: "RollNumber",
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "StudentName",
    },
    {
      key: "3",
      title: "No. of Presents",
      render: (text, record) => (
        <Button variant="primary" className="btn-sm">
          Presents{" "}
          <Badge className="bg-white text-dark">
            {record.InitialNoOfPresences}
          </Badge>
        </Button>
      ),
    },
    {
      key: "4",
      title: "No. of Absents",
      render: (text, record) => (
        <Button variant="primary" className="btn-sm">
          Absents{" "}
          <Badge className="bg-white text-dark">
            {record.InitialNoOfAbsences}
          </Badge>
        </Button>
      ),
    },
    {
      key: "4",
      title: "Total Classes",
      render: (text, record) => (
        <Button variant="primary" className="btn-sm">
          Total Classes{" "}
          <Badge className="bg-white text-dark">
            {record.InitialNoOfAbsences + record.InitialNoOfPresences}
          </Badge>
        </Button>
      ),
    },
    {
      key: "4",
      title: "Attendance Percentage",
      render: (text, record) => (
        <Button variant="primary" className="btn-sm">
          Attandance %{" "}
          <Badge className="bg-white text-dark">
            {parseFloat(
              (record.InitialNoOfPresences /
                (record.InitialNoOfPresences + record.InitialNoOfAbsences)) *
                100
            ).toFixed(2)}
            %
          </Badge>
        </Button>
      ),
    },
  ];

  return (
    <>
      <div className="container">
        <div className="row" style={{ fontFamily: "koHo" }}>
          <div className="col">
            <h3 className="text-center mt-3 shadow py-2 rounded-3">
              BSCS 5<sup>th</sup> Self ( University Of Sargodha )
            </h3>
            <h3 className="text-center mb-2 mt-2 shadow rounded-3">
              Attandance Sheet
            </h3>
            <hr className="pt-1 mt-3 mb-4" />
          </div>
        </div>
      </div>
      <Table
        loading={loading}
        columns={columns}
        dataSource={students}
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          onChange: (currentPage, pageSize) => {
            setCurrentPage(currentPage);
            setPageSize(pageSize);
          },
        }}
      />
    </>
  );
};

export default AllStudentInformation;
