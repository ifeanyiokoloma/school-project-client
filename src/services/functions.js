import axios from "axios";
import api from "./axios";

export const asyncWrapper = async (asyncFunction, params = null) => {
  try {
    const data = await asyncFunction();
    return [data, null];
  } catch (error) {
    return [null, error];
  }
};

export const fetchStudent = async ({ params }) => {
  const { data } = await axios({
    method: "get",
    url: `https://school-project-server.onrender.com/students/${params.faceID}`,
  }).catch(err => {
    console.log(err);
  });
  console.log(data);
  return data;
};

export const updateStudent = (data, param) => {
  const resp = api.patch(`/students/${param}`, data);
  return resp;
};

export const deleteStudent = param => {
  axios({
    method: "delete",
    url: `https://school-project-server.onrender.com/students/${param}`,
  });
};

export const createStudent = (data) => {
  const resp = api.post("/register", data);
  return resp;
};

export const getInputVals = e => {
  e.preventDefault();

  const target = e.target;
  const name = target.name;
  const value = target.value;

  return { [name]: value };
};

export const getFormVals = e => {
  let obj = {};
  const form = e.target;
  for (const input of form.querySelectorAll("input")) {
    obj = { ...obj, [input.name]: input.value };
  }
  return obj;
};
