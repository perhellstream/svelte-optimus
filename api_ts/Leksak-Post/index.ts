import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { db, mongoose } from "../database/connection";
import LeksakModel from '../database/models/leksak.model';
const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const name = (req.query.name || (req.body && req.body.name));
    if (name) {
        const leksak = {
            _id: mongoose.Types.ObjectId(),
            name: name
        };
        try {
            await LeksakModel.create(leksak);
            context.res.status(200).json(true);
        }
        catch (error) {
            context.res.status(200).json(error);
        }
    }
    context.res.status(200).json("name not provided");

};

export default httpTrigger;