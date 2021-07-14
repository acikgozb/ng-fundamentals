export class ObjectUtils {

  public static getValueByIndex(index: string[], object: any) {
    let result: any = null;

    index.forEach((key: string, keyIndex: number) => {
      const targetObjectToIndex = keyIndex === 0 ? object : result;

      result = targetObjectToIndex[key];
    });

    return result;
  }
}
