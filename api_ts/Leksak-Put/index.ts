import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { db, mongoose } from "../database/connection";
import LeksakModel from '../database/models/leksak.model';
const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    context.log('leksakPut initiated.');
    context.log(`query id: ${context.bindingData.id}`)
    const id = context.bindingData.id;
    const name = (req.query.name || (req.body && req.body.name));
    context.log()
    if (id) {
        try {
            const existingLeksak = await LeksakModel.findById(id);
            if (existingLeksak) {
                existingLeksak.name = name;
                await LeksakModel.findByIdAndUpdate(id, existingLeksak);
                context.res.status(200).json(existingLeksak);
            }
        }
        catch (error) {
            context.res.status(500).json(error);
        }
    }
    context.res.status(500).json("name not provided");

};

export default httpTrigger;