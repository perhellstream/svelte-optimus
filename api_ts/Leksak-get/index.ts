import { AzureFunction, Context, HttpRequest } from "@azure/functions"

import {db, mongoose} from "../database/connection";
import LeksakModel  from '../database/models/leksak.model';
const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('leksak/get running');
    context.log(LeksakModel);
    const leksaker = await LeksakModel.find();
   
    
    context.res.status(200).json(leksaker);

};

export default httpTrigger;