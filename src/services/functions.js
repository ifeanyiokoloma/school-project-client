import axios from "axios";
import { enqueueSnackbar } from "notistack";

export const fetchStudent = async ({ params }) => {
  try {
    const { data } = await axios({
      method: "get",
      url: `https://school-project-server.onrender.com/students/${params.regno}`,
    });
    return data;
  } catch (err) {
    console.log(err);
    enqueueSnackbar("There was an error, try again", "error");
  }
};

export const updateStudent = async (data, param) => {
  try {
    const resp = await axios({
      method: "patch",
      url: `https://school-project-server.onrender.com/students/${param}`,
      data,
    });
    console.log(resp);
    return resp;
  } catch (err) {
    console.log(err);
    enqueueSnackbar("There was an error, try again", "error");
  }
};

export const deleteStudent = async param => {
  try {
    await axios({
      method: "delete",
      url: `https://school-project-server.onrender.com/students/${param}`,
    });
  } catch (err) {
    console.log(err);
    enqueueSnackbar("There was an error, try again", "error");
  }
};
