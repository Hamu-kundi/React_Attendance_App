import { Table } from "antd";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Delete_Student_Data,
  Fetch_Students_Data,
  Student_Is_Absent,
  Student_Is_Present,
} from "./../Redux/Actions";

function Home() {
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

  const handleStudentDelete = (studentId) => {
    dispatch(Delete_Student_Data(studentId));
  };

  const handlePresentStudent = (student) => {
    const presentStudentObj = {
      RollNumber: student.RollNumber,
      StudentName: student.StudentName,
      FatherName: student.FatherName,
      InitialNoOfPresences: student.InitialNoOfPresences + 1,
      InitialNoOfAbsences: student.InitialNoOfAbsences,
    };

    try {
      dispatch(Student_Is_Present(student.id, presentStudentObj));
      toast.info(student.StudentName + " Is present...");
    } catch (error) {
      toast.error("Something went wrong while present...");
    }
  };

  const handleAbsentStudent = (student) => {
    const presentStudentObj = {
      RollNumber: student.RollNumber,
      StudentName: student.StudentName,
      FatherName: student.FatherName,
      InitialNoOfPresences: student.InitialNoOfPresences,
      InitialNoOfAbsences: student.InitialNoOfAbsences + 1,
    };

    try {
      dispatch(Student_Is_Absent(student.id, presentStudentObj));
      toast.info(student.StudentName + " Is Absent...");
    } catch (error) {
      toast.error("Something went wrong while Absent...");
    }
  };

  const columns = [
    {
      key: "1",
      title: "Roll no.",
      dataIndex: "RollNumber",
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "StudentName",
    },
    {
      key: "3",
      title: "",
      render: (text, student) => (
        <button
          onClick={() => handlePresentStudent(student)}
          className="btn btn-warning btn-sm px-3s"
        >
          Present
        </button>
      ),
    },
    {
      key: "4",
      title: "",
      render: (text, student) => (
        <button
          onClick={() => handleAbsentStudent(student)}
          className="btn btn-danger btn-sm px-3s"
        >
          Absent
        </button>
      ),
    },
    {
      key: "5",
      title: "",
      render: (text, record) => (
        <button
          onClick={() => handleStudentDelete(record.id)}
          className="btn btn-danger btn-sm px-3s"
        >
          Delete
        </button>
      ),
    },
    {
      key: "6",
      title: "",
      render: (text, student) => (
        <Link
          to={`/edit_student/${student.id}`}
          className="btn btn-primary btn-sm px-3s"
        >
          Edit
        </Link>
      ),
    },
    {
      key: "7",
      title: "",
      render: (text, student) => (
        <Link
          to={`/single_stu_info/${student.id}`}
          className="btn btn-info btn-sm px-3s"
        >
          view info
        </Link>
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
        columns={columns}
        dataSource={students}
        loading={loading}
        rowKey="id"
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
}

export default Home;
