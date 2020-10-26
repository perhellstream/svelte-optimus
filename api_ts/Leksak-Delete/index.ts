import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { db, mongoose } from "../database/connection";
import LeksakModel from '../database/models/leksak.model';
const leksakDelete: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('leksakDelete initiated.');
    context.log(`query id: ${context.bindingData.id}`)
    const id = context.bindingData.id;
    if (id) {
        context.log("trying to detele "+ id);
        try {
            await LeksakModel.findByIdAndDelete(id);
            context.res.status(200).json(true);
        }
        catch (error) {
            context.res.status(500).json(error);
        }
    }
    context.res.status(500).json(false);

};

export default leksakDelete;