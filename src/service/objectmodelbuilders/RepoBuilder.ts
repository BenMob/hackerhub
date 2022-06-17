/**
 * This class is in charge of building a repository object
 */

import Language from "../objectmodels/Language";
import RepoStats from "../objectmodels/RepoStats";
import AbstractRepoBuilder from "./AbstractRepoBuilder";

class RepoBuilder extends AbstractRepoBuilder{

    constructor(){
        super()
    }

    /**
     * Assigns a few sirst attributes
     * @returns 
     */
    protected buildBasicInfo(): AbstractRepoBuilder {
        
        this.objectModel.setOwner(this.data.owner.login)
        .setOwnerAvatarURL(this.data.owner.avatar_url)
        .setName(this.data.name)
        .setDescription(this.data.description)
        .setURL(this.data.html_url)
        .setWebsiteURL(this.data.homepage);

        return this;
    }

    /**
     * Creats the creation date Object
     * @returns this
     */
    protected buildCreationDate(): AbstractRepoBuilder {
        this.objectModel.setCreationDate(this.data.created_at);
        return this;
    }

    /**
     *  Creats the push date Object
     * @returns this
     */
    protected buildPushDate(): AbstractRepoBuilder {
        this.objectModel.setPushDate(this.data.pushed_at);
        return this;
    }

    /**
     *  Creats the update date Object
     * @returns this
     */
    protected buildUpdateDate(): AbstractRepoBuilder {
        this.objectModel.setLastUpdateDate(this.data.updated_at);
        return this;
    }

    /**
     * Builds Languages array
     * @returns this
     */
    protected buildLanguages(): AbstractRepoBuilder {
        this.objectModel.setLanguages(this.data.languages.map((languageObject: { name: String; lineCount: number; }) => {
                const language : Language = new Language(languageObject.name)
                language.setLineCount(languageObject.lineCount);
                return language;
            })
        );
        return this;
    }

    /**
     * Builds Repo stats
     */
    protected buildStats(): AbstractRepoBuilder {
        const repoStats: RepoStats = new RepoStats();
        repoStats.setOwnerId(this.objectModel.getId()!);
        repoStats.setSize(this.data.size)
            .setWatcherCount(this.data.watchers_count)
            .setForkCount(this.data.forks_count)
            .setOpenIssueCount(this.data.open_issues_count)
            .setLanguageCount(this.objectModel.getLanguages().length!)
        
        this.objectModel.setRepoStats(repoStats);
        return this;
    }
}

export default RepoBuilder;