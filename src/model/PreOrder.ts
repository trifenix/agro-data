/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { DocumentLocal } from './DocumentLocal';
import { PreOrderType }   from   './../extra/PreOrderType';

export interface PreOrder extends DocumentLocal {
    id: string;
    clientId: string;
    name: string;
    orderFolderId: string;
    preOrderType: PreOrderType;
    barrackIds: string[];
}
