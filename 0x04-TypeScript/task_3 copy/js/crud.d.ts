import { RowID, RowElement } from './interface';

declare module 'crud' {
    export function insertRow(row: RowElement): RowID;
    export function deleteRow(RowId: RowID): void;
    export function updateRow(RowId: RowID, row: RowElement): RowID;
}