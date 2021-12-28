import axios from "axios";
import { toast } from "react-toastify";
import { Form, Input, Button } from "antd";
import { useState, useEffect } from "react";

const EditStudent = ({ match, history }) => {
  const [StudentName, setStudentName] = useState("");
  const [StudentRollnumber, setStudentRollnumber] = useState("");
  const [StudentFatherName, setStudentFatherName] = useState("");
  const [InitialNoOfAbsents, setInitialNoOfAbsents] = useState("");
  const [InitialNoOfPresents, setInitialNoOfPresents] = useState("");

  const onFinish = (values) => {
    const editStudentObj = {
      StudentName: StudentName,
      FatherName: StudentFatherName,
      RollNumber: StudentRollnumber,
      InitialNoOfAbsences: parseInt(InitialNoOfAbsents),
      InitialNoOfPresences: parseInt(InitialNoOfPresents),
    };

    try {
      axios.put(
        `http://localhost:3000/posts/${match.params.id}`,
        editStudentObj
      );
      history.push("/");
      toast.success("Edited Successfully...");
      resetAllValues();
    } catch (error) {
      toast.error("Something went wrong while editing a student...");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    axios.get(`http://localhost:3000/posts/${match.params.id}`).then((res) => {
      setStudentName(res.data.StudentName);
      setStudentFatherName(res.data.FatherName);
      setStudentRollnumber(res.data.RollNumber);
      setInitialNoOfAbsents(res.data.InitialNoOfAbsences);
      setInitialNoOfPresents(res.data.InitialNoOfPresences);
    });
  }, [match.params.id]);

  const resetAllValues = () => {
    setStudentName("");
    setStudentFatherName("");
    setStudentRollnumber("");
    setInitialNoOfAbsents("");
    setInitialNoOfPresents("");
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 rounded shadow col-md-8 col-sm-10 bg- py-5">
          <h4 className="text-center" style={{ fontFamily: "koHo" }}>
            Edit a Student whose id is : {match.params.id}
          </h4>
          <hr className="py-1 rounded bg-info mb-4" />
          <Form
            name="basic"
            labelCol={{ span: 7 }}
            wrapperCol={{ span: 13 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Roll Number"
              name="rollno."
              value={StudentRollnumber}
              onChange={(e) => setStudentRollnumber(e.target.value)}
              rules={[
                { required: true, message: "Please input your Roll number!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Student Name"
              name="studentname"
              value={StudentName}
              onChange={(e) => setStudentName(e.target.value)}
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Father Name"
              name="fathername"
              value={StudentFatherName}
              onChange={(e) => setStudentFatherName(e.target.value)}
              rules={[
                { required: true, message: "Please input your Father Name!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="No. of Presents"
              name="NoOfPresents"
              value={InitialNoOfPresents}
              onChange={(e) => setInitialNoOfPresents(e.target.value)}
              rules={[
                { required: true, message: "Please input no. of Presents!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="No. of Absents"
              name="NoOfAbsents"
              value={InitialNoOfAbsents}
              onChange={(e) => setInitialNoOfAbsents(e.target.value)}
              rules={[
                { required: true, message: "Please input no. of Absents!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 7, span: 16 }}>
              <Button type="primary" htmlType="submit" className="px-5">
                Edit Student
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditStudent;
