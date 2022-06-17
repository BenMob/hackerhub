/** 
 * This class is in charge of building an Account object 
 */

import AbstractAccountBuilder from "./AbstractAccountBuilder";
import Repo from "../objectmodels/Repo";
import RepoBuilder from "./RepoBuilder";
import AccountStats from "../objectmodels/AccountStats";

class AccountBuilder extends AbstractAccountBuilder{
    constructor(){
        super()
    }

    protected buildBasicInfo(): AbstractAccountBuilder {
        this.objectModel.setUsername(this.data.login)
        .setUserFullName(this.data.name) 
        .setAvatarURL(this.data.avatar_url)
        .setCompany(this.data.company)
        .setBlogURL(this.data.blog)
        .setCreationDate(this.data.created_at)
        .setLastUpdateDate(this.data.updated_at)

        return this
    }

    protected buildPublicRepos(): AbstractAccountBuilder {
        
        let repos : Array<Repo> = [];
        const repobuilder : RepoBuilder = new RepoBuilder();

        for(let i = 0; i < this.data.repos.length; i++){
            const repo : Repo = repobuilder.from(this.data.repos[i]).buildObjectModel() as Repo;
            repos.push(repo);
        }
       
        this.objectModel.setPublicRepos(repos);
        return this;
        
    }

    protected buildStats(): AbstractAccountBuilder {
        let stats = new AccountStats();
        stats.setPublicRepoCount(this.data.public_repos);
        stats.setPublicGistCount(this.data.public_gists);
        stats.setFollowerCount(this.data.followers);
        stats.setFollowingCount(this.data.following);
        this.objectModel.setAccountStats(stats);

        return this;
    }
}

export default AccountBuilder