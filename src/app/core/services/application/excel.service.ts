// import { Injectable } from '@angular/core';
// import * as moment from 'moment';
// import * as FileSaver from 'file-saver';
// import * as XLSX from 'xlsx';

// export interface ExportFileType {
//   extension: XLSX.BookType;
//   type: string;
// }

// export const CSV_FILE: ExportFileType = {
//   extension: 'csv',
//   type: 'text/csv',
// };
// export const ODS_FILE: ExportFileType = {
//   extension: 'ods',
//   type: 'application/vnd.oasis.opendocument.spreadsheet',
// };
// export const XLS_FILE: ExportFileType = {
//   extension: 'xls',
//   type: 'application/vnd.ms-excel',
// };
// export const XLSX_FILE: ExportFileType = {
//   extension: 'xlsx',
//   type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8',
// };

// const DEFAULT_FILE = XLS_FILE;

// @Injectable()
// export class ExcelService {
//   /**
//    * Exports data as csv file.
//    * @param {any[]} json
//    * @param {string} fileName
//    */
//   exportAsCsvFile(json: any[], fileName?: string) {
//     this.exportFile(json, CSV_FILE, fileName);
//   }

//   /**
//    * Exports data as ods file.
//    * @param {any[]} json
//    * @param {string} fileName
//    */
//   exportAsOdsFile(json: any[], fileName?: string) {
//     this.exportFile(json, ODS_FILE, fileName);
//   }

//   /**
//    * Exports data as xls file.
//    * @param {any[]} json
//    * @param {string} fileName
//    */
//   exportAsXlsFile(json: any[], fileName?: string) {
//     this.exportFile(json, XLS_FILE, fileName);
//   }

//   /**
//    * Exports data as xlsx file.
//    * @param {any[]} json
//    * @param {string} fileName
//    */
//   exportAsXlsxFile(json: any[], fileName?: string) {
//     this.exportFile(json, XLSX_FILE, fileName);
//   }

//   /**
//    * Creates data for exporting file.
//    * @param {any[]} json
//    * @param {ExportFileType} fileType
//    * @param {string} fileName
//    */
//   exportFile(json: any[], fileType?: ExportFileType | null, fileName?: string) {
//     fileType = this.checkFileType(fileType);

//     const fullFileName: string = this.getFullFileName(fileType, fileName);
//     const sheets: { [sheet: string]: XLSX.WorkSheet } = {};

//     sheets[fullFileName] = XLSX.utils.json_to_sheet(json);

//     const workBook: XLSX.WorkBook = {
//       Sheets: sheets,
//       SheetNames: [fullFileName],
//     };
//     const writingOptions: XLSX.WritingOptions = {
//       bookType: fileType.extension,
//       type: 'array',
//     };

//     workBook.Props = {
//       Author: 'liveforce.co',
//       CreatedDate: new Date(),
//       LastAuthor: 'liveforce.co',
//       ModifiedDate: new Date(),
//       Title: this.getFileName(fileName),
//     };

//     const fileBuffer = XLSX.write(workBook, writingOptions);

//     this.saveAsFile(fileBuffer, fileType, fullFileName);
//   }

//   /**
//    * Exports file by extension.
//    * @param {any[]} json
//    * @param {string} extension
//    * @param {string} fileName
//    */
//   exportFileByExtension(json: any[], extension: string | null, fileName?: string) {
//     switch (extension) {
//       case '.' + CSV_FILE.extension:
//       case CSV_FILE.extension:
//         this.exportAsCsvFile(json, fileName);
//         break;
//       case '.' + ODS_FILE.extension:
//       case ODS_FILE.extension:
//         this.exportAsOdsFile(json, fileName);
//         break;
//       case '.' + XLS_FILE.extension:
//       case XLS_FILE.extension:
//         this.exportAsXlsFile(json, fileName);
//         break;
//       case '.' + XLSX_FILE.extension:
//       case XLSX_FILE.extension:
//         this.exportAsXlsxFile(json, fileName);
//         break;
//       default:
//         this.exportAsXlsFile(json, fileName);
//         break;
//     }
//   }

//   /**
//    * Checks is file type is correct.
//    * @param {ExportFileType} fileType
//    * @returns {ExportFileType}
//    */
//   private checkFileType(fileType?: ExportFileType) {
//     return fileType
//       ? fileType
//       : DEFAULT_FILE;
//   }

//   /**
//    * Checks and returns correct file name.
//    * @param {string} fileName
//    * @returns {string}
//    */
//   private getFileName(fileName?: string): string {
//     return fileName
//       ? fileName
//       : 'export_' + moment().format('YYYYMMDD[T]HHmmss');
//   }

//   /**
//    * Returns full file name with extension.
//    * @param {ExportFileType} fileType
//    * @param {string} fileName
//    * @returns {string}
//    */
//   private getFullFileName(fileType: ExportFileType, fileName?: string): string {
//     return this.getFileName(fileName) + '.' + fileType.extension;
//   }

//   /**
//    * Save file.
//    * @param buffer
//    * @param {ExportFileType} fileType
//    * @param {string} fileName
//    */
//   private saveAsFile(buffer: any, fileType: ExportFileType, fileName: string): void {
//     const blob: Blob = new Blob([buffer], { type: fileType.type });

//     FileSaver.saveAs(blob, fileName);
//   }
// }
