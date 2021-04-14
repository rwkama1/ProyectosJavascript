import { Data } from "./Clases/Data";
import { IData } from "./Interfaces/IData";
export class Fabrica
{
    public static getData(): IData {
        return (Data.getInstance());
    }
}
