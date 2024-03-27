// To parse this data:
//
//   import { Convert, AllMealsResponse } from "./file";
//
//   const allMealsResponse = Convert.toAllMealsResponse(json);

export interface AllMealsResponse {
    categories: Category[];
}

export interface Category {
    idCategory:             string;
    strCategory:            string;
    strCategoryThumb:       string;
    strCategoryDescription: string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toAllMealsResponse(json: string): AllMealsResponse {
        return JSON.parse(json);
    }

    public static allMealsResponseToJson(value: AllMealsResponse): string {
        return JSON.stringify(value);
    }
}
