import axios from "axios";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    axios.delete("/sessions.json").then((response) => {
      console.log(response);
      localStorage.removeItem("email");
      localStorage.removeItem("admin");
      window.location.href = "/";
    });
  };

  return (
    <a href="#" onClick={handleClick}>
      Logout
    </a>
  );
}
