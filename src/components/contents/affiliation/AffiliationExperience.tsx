import { convertYYYYMMDDToTimestamp } from "../util/Date";

export class AffiliationExperience {
  _startDate_yyyymmdd: string;
  _endDate_yyyymmdd: string;
  _startTimestamp: number;
  _endTimestamp: number;
  _title: string;
  _description: string;
  _isEnded = true;

  public get days() {
    return (this._endTimestamp - this._startTimestamp) / 1000 / 86400;
  }

  constructor(
    startDate_yyyymmdd: string,
    endDate_yyyymmdd: string,
    title: string,
    description: string,
  ) {
    this._startDate_yyyymmdd = startDate_yyyymmdd;
    this._endDate_yyyymmdd = endDate_yyyymmdd;
    this._title = title;
    this._description = description;

    this._startTimestamp = convertYYYYMMDDToTimestamp(startDate_yyyymmdd);
    this._endTimestamp = convertYYYYMMDDToTimestamp(endDate_yyyymmdd);
  }
}
