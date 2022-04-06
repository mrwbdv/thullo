import type { AxiosPromise } from "axios";
import { apiInstance } from "./base";

import { Board } from "../models";

const BASE_URL = "/boards";

export const getBoardsList = (): AxiosPromise<Board[]> => {
    return apiInstance.get(BASE_URL);
};
