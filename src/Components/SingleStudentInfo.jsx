import { Card, Avatar, List } from "antd";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Fetch_Single_Student_Data } from "../Redux/Actions";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

const SingleStudentInfo = ({ match }) => {
  const [loading, setLoading] = useState(true);

  const { student } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(Fetch_Single_Student_Data(match.params.id)).finally(() => {
      setLoading(false);
    });
  }, [dispatch, match.params.id]);

  const data = [
    `Roll.Number : ${student.RollNumber}`,
    `S/D of : ${student.FatherName}`,
    `No. of Presents : ${student.InitialNoOfPresences}`,
    `No. of Absents : ${student.InitialNoOfAbsences}`,
  ];

  return (
    <>
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <Card
              style={{ width: 300 }}
              loading={loading}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={student.StudentName}
                description="This is the description"
              />
              <List
                size="small"
                className="mt-2"
                bordered
                dataSource={data}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleStudentInfo;
