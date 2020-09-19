import axios from "axios";

import createProductsService from "./Products";

export default {
  Products: createProductsService({ network: axios }),
};
