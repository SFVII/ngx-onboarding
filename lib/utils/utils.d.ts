export declare function fieldWidth(type: string, length: number, index: number): "100%" | "50%" | "33%" | "25%";
export declare function getIntesectFilterBy(groupResult: any[], textResult: any[], key: string): any;
export declare const filterParse: (filterConfig: any, active?: string) => {
    filterData: any;
    filterDate: any;
} | {
    filterData?: undefined;
    filterDate?: undefined;
};
