import database from "../../../../infra/database.js";

function status(request, response) {
  response.status(200).json({ conexao: "ativa" });
}

export default status;
