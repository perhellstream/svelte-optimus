import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { db, mongoose } from "../database/connection";
import LeksakModel from '../database/models/leksak.model';
const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const id = (req.query.id || (req.body && req.body.id));
    const name = (req.query.name || (req.body && req.body.name));
    if (id) {
        try {
            const existingLeksak = await LeksakModel.findById(id);
            if (existingLeksak) {
                existingLeksak.name = name;
                await LeksakModel.findByIdAndUpdate(id, existingLeksak);
                context.res.status(200).json(true);
            }
        }
        catch (error) {
            context.res.status(200).json(error);
        }
    }
    context.res.status(200).json("name not provided");

};

export default httpTrigger;