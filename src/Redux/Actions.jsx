import * as types from "./ActionTypes";
import axios from "axios";

export const Fetch_Students_Data = () => {
  return async function (dispatch) {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => {
        dispatch({
          type: types.FETCH_STUDENTS_DATA,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log("Fetching Data Error : ", error);
      });
  };
};

export const Delete_Student_Data = (id) => {
  return async function (dispatch) {
    axios
      .delete(`http://localhost:3000/posts/${id}`)
      .then((res) => {
        dispatch({
          type: types.DELETE_STUDENT_DATA,
        });
        dispatch(Fetch_Students_Data());
      })
      .catch((error) => {
        console.log("Student Deleted Error : ", error);
      });
  };
};

export const Add_New_Stdent = (studentObj) => {
  return async function (dispatch) {
    axios
      .post("http://localhost:3000/posts", studentObj)
      .then((res) => {
        dispatch({
          type: types.ADD_NEW_STUDENT,
        });
        dispatch(Fetch_Students_Data());
      })
      .catch((error) => {
        console.log("Adding New Student Error", error);
      });
  };
};

export const Student_Is_Present = (studentId, studentObj) => {
  return async function (dispatch) {
    axios
      .put(`http://localhost:3000/posts/${studentId}`, studentObj)
      .then((res) => {
        dispatch({
          type: types.STUDENT_IS_PRESENT,
        });
        dispatch(Fetch_Students_Data());
      })
      .catch((error) => {
        console.log("Error While Presenting a Student : ", error);
      });
  };
};

export const Student_Is_Absent = (studentId, studentObj) => {
  return async function (dispatch) {
    axios
      .put(`http://localhost:3000/posts/${studentId}`, studentObj)
      .then((res) => {
        dispatch({
          type: types.STUDENT_IS_ABSENT,
        });
      })
      .catch((error) => {
        console.log("Error While Absenting a Student : ", error);
      });
  };
};

export const Fetch_Single_Student_Data = (studentId) => {
  return async function (dispatch) {
    axios
      .get(`http://localhost:3000/posts/${studentId}`)
      .then((res) => {
        dispatch({
          type: types.FETCH_SINGLE_STUDENT_DATA,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log("Error While Feching a Single Student Data", error);
      });
  };
};
