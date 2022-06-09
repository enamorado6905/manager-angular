export interface IStatistics {
  _id?: string;
  year: number;
  months: [
    {
      month: number;
      days: [
        {
          day: number;
          dayW: number;
          TotalDay: number;
          TotalDeleteDay: number;
        }
      ];
      TotalMonth: number;
      TotalDeleteMonth: number;
    }
  ];
  TotalYear: number;
  TotalDeleteYear: number;
}
