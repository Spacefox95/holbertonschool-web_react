import { deleteRow, insertRow, updateRow } from "./crud";
import { RowId, RowElement } from "interface";

export function insertRow(row: RowElement): RowId;

export function deleteRow(rowId: RowId): void;

export function updateRow(rowId: RowId, row: RowElement): RowId;
