import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { db, mongoose } from "../database/connection";
import LeksakModel from '../database/models/leksak.model';
const leksakDelete: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const id = (req.query.id || (req.body && req.body.id));
    if (id) {
        try {
            await LeksakModel.findByIdAndDelete(id);
            context.res.status(200).json(true);
        }
        catch (error) {
            context.res.status(200).json(error);
        }
    }
    context.res.status(200).json("id not provided");

};

export default leksakDelete;