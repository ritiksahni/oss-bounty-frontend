import axios from "axios";

function Login() {
    axios.get(process.env.EXPRESS_SERVER_URL + "/api/auth/login");
}

function Logout() {
    axios.get(process.env.EXPRESS_SERVER_URL + "/api/auth/logout");
    // localStorage.removeItem("user");
}

module.exports = { Logout };
