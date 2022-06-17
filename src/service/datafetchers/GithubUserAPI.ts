import IDataFetcher from "../../abstraction/IDataFetcher";

class GithubUserAPI implements IDataFetcher {

  private usersEndpoint = "https://api.github.com/users/"

  public fetch(username: string, callBack: Function) : void{
    fetch(this.usersEndpoint + username)
    .then(response => response.json())
    .then(data => {
      callBack(data)
    })
    .catch((error) => {
      alert(error)
    })
  }
}

export default GithubUserAPI;