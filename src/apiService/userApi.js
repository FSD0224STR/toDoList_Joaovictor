


const login = async (data) => {
  console.log("esto es data de login", data);
  const response = await fetch("http://localhost:3000/user/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {"Content-Type": "application/json"},
  });
  return await response.json();
};

//realizar 

export default { login };
