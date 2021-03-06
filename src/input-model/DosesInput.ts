/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { LocalBase } from './LocalBase';
import { WaitingHarvestInput } from './WaitingHarvestInput';

export interface DosesInput extends LocalBase {
    idProduct: string;
    idVarieties: string[];
    idSpecies: string[];
    idsApplicationTarget: string[];
    hoursToReEntryToBarrack: number;
    applicationDaysInterval: number;
    numberOfSequentialApplication: number;
    wettingRecommendedByHectares: number;
    waitingToHarvest: WaitingHarvestInput[];
    dosesQuantityMin: number;
    dosesQuantityMax: number;
    waitingDaysLabel: number;
    default: boolean;
    active: boolean;
    clientId: string;
}
