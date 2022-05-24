import axios from "axios";

const BASE_URL = "http://localhost:3600/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   .currentUser.accessToken;

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODBhMTEwODJmZDkxZTEwZWM3MmUyZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Mjc4MjkxMSwiZXhwIjoxNjUzMDQyMTExfQ.7gt0wuhKhLUuoHmpGSHesGfbnD7BkS7ryorvjI8vBRY";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
