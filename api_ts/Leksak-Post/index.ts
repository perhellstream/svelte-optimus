import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { db, mongoose } from "../database/connection";
import LeksakModel from '../database/models/leksak.model';
const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const name = (req.query.name || (req.body && req.body.name));
    context.log(name);
    if (name) {
        const leksak = {
            _id: mongoose.Types.ObjectId(),
            name: name
        };
        try {
            await LeksakModel.create(leksak);
            context.res.status(200).json(leksak);
        }
        catch (error) {
            context.res.status(500).json(false);
        }
    }
    context.res.status(500).json(false);

};

export default httpTrigger;