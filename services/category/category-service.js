import { endpoints } from "../../api/endpoints";
import { Network } from "../../api/network";

export class CategoryService {

    static getCategories() {
        return Network.fetch(
            endpoints.getCategories.url,
            {
                method: endpoints.getCategories.method,
            }, false
        )

    }

}