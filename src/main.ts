import { crawlPage } from "./helpers/crawlPage"
import { printReport } from "./helpers/printReport"

const main = async () => {
    // get base url from command args
    console.log(process.argv)
    if (process.argv.length <= 2){
        console.error("No base url provided")
        return
    }
    if (process.argv.length > 3){
        console.error("Too many parameters provided")
        return 
    }
    const baseUrl = process.argv[2]
    console.log(`Web crawling ${baseUrl}...`)
    const urls = await crawlPage(baseUrl, baseUrl, {})
    printReport(urls)
}

main()