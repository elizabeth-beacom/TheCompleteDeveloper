/* STUB
const sum = (data: number[]): number => 999;
*/

/* FAKE
const sum = (data: number[]): number => {
  return data[0] + data[1];
};
*/

/* MOCK */
type resultMap = {
    [key: string]: number;
}

const results : resultMap= {
    "0 + 0": 0,
    "0 + 1": 1,
    "1 + 0": 1,
    "1 + 1": 2,
    "2 + 1": 3
};

const sum = (data: number[]): number => {
    return results[data.join(" + ")];
}

export {sum};