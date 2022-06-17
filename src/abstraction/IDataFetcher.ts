/**
 * Interface to implement in order to grab data from some source
 */

interface IDataFetcher{
  fetch(parameter: Object | string, callBack: Function): void;
}

export default IDataFetcher