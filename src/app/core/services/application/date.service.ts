// import { Injectable } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';
// import { DateRangesOptions } from '@app/core/models/utils/date.utils';
// import * as moment from 'moment';

// interface DateRangeArgument {
//   current: boolean;
//   past: boolean;
//   future: boolean;
// }

// const DEFAULT_DATE_RANGE_ARGUMENT: DateRangeArgument = { current: true, past: true, future: true };

// /**
//  * Various date functions that cannot be put in the utils file.
//  */
// @Injectable()
// export class DateService {

//   constructor(
//     private t: TranslateService,
//   ) { }

//   /**
//    * Returns an array of date ranges that can be used in the date picker.
//    *
//    * With the options param you can set which ranges you are interested in.
//    */
//   getDateRangesOptions(options: Partial<DateRangeArgument> = DEFAULT_DATE_RANGE_ARGUMENT): DateRangesOptions {
//     options = {
//       ...DEFAULT_DATE_RANGE_ARGUMENT,
//       ...options,
//     };

//     const ranges: DateRangesOptions = {};

//     if (options.current) {
//       ranges[this.t.instant('Today')] = [moment(), moment()];
//       ranges[this.t.instant('This Week')] = [moment().startOf('week'), moment().endOf('week')];
//       ranges[this.t.instant('This Month')] = [moment().startOf('month'), moment().endOf('month')];
//     }

//     if (options.past) {
//       ranges[this.t.instant('Yesterday')] = [moment().subtract(1, 'days'), moment().subtract(1, 'days')];
//       ranges[this.t.instant('Last Week')] = [
//         moment().subtract(1, 'week').startOf('week'),
//         moment().subtract(1, 'week').endOf('week'),
//       ];
//       ranges[this.t.instant('Last Month')] = [
//         moment().subtract(1, 'month').startOf('month'),
//         moment().subtract(1, 'month').endOf('month'),
//       ];
//     }

//     if (options.future) {
//       ranges[this.t.instant('Tomorrow')] = [moment().add(1, 'days'), moment().add(1, 'days')];
//       ranges[this.t.instant('Next Week')] = [
//         moment().add(1, 'week').startOf('week'),
//         moment().add(1, 'week').endOf('week'),
//       ];
//       ranges[this.t.instant('Next Month')] = [
//         moment().add(1, 'month').startOf('month'),
//         moment().add(1, 'month').endOf('month'),
//       ];
//     }

//     return ranges;
//   }

// }
