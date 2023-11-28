import components from "./components";
import paths from "./paths";
import schemas from "./schemas";

export default {
  openapi: "3.0.0",
  info: {
    title: "COMEX - Plataforma de comércio exterior Prática Klimaquip API",
    description: "...",
    version: "1.0.0",
    contact: {
      name: "Digital Endeavors",
      email: "de@praticabr.com",
    },
  },
  servers: [
    {
      url: "http://localhost:5050/api",
      description: "Servidor local",
    },
    {
      url: "http://18.228.151.100:5050/api",
      description: "Servidor de teste",
    },
  ],
  tags: [
    {
      name: "Account",
      description: "APIs relacionadas a Account",
    },
  ],
  paths,
  schemas,
  components,
};
