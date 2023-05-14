import { createClient, MicroCMSQueries } from "microcms-js-sdk"

const client = createClient({
   serviceDomain: import.meta.env.SERVICE_DOMAIN,
   apiKey: import.meta.env.API_KEY,
});

export const getNews = async (queries: MicroCMSQueries) => {
   return await client.get({ endpoint: 'news', queries})
}