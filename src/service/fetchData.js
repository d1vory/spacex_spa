export default class FetchData {

  baseUrl = 'https://api.spacexdata.com/v4/'

  getResource = async (url) => {
      const res = await fetch(url)

      if (!res.ok){
        throw new Error('failure  ${res.status}')
      }
      let kek = await res.json();
      console.log(kek);
      return kek
  }

  getRocket = async () => await this.getResource(this.baseUrl + 'rockets');

  getLaunches = async () => await this.getResource(this.baseUrl + 'launches/past');

  getCompany = async () => await this.getResource(this.baseUrl + 'company');

}
