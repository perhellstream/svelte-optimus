import {Document } from 'mongoose';
interface IToy extends Document{
    id: string;
    name: string;
}
export default IToy;