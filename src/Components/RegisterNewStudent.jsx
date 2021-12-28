import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { Form, Input, Button } from "antd";
import { Add_New_Stdent } from "./../Redux/Actions";

const RegisterNewStudent = ({ history }) => {
  const [StudentName, setStudentName] = useState("");
  const [StudentFatherName, setStudentFatherName] = useState("");
  const [StudentRollnumber, setStudentRollnumber] = useState("");

  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log("Success:", values);
    const studentObj = {
      RollNumber: StudentRollnumber,
      StudentName: StudentName,
      FatherName: StudentFatherName,
      InitialNoOfPresences: 0,
      InitialNoOfAbsences: 0,
    };

    console.log("Student data is  :", studentObj);
    try {
      dispatch(Add_New_Stdent(studentObj));
      history.push("/");
      resetAllValues();
      toast.success("Student Added Successfully ...");
    } catch (error) {
      toast.error("Something Went Wrong While Adding a Student ...");
      console.log("Adding error message : ", error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const resetAllValues = () => {
    setStudentRollnumber("");
    setStudentName("");
    setStudentFatherName("");
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 rounded shadow col-md-8 col-sm-10 bg- py-5">
          <h4 className="text-center" style={{ fontFamily: "koHo" }}>
            Fill The Form To Righter a New Student
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

            <Form.Item wrapperCol={{ offset: 7, span: 16 }}>
              <Button type="primary" htmlType="submit" className="px-5">
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegisterNewStudent;
