import java from '../../assets/images/logos/java.svg'
import postgreSQL from '../../assets/images/logos/postgresql.svg'
import datadog from '../../assets/images/logos/datadog.svg'
import go from '../../assets/images/logos/golang.svg'
import gin from '../../assets/images/logos/gin.svg'
import git from '../../assets/images/logos/git.svg'
import github from '../../assets/images/logos/github.svg'
import jira from '../../assets/images/logos/jira.svg'
import kibana from '../../assets/images/logos/kibana.svg'
import spring from '../../assets/images/logos/spring.svg'
import sql from '../../assets/images/logos/sql.png'
import python from '../../assets/images/logos/python.svg'
import newRelic from '../../assets/images/logos/newrelic.svg'
import mongo from '../../assets/images/logos/mongodb.svg'
import redis from '../../assets/images/logos/redis.svg'
import heroku from '../../assets/images/logos/heroku.svg'
import vercel from '../../assets/images/logos/vercel.svg'
import firebase from '../../assets/images/logos/firebase.svg'
import docker from '../../assets/images/logos/docker.svg'
import googleBQ from '../../assets/images/logos/google_bigquery.svg'
import openApi from '../../assets/images/logos/openai.svg'
import apacheCamel from '../../assets/images/logos/apache-camel.svg'
import cursor from '../../assets/images/logos/cursor.png'
import prompting from '../../assets/images/logos/prompting.webp'
import mcp from '../../assets/images/logos/mcp.png'

const types = {
    language: "language",
    framework: "framework",
    library: "library",
    db: "database",
    query: "query",
    container: "container",
    styles: "styles",
    tool: "tool",
    monitoring: "monitoring",
    hosting: "hosting",
    ai: "ai",
    analytics: "analytics"
}

export const knowledges = [
    {
        section: 'Back End', 
        technologies: [
            {name: "java", img: java, type: types.language},
            {name: "spring", img: spring, type: types.framework},
            {name: "camel", img: apacheCamel, type: types.framework},
            {name: "go", img: go, type: types.language},
            {name: "gin", img: gin, type: types.framework},
            {name: "python", img: python, type: types.language}
        ]
    },
    {
        section: 'skills.sections.dataBase', 
        technologies: [
            {name: "sql", img: sql, type: types.query},
            {name: "postgreSQL", img: postgreSQL, type: types.db},
            {name: "mongoDB", img: mongo, type: types.db},
            {name: "redis", img: redis, type: types.db},
        ]
    },
    {
        section: 'AI',
        technologies: [
            {name: "openAI", img: openApi, type: types.ai},
            {name: "Prompting", img: prompting, type: types.ai},
            {name: "MCP", img: mcp, type: types.hosting},
            {name: "cursor", img: cursor, type: types.tool},
        ]
    },
    {
        section: 'Cloud',
        technologies: [
            {name: "heroku", img: heroku, type: types.hosting},
            {name: "vercel", img: vercel, type: types.hosting},
            {name: "firebase", img: firebase, type: types.hosting},
            {name: "docker", img: docker, type: types.container},
            {name: "googleBI", img: googleBQ, type: types.analytics},
            // AWS
        ]
    },
    {
        section: 'skills.sections.tools', 
        technologies: [
            {name: "datadog", img: datadog, type: types.monitoring},
            {name: "git", img: git, type: types.tool},
            {name: "github", img: github, type: types.tool},
            {name: "jira", img: jira, type: types.tool},
            {name: "kibana", img: kibana, type: types.monitoring},
            {name: "newRelic", img: newRelic, type: types.monitoring},
        ]
    },
    /*{
        section: 'Full Stack', 
        technologies: [
            {name: "css3", img: css3, type: types.styles},
            {name: "javaScript", img: javaScript, type: types.language},
            {name: "typeScript", img:typeScript, type: types.language},
            {name: "nest", img: nest, type: types.framework},
            {name: "react", img: react, type: types.library},
            {name: "redux", img: redux, type: types.library},
        ]
    }*/
]